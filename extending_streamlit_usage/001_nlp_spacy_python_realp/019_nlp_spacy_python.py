#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/

[file]
python 019_nlp_spacy_python.py



# source
Source: https://realpython.com/natural-language-processing-spacy-python/


"""

import spacy
from spacy import displacy
from spacy.matcher import Matcher

# EN
nlp = spacy.load('en_core_web_sm')

# FR
# nlp = spacy.load('fr_core_news_sm')

print("\n --- result_1")
# EN
print("EN spacy loaded")

# FR
# print("FR spacy loaded")


# Dependency Parsing Using spaCy
print("\n --- result_2")

file_name = 'article_bf_1.txt'
file_name = 'article_bf_2.txt'
all_file_text = open(file_name).read()
all_file_doc = nlp(all_file_text)

for token in all_file_doc:
    print(token.text, token.tag_, token.head.text, token.dep_)
 
print("\n --- result_3")
displacy.serve(all_file_doc, style='dep')

