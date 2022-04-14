#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name nft_insights python=3.9.7
conda info --envs
source activate nft_insights
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/nft_insights/003_nft_image_generator


[file]
python main.py

[source]
https://github.com/kevinjanada/nft-image-generator

[required]
# install
pip install numpy
pip install pillow
pip install streamlit
pip install watchdog

pip install python-dotenv



# show what the requirements
pip freeze > nft_image_generator_requirements_1.txt
pip install -r nft_image_generator_requirements_1.txt


"""
from config import TRAIT_CONFIG
import math
from PIL import Image, ImageDraw
import random
from pprint import pprint
import requests
from dotenv import load_dotenv
import os
import glob
import json
from datetime import datetime

load_dotenv()

PINATA_JWT = os.getenv("PINATA_JWT")
PINATA_API_KEY = os.getenv("PINATA_API_KEY")
PINATA_API_SECRET = os.getenv("PINATA_API_SECRET")

PINATA_BASE_URL="https://api.pinata.cloud"

IMAGE_WIDTH = 631
IMAGE_HEIGHT = 631

WHITE = "#ffffff"

TOTAL_NFT = 100

trait_distribution = {
  "hat": {
    "square": 10,
    "circle": 30,
    "triangle": 60
  },
  "eyes": {
    "glasses": 10,
    "sleepy": 30,
    "wide-eyed": 60,
  },
  "mouth": {
    "smile": 10,
    "shout": 30, 
    "frown": 60,
  },
}

# Keep count while generating
trait_generated_count = {
  "hat": {
    "square": 0,
    "circle": 0,
    "triangle": 0
  },
  "eyes": {
    "glasses": 0,
    "sleepy": 0,
    "wide-eyed": 0,
  },
  "mouth": {
    "smile": 0,
    "shout": 0, 
    "frown": 0,
  },
}

"""
generate character with their traits
"""
def generate_characters():
  trait_keys = trait_distribution.keys()
  characters = []

  for i in range(TOTAL_NFT):
    char = {}
    for trait in list(trait_keys):
      char[trait] = ""
    for trait in trait_keys:
      trait_variations = trait_distribution[trait].keys()
      variation = ""
      can_generate = False
      while can_generate is False:
        variation = random.choice(list(trait_variations))
        trait_max_count = trait_distribution[trait][variation]
        trait_curr_count = trait_generated_count[trait][variation]
        can_generate = trait_curr_count < trait_max_count
      char[trait] = variation
      trait_generated_count[trait][variation] += 1
    
    characters.append(char)

  return characters


"""
generate character image based on character's traits
@return image path
"""
def generate_character_image(character):
  img = Image.new("RGB", (IMAGE_WIDTH, IMAGE_HEIGHT))
  bg = ImageDraw.Draw(img)
  bounding_box = [(0, 0), (IMAGE_WIDTH, IMAGE_HEIGHT)]
  bg.rectangle(bounding_box, fill=WHITE, outline="black")

  img_char = Image.open("./images_in/character.png")
  img.paste(img_char, (0, 0), img_char)

  for trait in list(trait_distribution.keys()):
    trait_var = character[trait]
    trait_var_img_path = TRAIT_CONFIG[trait]["variations"][trait_var]["image"]
    img_trait_var = Image.open(trait_var_img_path)
    img.paste(img_trait_var, (0, 0), img_trait_var)

  img_out_path = "./images_out/"
  trait_vars = [character[trait] for trait in list(trait_distribution.keys())] 
  for i, trait_var in enumerate(trait_vars):
    if i != 0:
      img_out_path += "_"
    img_out_path += f"{trait_var}"
  img_out_path += ".png"

  img.save(img_out_path)

  return img_out_path


def upload_image_to_ipfs(img_path):
  headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {PINATA_JWT}"
  }
  files = {"file": open(img_path, "rb")}
  try:
    resp = requests.post(f"{PINATA_BASE_URL}/pinning/pinFileToIPFS", headers=headers, files=files)
    resp = resp.json()
    print(resp)
    if "isDuplicate" in resp:
      return resp["IpfsHash"], resp["isDuplicate"], resp["Timestamp"]
    return resp["IpfsHash"], False, resp["Timestamp"]
  except Exception as e:
    print("upload_image_to_ipfs error", e)
    raise e


def upload_metadata_json_to_ipfs(name, metadata):
  headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {PINATA_JWT}"
  }
  data = {
    "pinataMetadata": { 
      "name": name,
    },
    "pinataContent": metadata
  }
  data = json.dumps(data, separators=(',', ':'))
  try:
    resp = requests.post(f"{PINATA_BASE_URL}/pinning/pinJSONToIPFS", headers=headers, data=data)
    resp = resp.json()
    print(resp)
    if "isDuplicate" in resp:
      return resp["IpfsHash"], resp["isDuplicate"], resp["Timestamp"]
    return resp["IpfsHash"], False, resp["Timestamp"]
  except Exception as e:
    print("upload_metadata_json_to_ipfs error", e)
    raise e


def clear_pinata_pins():
  headers = {
    "Accept": "*/*",
    "Authorization": f"Bearer {PINATA_JWT}"
  }
  resp = requests.get(f"{PINATA_BASE_URL}/data/pinList?pageLimit=1000", headers=headers)
  rows = resp.json()["rows"]
  for r in rows:
    ipfs_pin_hash = r["ipfs_pin_hash"]
    resp = requests.delete(f"{PINATA_BASE_URL}/pinning/unpin/{ipfs_pin_hash}", headers=headers)
    print(resp)


def generate_attribute_metadata(character):
  attributes = []
  for (trait_type, value) in character.items():
    attribute = { "trait_type": trait_type, "value": value }
    attributes.append(attribute)
  return attributes


def upload_nft_data_list_to_ipfs(nft_data_list):
  # Keep track of uploaded hashes datetime
  uploaded_hashes_datetime = {}
  for data in nft_data_list:
    if data["image_uploaded_to_ipfs_at"] == "":
      try:
        print("uploading ", data["name"], " image to ipfs")
        img_ipfs_hash, is_duplicate, timestamp = upload_image_to_ipfs(data["image"])
        data["image_ipfs_hash"] = img_ipfs_hash
        data["metadata"]["image"] = img_ipfs_hash
        if is_duplicate:
          data["image_uploaded_to_ipfs_at"] = uploaded_hashes_datetime[img_ipfs_hash]
        else:
          uploaded_hashes_datetime[img_ipfs_hash] = timestamp
          data["image_uploaded_to_ipfs_at"] = timestamp
      except:
        continue
    if data["metadata_uploaded_to_ipfs_at"] == "":
      try:
        print("uploading ", data["name"], " metadata to ipfs")
        metadata_ipfs_hash, is_duplicate, timestamp = upload_metadata_json_to_ipfs(data["name"] + ".json", data["metadata"])
        data["metadata_ipfs_hash"] = metadata_ipfs_hash
        if is_duplicate:
          data["metadata_uploaded_to_ipfs_at"] = uploaded_hashes_datetime[metadata_ipfs_hash]
        else:
          uploaded_hashes_datetime[metadata_ipfs_hash] = timestamp
          data["metadata_uploaded_to_ipfs_at"] = timestamp
      except Exception as e:
        print(e)
        continue
  return nft_data_list


def upload_data_to_ipfs():
  f = open("./nft_data.json")
  nft_data_list = json.load(f)
  nft_data_list = upload_nft_data_list_to_ipfs(nft_data_list)
  with open("./nft_data.json", "w") as outfile:
    outfile.write(json.dumps(nft_data_list, indent=2))


def empty_folder_contents(folder_path):
  files = glob.glob(folder_path + "/*")
  for f in files:
    os.remove(f)


"""
Generate NFT Data.
Construct a list of nft data including
  - NFT's id
  - NFT's name
  - image file path and ipfs hash (empty)
  - metadata and metadata ipfs hash (empty)
The NFT data json file will be used to:
  - Upload each nft image to IPFS
    The file will be updated with the hash of uploaded image
  - Upload each nft metadata to IPFS
    The file will be updated with the hash of uploaded metadata
"""
def generate_nft_data():
  empty_folder_contents("./images_out")
  characters = generate_characters()
  nft_data_list = []
  for i, c in enumerate(characters):
    nft_data = {
      "id": "",
      "name": "",
      "image": "",
      "image_ipfs_hash": "",
      "metadata": {
        "image": "",
        "attributes": []
      },
      "metadata_ipfs_hash": "",
      "image_uploaded_to_ipfs_at": "",
      "metadata_uploaded_to_ipfs_at": ""
    }

    nft_data["id"] = i + 1

    img_out_path = generate_character_image(c)
    nft_data["image"] = img_out_path

    character_name, ext = os.path.splitext(os.path.basename(os.path.normpath(img_out_path)))
    nft_data["name"] = character_name

    nft_data["metadata"]["attributes"] = generate_attribute_metadata(c)

    nft_data_list.append(nft_data)

  with open("./nft_data.json", "w") as outfile:
    outfile.write(json.dumps(nft_data_list, indent=2))


def count_unique_combinations():
  combinations = {}
  f = open("./nft_data.json")
  nft_data_list = json.load(f)
  for data in nft_data_list:
    trait_combo = ""
    for attr in data["metadata"]["attributes"]:
      trait_combo += attr["value"] + "_"
    if trait_combo not in combinations:
      combinations[trait_combo] = 0
    combinations[trait_combo] += 1

  print("There are", len(combinations.keys()), "unique trait combinations")

  

if __name__ == "__main__":
  generate_nft_data()
  #clear_pinata_pins()
  #upload_data_to_ipfs()
  #count_unique_combinations()
