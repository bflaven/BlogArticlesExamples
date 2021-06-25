#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 020_nlp_spacy_python.py



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



# SHALLOW PARSING

# Shallow parsing, or chunking, is the process of extracting phrases from unstructured text. Chunking groups adjacent tokens into phrases on the basis of their POS tags. There are some standard well-known chunks such as noun phrases, verb phrases, and prepositional phrases.


print("\n --- result_2")

# Noun Phrase Detection
# A noun phrase is a phrase that has a noun as its head. It could also include other kinds of words, such as adjectives, ordinals, determiners. Noun phrases are useful for explaining the context of the sentence. They help you infer what is being talked about in the sentence.

# spaCy has the property noun_chunks on Doc object. You can use it to extract noun phrases

conference_text = (
'There is a developer conference'
' happening on 21 July 2019 in London.'
                   )

conference_doc = nlp(conference_text)

# Extract Noun Phrases
for chunk in conference_doc.noun_chunks:
    print(chunk)





