#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 002c_nlp_spacy_python.py




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

# Add the decorator `@Language.component` (for function components) or `@Language.factory` (for class components / factories) to your custom component and assign it a name, e.g. `@Language.component('your_name')`. You can then run `nlp.add_pipe('your_name')` to add it to the pipeline.

def set_custom_boundaries(doc):
       # Adds support to use `   ` as the delimiter for sentence detection
       for token in doc[:-1]:
            if token.text == '   ':
                doc[token.i+1].is_sent_start = True
                return doc


ellipsis_text = ('Gus, can you,     never mind, I forgot'
                 ' what I was saying. So, do you think'
                 ' we should    ')

custom_nlp = spacy.load('en_core_web_sm')

Language.component("the_set_custom_boundaries", func=set_custom_boundaries)
custom_nlp.add_pipe("the_set_custom_boundaries", last=True)
custom_ellipsis_doc = custom_nlp(ellipsis_text)
custom_ellipsis_sentences = list(custom_ellipsis_doc.sents)

print("\n --- result_5")
for sentence in custom_ellipsis_sentences:
    print(sentence)

# Gus, can you,     never mind, I forgot what I was saying.
# So, do you think we should
