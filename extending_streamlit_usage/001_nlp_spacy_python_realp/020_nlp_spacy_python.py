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


# NAVIGATING THE TREE AND SUBTREE
print("\n --- result_2")

one_line_about_text = (
    'Gus Proto is a Python developer'
                       ' currently working for a London-based Fintech company'
                       )

"""
one_line_about_text = (
    'Bruno Flaven has been a Project Manager in a wide variety of Internet business applications both in Mobile and in Desktop for 20 years now.'

    'You can ﬁnd more information about his professional life on his personal website (www.ﬂaven.fr) or his linkedin proﬁle: https://fr.linkedin.com/in/brunoﬂaven. He is currently working for a Paris-base In France Media Monde (FMM) mostly on mobile applications (iOS and Android). He is currently P.O for a Backoffice project made with Symfony.'

    'He also made few trainings to facilitate the handling of the tools that he helps to make.')
"""

one_line_about_doc = nlp(one_line_about_text)

print("\n --- one_line_about_text")
print(one_line_about_text)


print("\n --- result_3 ")
# Extract children of `developer`
print([token.text for token in one_line_about_doc[5].children])

# Extract previous neighboring node of `developer`
print(one_line_about_doc[5].nbor(-1))

# Extract next neighboring node of `developer`
print(one_line_about_doc[5].nbor())

# Extract all tokens on the left of `developer`
print([token.text for token in one_line_about_doc[5].lefts])

# Extract tokens on the right of `developer`
print([token.text for token in one_line_about_doc[5].rights])

# Print subtree of `developer`
print(list(one_line_about_doc[5].subtree))




