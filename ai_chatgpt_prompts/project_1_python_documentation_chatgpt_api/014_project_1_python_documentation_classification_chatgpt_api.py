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
014_project_1_python_documentation_classification_chatgpt_api.py

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/ai_chatgpt_prompts/project_1_python_documentation_chatgpt_api/


[run]
python 014_project_1_python_documentation_classification_chatgpt_api.py

pip install Random

+ GREAT EXAMPLE FROM OPENAI.COM
https://platform.openai.com/examples






"""

import os
import openai

# quick and dirty
# PUT YOUR OWN ID FOR YOUR ORGANIZATION
openai.organization = 'org-L2P-YOUR_OPENAI_ORGANIZATION'

# PUT YOUR OWN PAID LICENCE AND DO NOT DISPLAY
openai.api_key = 'hj-jh87jk8XXX-YOUR_OPENAI_API_KEY-JqJ8d5456'

response = openai.Completion.create(
  model="text-davinci-003",
  
  # prompt="The following is a list of companies and the categories they fall into:\n\nApple, Facebook, Fedex\n\nApple\nCategory:",
  
  prompt="The following is a list of companies and the categories they fall into:\n\Canal +, France Médias Monde, El Pais\n\RENFE\nCategory:",



  temperature=0,
  max_tokens=64,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0
)


print('\n --- RESULT')
print(response)
# print(response.choices)
# desired_text = response.choices[0].text
# # print(desired_text)


