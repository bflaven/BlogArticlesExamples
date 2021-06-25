#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 008_nlp_spacy_python.py

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
            'Gus Proto is a Python developer currently'
            'working for a London-based Fintech company. He is'
            ' interested in learning Natural Language Processing.'
            ' There is a developer conference happening on 21 July'
            ' 2019 in London. It is titled "Applications of Natural'
            ' Language Processing". There is a helpline number '
            ' available at +1-1234567891. Gus is helping organize it.'
            ' He keeps organizing local Python meetups and several'
            ' internal talks at his workplace. Gus is also presenting'
            ' a talk. The talk will introduce the reader about "Use'
            ' cases of Natural Language Processing in Fintech".'
            ' Apart from his work, he is very passionate about music.'
            ' Gus is learning to play the Piano. He has enrolled '
            ' himself in the weekend batch of Great Piano Academy.'
            ' Great Piano Academy is situated in Mayfair or the City'
            ' of London and has world-class piano instructors.'
            )
"""

complete_text = (
    'Bruno Flaven has been a Project Manager in a wide variety of Internet business applications both in Mobile and in Desktop for 20 years now.'

    'You can ﬁnd more information about his professional life on his personal website (www.ﬂaven.fr) or his linkedin proﬁle: https://fr.linkedin.com/in/brunoﬂaven. He is currently working for a Paris-base In France Media Monde (FMM) mostly on mobile applications (iOS and Android). He is currently P.O for a Backoffice project made with Symfony.'

    'He also made few trainings to facilitate the handling of the tools that he helps to make.')


complete_doc = nlp(complete_text)
# Remove stop words and punctuation symbols
words = [token.text for token in complete_doc
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


