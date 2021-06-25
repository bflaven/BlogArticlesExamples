#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 015_nlp_spacy_python.py





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

# RULE-BASED MATCHING USING SPACY
complete_text = (
    'Bruno Flaven has been a Project Manager in a wide variety of Internet business applications both in Mobile and in Desktop for 20 years now.'

    'You can ﬁnd more information about his professional life on his personal website (www.ﬂaven.fr) or his linkedin proﬁle: https://fr.linkedin.com/in/brunoﬂaven. He is currently working for a Paris-base In France Media Monde (FMM) mostly on mobile applications (iOS and Android). He is currently P.O for a Backoffice project made with Symfony.'

    'He also made few trainings to facilitate the handling of the tools that he helps to make.'
)

def extract_full_name(nlp_doc):
    pattern = [{'POS': 'PROPN'}, {'POS': 'PROPN'}]
    matcher.add('FULL_NAME', [pattern])
    matches = matcher(nlp_doc)
    for match_id, start, end in matches:
        span = nlp_doc[start:end]
        return span.text
    

matcher = Matcher(nlp.vocab)
complete_doc = nlp(complete_text)

print("\n --- result_2")
# output
print(extract_full_name(complete_doc))

# In this example, pattern is a list of objects that defines the combination of tokens to be matched. Both POS tags in it are PROPN (proper noun). So, the pattern consists of two objects in which the POS tags for both tokens should be PROPN. This pattern is then added to Matcher using FULL_NAME and the the match_id. Finally, matches are obtained with their starting and end indexes.

