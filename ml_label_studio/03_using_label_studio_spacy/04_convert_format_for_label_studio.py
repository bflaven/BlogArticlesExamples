#!/usr/bin/python
# -*- coding: utf-8 -*-
#

"""
[ENV_1]
# Conda Environment
conda create --name using_label_studio python=3.9.13
conda info --envs
source activate using_label_studio
conda deactivate

[ENV_2]
# Conda Environment
conda create --name tagging_entity_extraction python=3.9.13
conda info --envs
source activate tagging_entity_extraction
conda deactivate


# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_tagging_entity_extraction.txt

# to install
pip install -r requirements_tagging_entity_extraction.txt

# [path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/using_label_studio_spacy/

# V0
python 01_convert_format_for_label_studio.py reddit_r_cooking_sample.jsonl

python 01_convert_format_for_label_studio.py reddit_r_cooking_sample.jsonl > using_label_studio_spacy_samples_1.json

# V1
python 03_convert_format_for_label_studio.py



# extra stuff
pip install jupyter 

"""


import json 
import pandas as pd
import sys


# V0
# df = pd.read_json(sys.argv[1], lines=True)
# DEBUG
# print(df)
# docs = [{ 'data': {'text': text } } for text in df['text']]


# V1

# Read the JSON file into a DataFrame
df = pd.read_json('reddit_r_cooking_sample.jsonl', lines=True)

new_df = [{'data': {'text': text}} for text in df['text']]

# Output the result
# print(new_df)

# Output the list of JSON objects to a file
output_file = "002_label_studio_samples.json"
with open(output_file, 'w') as f:
    json.dump(new_df, f)
