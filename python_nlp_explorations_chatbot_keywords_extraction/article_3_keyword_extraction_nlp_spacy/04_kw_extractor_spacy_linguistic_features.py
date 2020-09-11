#!/usr/bin/python
# -*- coding: utf-8 -*-
# 

"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_3_keyword_extraction_nlp_spacy/


python 04_kw_extractor_spacy_linguistic_features.py


"""

import spacy
from collections import Counter
from string import punctuation


# download best-matching version of specific model for your spaCy installation
# python -m spacy download en_core_web_sm


# nlp = spacy.load("en_core_web_sm")
# doc = nlp("This is a sentence.")
# print(doc)

# download best-matching version of specific model for your spaCy installation
# python -m spacy download en_core_web_lg
nlp = spacy.load("en_core_web_lg")

# import en_core_web_lg
# nlp = en_core_web_lg.load()


def get_hotwords(text):
    result = []
    pos_tag = ['PROPN', 'ADJ', 'NOUN'] # 1
    doc = nlp(text.lower()) # 2
    for token in doc:
        # 3
        if(token.text in nlp.Defaults.stop_words or token.text in punctuation):
            continue
        # 4
        if(token.pos_ in pos_tag):
            result.append(token.text)
                
    return result # 5

output = get_hotwords('Welcome to Medium! Medium is a publishing platform where people can read important, insightful stories on the topics that matter most to them and share ideas with the world.')

print ("\n --- output")
print(output)

print ("\n --- result for hashtags")
hashtags = [('#' + x[0]) for x in Counter(output).most_common(5)]
print(' '.join(hashtags))

