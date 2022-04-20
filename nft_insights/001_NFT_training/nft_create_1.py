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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/nft_insights/001_NFT_training/


[file]
python nft_create_1.py

# Define TOTAL_IMAGES before

[source]
https://betterprogramming.pub/create-your-own-nft-collection-with-python-82af40abf99f
https://github.com/sonmh79/NFT_training/blob/master/nft_create.py

[required]
# install
pip install numpy
pip install pillow
pip install python-dotenv

# if you want to extend you script to a streamlit app
pip install streamlit
pip install watchdog

# show what the requirements
pip freeze > nft_image_generator_requirements_1.txt
pip install -r nft_image_generator_requirements_1.txt

# remove the ditrectories before using the script
rm -R images
rm -R metadata

"""
from PIL import Image
from IPython.display import display
import random
import json
import os

class NFT:

    # Each image is made up a series of traits
    # The weightings for each trait drive the rarity and add up to 100%

    face = ["White", "Black"]
    face_weights = [65, 35]

    ears = ["ears1", "ears2", "ears3", "ears4"]
    ears_weights = [50, 24, 24, 2]

    eyes = ["regular", "small", "rayban", "hipster", "focused"]
    eyes_weights = [70, 10, 5, 1, 14]

    hair = ['hair1', 'hair10', 'hair11', 'hair12', 'hair2', 'hair3', 'hair4',
            'hair5',
            'hair6',
            'hair7',
            'hair8',
            'hair9']
    hair_weights = [10 , 10 , 10 , 10 ,10, 10, 10 ,10 ,10, 7 , 1 , 2]

    mouth = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6']
    mouth_weights = [10, 10, 50, 10, 15, 5]

    nose = ['n1', 'n2']
    nose_weights = [90, 10]

    access = ["acc1","acc2","acc3"]
    access_weights = [5, 5, 90]

    beard = ["b1","b2","b3","b4","b5","b6","b7","b8"]
    beard_weights = [1, 2, 3, 4, 5, 6, 7, 72]

    face_files = {
        "White": "face1",
        "Black": "face2"
    }

    ears_files = {
        "ears1": "ears1",
        "ears2": "ears2",
        "ears3": "ears3",
        "ears4": "ears4"
    }

    eyes_files = {
        "regular": "eyes1",
        "small": "eyes2",
        "rayban": "eyes3",
        "hipster": "eyes4",
        "focused": "eyes5"
    }

    hair_files = {
        "hair1": "hair1",
        "hair2": "hair2",
        "hair3": "hair3",
        "hair4": "hair4",
        "hair5": "hair5",
        "hair6": "hair6",
        "hair7": "hair7",
        "hair8": "hair8",
        "hair9": "hair9",
        "hair10": "hair10",
        "hair11": "hair11",
        "hair12": "hair12"
    }

    mouth_files = {
        "m1": "m1",
        "m2": "m2",
        "m3": "m3",
        "m4": "m4",
        "m5": "m5",
        "m6": "m6"
    }

    nose_files = {
        "n1": "n1",
        "n2": "n2"
    }

    access_files = {
        "acc1": "acc1",
        "acc2": "acc2",
        "acc3": "acc3"
    }

    beard_files = {
        "b1": "beard1",
        "b2": "beard2",
        "b3": "beard3",
        "b4": "beard4",
        "b5": "beard5",
        "b6": "beard6",
        "b7": "beard7",
        "b8": "beard8"
    }
    ## Generate Traits

    TOTAL_IMAGES = 100  # Number of random unique images we want to generate

    all_images = []

    def __init__(self):

        face,ears,eyes,hair,mouth,nose,access,beard = self.face,self.ears,self.eyes,self.hair,self.mouth,self.nose,self.access,self.beard
        face_weights, ears_weights, eyes_weights, hair_weights, mouth_weights, nose_weights, access_weights, beard_weights = self.face_weights, self.ears_weights, self.eyes_weights, self.hair_weights, self.mouth_weights, self.nose_weights, self.access_weights, self.beard_weights
        all_images = self.all_images
        TOTAL_IMAGES = self.TOTAL_IMAGES

        # A recursive function to generate unique image combinations
        def _create_new_image():
            new_image = {}  #

            # For each trait category, select a random trait based on the weightings
            new_image["Face"] = random.choices(face, face_weights)[0]
            new_image["Ears"] = random.choices(ears, ears_weights)[0]
            new_image["Eyes"] = random.choices(eyes, eyes_weights)[0]
            new_image["Hair"] = random.choices(hair, hair_weights)[0]
            new_image["Mouth"] = random.choices(mouth, mouth_weights)[0]
            new_image["Nose"] = random.choices(nose, nose_weights)[0]
            new_image["Access"] = random.choices(access, access_weights)[0]
            new_image["Beard"] = random.choices(beard, beard_weights)[0]

            if new_image in all_images:
                return _create_new_image()
            else:
                return new_image


        # Generate the unique combinations based on trait weightings
        for i in range(TOTAL_IMAGES):
            new_trait_image = _create_new_image()

            all_images.append(new_trait_image)


        def _all_images_unique(all_images):
            seen = list()
            return not any(i in seen or seen.append(i) for i in all_images)


        print("Are all images unique?", _all_images_unique(all_images))
        # Add token Id to each image
        i = 0
        for item in all_images:
            item["tokenId"] = i
            i = i + 1

        print(all_images)

    def trait_counts(self):

        face, ears, eyes, hair, mouth, nose, access, beard = self.face, self.ears, self.eyes, self.hair, self.mouth, self.nose, self.access, self.beard
        all_images = self.all_images

        # Get Trait Counts

        face_count = {}
        for item in face:
            face_count[item] = 0

        ears_count = {}
        for item in ears:
            ears_count[item] = 0

        eyes_count = {}
        for item in eyes:
            eyes_count[item] = 0

        hair_count = {}
        for item in hair:
            hair_count[item] = 0

        mouth_count = {}
        for item in mouth:
            mouth_count[item] = 0

        nose_count = {}
        for item in nose:
            nose_count[item] = 0

        access_count = {}
        for item in access:
            access_count[item] = 0

        beard_count = {}
        for item in beard:
            beard_count[item] = 0

        for image in all_images:
            face_count[image["Face"]] += 1
            ears_count[image["Ears"]] += 1
            eyes_count[image["Eyes"]] += 1
            hair_count[image["Hair"]] += 1
            mouth_count[image["Mouth"]] += 1
            nose_count[image["Nose"]] += 1
            access_count[image["Access"]] += 1
            beard_count[image["Beard"]] += 1

        print(face_count)
        print(ears_count)
        print(eyes_count)
        print(hair_count)
        print(mouth_count)
        print(nose_count)
        print(access_count)
        print(beard_count)

    def create_images(self):

        all_images = self.all_images
        face_files, ears_files, eyes_files, hair_files, mouth_files, nose_files, access_files, beard_files = self.face_files, self.ears_files, self.eyes_files, self.hair_files, self.mouth_files, self.nose_files, self.access_files, self.beard_files

        #### Generate Images

        os.mkdir(f'./images')

        for item in all_images:
            im1 = Image.open(f'./scripts/face_parts/face/{face_files[item["Face"]]}.png').convert('RGBA')
            im2 = Image.open(f'./scripts/face_parts/eyes/{eyes_files[item["Eyes"]]}.png').convert('RGBA')
            im3 = Image.open(f'./scripts/face_parts/ears/{ears_files[item["Ears"]]}.png').convert('RGBA')
            im4 = Image.open(f'./scripts/face_parts/hair/{hair_files[item["Hair"]]}.png').convert('RGBA')
            im5 = Image.open(f'./scripts/face_parts/mouth/{mouth_files[item["Mouth"]]}.png').convert('RGBA')
            im6 = Image.open(f'./scripts/face_parts/nose/{nose_files[item["Nose"]]}.png').convert('RGBA')
            im7 = Image.open(f'./scripts/face_parts/access/{access_files[item["Access"]]}.png').convert('RGBA')
            im8 = Image.open(f'./scripts/face_parts/beard/{beard_files[item["Beard"]]}.png').convert('RGBA')

            # Create each composite
            com1 = Image.alpha_composite(im1, im2)
            com2 = Image.alpha_composite(com1, im3)
            com3 = Image.alpha_composite(com2, im4)
            com4 = Image.alpha_composite(com3, im5)
            com5 = Image.alpha_composite(com4, im6)
            com6 = Image.alpha_composite(com5, im7)
            com7 = Image.alpha_composite(com6, im8)

            # Convert to RGB
            rgb_im = com7.convert('RGB')
            file_name = str(item["tokenId"]) + ".png"
            rgb_im.save("./images/" + file_name)

    def create_metadata(self):

        """ 각 이미지 별 Json 파일 생성 """

        #### Generate Metadata for all Traits
        os.mkdir(f'./metadata')

        METADATA_FILE_NAME = './metadata/all-traits.json';
        with open(METADATA_FILE_NAME, 'w') as outfile:
            json.dump(self.all_images, outfile, indent=4)

        #### Generate Metadata for each Image

        f = open('./metadata/all-traits.json', )
        data = json.load(f)

        # Changes this IMAGES_BASE_URL to yours
        IMAGES_BASE_URL = "https://gateway.pinata.cloud/ipfs/QmcKH9bwdM3KGij799reUYA24jtufvHSoYmY5xMXEM7T4E/"
        PROJECT_NAME = "NFT_CREATOR"

        def getAttribute(key, value):
            return {
                "trait_type": key,
                "value": value
            }

        for i in data:
            token_id = i['tokenId']
            token = {
                "image": IMAGES_BASE_URL + str(token_id) + '.png',
                "tokenId": token_id,
                "name": PROJECT_NAME + ' ' + str(token_id),
                "attributes": []
            }
            token["attributes"].append(getAttribute("Face", i["Face"]))
            token["attributes"].append(getAttribute("Ears", i["Ears"]))
            token["attributes"].append(getAttribute("Eyes", i["Eyes"]))
            token["attributes"].append(getAttribute("Hair", i["Hair"]))
            token["attributes"].append(getAttribute("Mouth", i["Mouth"]))
            token["attributes"].append(getAttribute("Nose", i["Nose"]))
            token["attributes"].append(getAttribute("Access", i["Access"]))
            token["attributes"].append(getAttribute("Beard", i["Beard"]))

            with open('./metadata/' + str(token_id) + ".json", 'w') as outfile:
                json.dump(token, outfile, indent=4)
        f.close()

    

if __name__ == "__main__":
    nft = NFT()
    nft.create_images()
    nft.create_metadata()



