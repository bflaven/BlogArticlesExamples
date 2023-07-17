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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/ai_chatgpt_prompts/project_1_python_documentation_chatgpt_api/


[run]
python 001_project_1_python_documentation_chatgpt_api.py


Source : https://platform.openai.com/docs/api-reference/introduction



"""
# quick and dirty
# PUT YOUR OWN ID FOR YOUR ORGANIZATION
# OPENAI_ORGANIZATION = 'org-L2P-YOUR_OPENAI_ORGANIZATION'

# PUT YOUR OWN PAID LICENCE AND DO NOT DISPLAY
# OPENAI_API_KEY = 'hj-jh87jk8XXX-YOUR_OPENAI_API_KEY-JqJ8d5456'

import os
import openai

# openai.organization = OPENAI_ORGANIZATION
# openai.api_key = os.getenv(OPENAI_API_KEY)


# print os.environ
# print(os.environ['HOME'])
# print(os.environ)

# quick and dirty 
openai.organization = 'org-L2P-YOUR_OPENAI_ORGANIZATION'
# openai.api_key = os.getenv("OPENAI_API_KEY")

# PAID ONE DO NOT DISPLAY
openai.api_key = 'hj-jh87jk8XXX-YOUR_OPENAI_API_KEY-JqJ8d5456'


openai.Model.list()

model_list = openai.Model.list()

print('\n --- RESULT')

# working
print(model_list)



"""

#QUERY_1
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer hj-jh87jk8XXX-YOUR_OPENAI_API_KEY-JqJ8d5456" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'
   
#QUERY_2
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer hj-jh87jk8XXX-YOUR_OPENAI_API_KEY-JqJ8d5456" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say my name is Bond, James Bond"}],
     "temperature": 0.7
   }'
"""

