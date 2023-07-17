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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/ai_chatgpt_prompts/project_1_python_documentation_chatgpt_api/


[run]
python 009_project_1_python_documentation_default_translate_code_chatgpt_api.py


+ GREAT EXAMPLE FROM OPENAI.COM
https://platform.openai.com/examples




"""
# OPENAI_ORGANIZATION = 'org-HcXi3tfxyIzF8xYJn59XWWfZ'
# OPENAI_API_KEY = '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'

import os
import openai


# quick and dirty
# PUT YOUR OWN ID FOR YOUR ORGANIZATION
openai.organization = 'org-L2P-YOUR_OPENAI_ORGANIZATION'

# PUT YOUR OWN PAID LICENCE AND DO NOT DISPLAY
openai.api_key = 'hj-jh87jk8XXX-YOUR_OPENAI_API_KEY-JqJ8d5456'





PROMPT_INPUT = '##### Translate this function  from Python into Haskell\n### Python\n\ndef predict_proba(X: Iterable[str]):\n  return np.array([predict_one_probas(tweet) for tweet in X])\n\n### Haskell'

response = openai.Completion.create(
    model="text-davinci-003",
    prompt=PROMPT_INPUT,
    temperature=0,
    max_tokens=150,
    top_p=1.0,
    frequency_penalty=0.0,
    presence_penalty=0.0,
    stop=["###"]
)

print('\n --- RESULT')
print(response)
