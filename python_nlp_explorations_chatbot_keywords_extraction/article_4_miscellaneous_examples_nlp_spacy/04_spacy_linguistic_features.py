#!/usr/bin/python
# -*- coding: utf-8 -*-
# 
"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_4_miscellaneous_examples_nlp_spacy


python 04_spacy_linguistic_features.py

"""

import spacy

# # Import the English language class and create the nlp object
from spacy.lang.en import English
# ​
nlp = English()
# ​
# # Process the text
doc = nlp("I like tree kangaroos and narwhals.")
# ​
# # Select the first token
first_token = doc[0]
# ​
# # Print the first token's text
print(first_token.text)



