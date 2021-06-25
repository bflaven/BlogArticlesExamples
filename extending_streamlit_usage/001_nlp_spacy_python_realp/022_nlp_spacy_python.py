#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 022_nlp_spacy_python.py



# source
Source: https://realpython.com/natural-language-processing-spacy-python/

# required
pip install textacy

# more
https://spacy.io/usage/rule-based-matching


"""

import spacy
from spacy import displacy
from spacy.matcher import Matcher
import textacy
# from textacy import Extract


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

# Verb Phrase Detection

about_talk_text = (
'The talk will introduce reader about Use'
' cases of Natural Language Processing in'
' Fintech'
                                       )
# pattern = r'(<VERB>?<ADV>*<VERB>+)'
pattern = [{'POS': 'VERB'}]

about_talk_doc = textacy.make_spacy_doc(about_talk_text, lang='en_core_web_sm')


# verb_phrases = textacy.extract(about_talk_doc, pattern)
# verb_phrases = textacy.extract.matches(about_talk_doc, pattern)
# verb_phrases = textacy.extract.matches(about_talk_doc, patterns=pattern)
# all_verb_phrases = list(verb_phrases)


"""
pattern = [{'POS':'VERB'}]
def tagging(txt):
verb_phrases = textacy.extract.matches(txt, patterns=pattern)
return list(verb_phrases)
"""
"""
# Print all Verb Phrase
for chunk in verb_phrases:
    print(chunk.text)

# Extract Noun Phrase to explain what nouns are involved
for chunk in about_talk_doc.noun_chunks:
    print(chunk)
"""
