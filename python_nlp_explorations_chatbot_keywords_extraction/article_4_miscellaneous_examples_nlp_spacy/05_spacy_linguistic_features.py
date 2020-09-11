#!/usr/bin/python
# -*- coding: utf-8 -*-
# 
"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_4_miscellaneous_examples_nlp_spacy



python 05_spacy_linguistic_features.py

"""

import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Autonomous cars shift insurance liability toward manufacturers")
for chunk in doc.noun_chunks:
    print(chunk.text, chunk.root.text, chunk.root.dep_,
            chunk.root.head.text)


