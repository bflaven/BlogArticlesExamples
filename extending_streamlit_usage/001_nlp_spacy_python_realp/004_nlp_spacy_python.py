#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 004_nlp_spacy_python.py





# source
Source: https://realpython.com/natural-language-processing-spacy-python/


"""

import re
import spacy_streamlit
import spacy
from spacy.tokenizer import Tokenizer


custom_nlp = spacy.load('en_core_web_sm')
print("\n --- result_1")
print("EN spacy loaded")

# FUNCTIONS
def debug_text_enumerate(doc):
    for i, token in enumerate(doc):
        # DEBUG
        print(i, token, token.pos_, token.dep_)
        # print(i, token.text, token.pos_, token.dep_)
        # print(i, token.text, token.ent_type)
        # print(i, token.text, token.ent_type_)
        # print(i, token.text, token.ent_type, token.ent_type_)
        # print(i, token.text, token.head)

        # print(doc[i].text)
        # print(doc[i])
        # print(i, doc[i], doc[i].pos_, doc[i].dep_)
        # and so on...


def debug_text_loop(doc):
    for token in doc:
        # print(token, token.pos_, token.dep_)
        # print(token.text, token.pos_, token.dep_)
        # print(token.text, token.ent_type)
        # print(token.text, token.ent_type_)
        # print(token.text, token.ent_type, token.ent_type_)
        print(token.text, token.head)
        
 
# You can also customize the tokenization process to detect tokens on custom characters. This is often used for hyphenated words, which are words joined with hyphen. For example, “London-based” is a hyphenated word.

# spaCy allows you to customize tokenization by updating the tokenizer property on the nlp object.
    
          

prefix_re = spacy.util.compile_prefix_regex(custom_nlp.Defaults.prefixes)
suffix_re = spacy.util.compile_suffix_regex(custom_nlp.Defaults.suffixes)
infix_re = re.compile(r'''[-~]''')

def customize_tokenizer(nlp):
    # Adds support to use `-` as the delimiter for tokenization
    return Tokenizer(nlp.vocab, prefix_search=prefix_re.search,suffix_search=suffix_re.search, infix_finditer=infix_re.finditer,
token_match=None)


# file_name = 'article_bf_1.txt'
# all_file_text = open(file_name).read()

all_file_text = (
                'Bruno Flaven has been a Project Manager in a wide variety of Internet business applications both in Mobile and in Desktop for 20 years now.'
                 'You can ﬁnd more information about his professional life on his personal website (www.ﬂaven.fr) or his linkedin proﬁle: https://fr.linkedin.com/in/brunoﬂaven.'
                 'He is currently working for a Paris-base In France Media Monde (FMM) mostly on mobile applications (iOS and Android). He is currently P.O for a Backoffice project made with Symfony.' 
                 'He also made few trainings to facilitate the handling of the tools that he helps to make.')



custom_nlp.tokenizer = customize_tokenizer(custom_nlp)
custom_tokenizer_all_file_doc = custom_nlp(all_file_text)
print([token.text for token in custom_tokenizer_all_file_doc])







