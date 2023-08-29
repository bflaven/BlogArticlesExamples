#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
conda create --name tagging_entity_extraction python=3.9.13
conda info --envs
source activate tagging_entity_extraction
conda deactivate

# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
conda env remove -n chainlit_python
conda env remove -n ai_chatgpt_prompts

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > tagging_entity_extraction.txt



# to install
pip install -r tagging_entity_extraction.txt


cd /Users/brunoflaven/Documents/01_work/blog_articles/ml_label_studio/files_for_github_ml_label_studio/01_spacy_tagging_entity_extraction/



python 02_medium_demo_johnidouglasmarangon.py


# to use displacy
pip install ipython

# check the file
https://gist.github.com/johnidm/27e3b2ff50e592bc37183907ba97d31d


"""

import spacy
from spacy import displacy
import urllib

nlp = spacy.load("pt_core_news_md")

url = "https://gist.githubusercontent.com/johnidm/157acebd00fcb70d8044b43cc02ab884/raw/99a97a9d1f866dab9e2b54378f039fc435ffbf4e/document.txt"


document = urllib.request.urlopen(url).read().decode("utf-8")
doc = nlp(document)
data = spacy.displacy.render(doc, style="ent", jupyter=False)

with open("data_02.html", "w") as file:
    file.write(data)
