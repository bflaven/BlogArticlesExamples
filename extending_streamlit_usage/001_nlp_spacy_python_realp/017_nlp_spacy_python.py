#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 017_nlp_spacy_python.py



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


matcher = Matcher(nlp.vocab)
conference_org_text = (
            'There is a developer conference'
            'happening on 21 July 2019 in London. It is titled'
            ' "Applications of Natural Language Processing".'
            ' There is a helpline number available'
            ' at (123) 456-789'
     )

def extract_phone_number(nlp_doc):
    pattern = [{'ORTH': '('}, {'SHAPE': 'ddd'},
               {'ORTH': ')'}, {'SHAPE': 'ddd'},                
               {'ORTH': '-', 'OP': '?'},
               {'SHAPE': 'ddd'}]
    # matcher.add('PHONE_NUMBER', None, [pattern])
    matcher.add('PHONE_NUMBER', [pattern])
    matches = matcher(nlp_doc)
    for match_id, start, end in matches:
        span = nlp_doc[start:end]
        return span.text


conference_org_doc = nlp(conference_org_text)
print("\n --- result_2")
# output
print(extract_phone_number(conference_org_doc))


