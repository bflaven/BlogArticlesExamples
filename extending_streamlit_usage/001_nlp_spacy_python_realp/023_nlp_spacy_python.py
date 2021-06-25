#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 023_nlp_spacy_python.py



# source
Source: https://realpython.com/natural-language-processing-spacy-python/


"""

import spacy
from spacy import displacy

# EN
nlp = spacy.load('en_core_web_sm')

# FR
# nlp = spacy.load('fr_core_news_sm')

print("\n --- result_1")
# EN
print("EN spacy loaded")

# FR
# print("FR spacy loaded")


piano_class_text = (
                        'Great Piano Academy is situated'
                        ' in Mayfair or the City of London and has'
                        ' world-class piano instructors.'
                         )
piano_class_doc = nlp(piano_class_text)

for ent in piano_class_doc.ents:
    print(ent.text, ent.start_char, ent.end_char,ent.label_, spacy.explain(ent.label_))

# OUTPUT    
displacy.serve(piano_class_doc, style='ent')


