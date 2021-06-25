#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 002b_nlp_spacy_python.py




# source
Source: https://realpython.com/natural-language-processing-spacy-python/

# required
pip install spacy-langdetect

# validation
python -m spacy validate

"""
from spacy_langdetect import LanguageDetector
from spacy.language import Language
import spacy
import spacy_streamlit

nlp = spacy.load('en_core_web_sm')


# SENTENCE DETECTION PART_2


def get_lang_detector(nlp, name):
    return LanguageDetector()

Language.factory("language_detector", func=get_lang_detector)
nlp.add_pipe('language_detector', last=True)
text = 'This is an english text.'
doc = nlp(text)
print(doc._.language)



