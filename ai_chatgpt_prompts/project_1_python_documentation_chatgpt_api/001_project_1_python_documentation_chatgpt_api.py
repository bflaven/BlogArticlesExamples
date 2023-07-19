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
001_project_1_python_documentation_chatgpt_api.py

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/ai_chatgpt_prompts/project_1_python_documentation_chatgpt_api/


[run]
python 001_project_1_python_documentation_chatgpt_api.py


Source : https://platform.openai.com/docs/api-reference/introduction



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


openai.Model.list()

model_list = openai.Model.list()

print('\n --- RESULT')

# working
print(model_list)



"""

#QUERY_1
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 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" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'
   
#QUERY_2
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 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" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say my name is Bond, James Bond"}],
     "temperature": 0.7
   }'
"""

