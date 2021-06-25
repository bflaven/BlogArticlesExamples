#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 009_nlp_spacy_python.py





# source
Source: https://realpython.com/natural-language-processing-spacy-python/


"""

import spacy
from collections import Counter


# EN
nlp = spacy.load('en_core_web_sm')

# FR
# nlp = spacy.load('fr_core_news_sm')

print("\n --- result_1")
# EN
print("EN spacy loaded")

# FR
# print("FR spacy loaded")

# WORD FREQUENCY
print("\n --- result_2")
"""
complete_text = (
    'Bruno Flaven has been a Project Manager in a wide variety of Internet business applications both in Mobile and in Desktop for 20 years now.'

    'You can ﬁnd more information about his professional life on his personal website (www.ﬂaven.fr) or his linkedin proﬁle: https://fr.linkedin.com/in/brunoﬂaven. He is currently working for a Paris-base In France Media Monde (FMM) mostly on mobile applications (iOS and Android). He is currently P.O for a Backoffice project made with Symfony.'

    'He also made few trainings to facilitate the handling of the tools that he helps to make.')

complete_doc = nlp(complete_text)
"""

# file_name = 'article_bf_1.txt'
file_name = 'article_bf_2.txt'
all_file_text = open(file_name).read()
all_file_doc = nlp(all_file_text)

# Remove stop words and punctuation symbols
words = [token.text for token in all_file_doc
              if not token.is_stop and not token.is_punct]
word_freq = Counter(words)
# 5 commonly occurring words with their frequencies
common_words = word_freq.most_common(5)
print("\n --- 5 commonly occurring words")
print(common_words)

# Unique words
print("\n --- Unique words")
unique_words = [word for (word, freq) in word_freq.items() if freq == 1]
print(unique_words)


