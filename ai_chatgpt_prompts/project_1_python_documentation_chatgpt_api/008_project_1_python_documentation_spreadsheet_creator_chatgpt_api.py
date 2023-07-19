#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
# NO CONDA ENV

conda create --name ai_chatgpt_prompts python=3.9.13
conda info --envs
source activate ai_chatgpt_prompts
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]


# update conda 
conda update -n base -c defaults conda

[filename]
008_project_1_python_documentation_spreadsheet_creator_chatgpt_api.py

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/ai_chatgpt_prompts/project_1_python_documentation_chatgpt_api/


[run]
python 008_project_1_python_documentation_spreadsheet_creator_chatgpt_api.py

+ GREAT EXAMPLE FROM OPENAI.COM
https://platform.openai.com/examples




"""
import os
import openai

# personal configuration
import config_values.values_conf as conf

OPENAI_ORGANIZATION = conf.OPENAI_ORGANIZATION
OPENAI_API_KEY = conf.OPENAI_API_KEY

# quick and dirty
openai.organization = OPENAI_ORGANIZATION
# PAID ONE DO NOT DISPLAY
openai.api_key = OPENAI_API_KEY



# PROMPT_INPUT = 'A two-column spreadsheet of top science fiction movies and the year of release:\n\nTitle |  Year of release'
PROMPT_INPUT = 'A four-column spreadsheet with a random choice of 5 countries with their name in english, name in spanish, capital and their top-level domains:\n\nNAME (English) | NOMBRE (Spanish) | CAPITAL | TLD'


response = openai.Completion.create(
    model="text-davinci-003",
    prompt=PROMPT_INPUT,
    temperature=0.5,
    max_tokens=60,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=0.0
)

print('\n --- RESULT')
# print(response)
print(response.choices[0].text)

"""----------------------------------------------------------------
Canada | Canadá | Ottawa | .ca
Mexico | México | Mexico City | .mx
Brazil | Brasil | Brasília | .br
Argentina | Argentina | Buenos Aires | .ar
Chile | Chile | Santiago | .cl
"""
