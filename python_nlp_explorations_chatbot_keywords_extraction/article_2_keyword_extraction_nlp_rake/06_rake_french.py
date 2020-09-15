#!/usr/bin/python
# -*- coding: utf-8 -*-
# 
"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_2_keyword_extraction_nlp_rake/

python 06_rake_french.py

"""


from __future__ import absolute_import
from __future__ import print_function
__author__ = 'a_medelyan'
import rake

# EXAMPLE: Extracting single words from a French text

# French stopwords
# required
stoppath = "data/stoplists/FrenchStoplist.txt"

# 1. initialize RAKE by providing a path to a stopwords file and setting phrase length in words to 1
rake_object = rake.Rake(stoppath, 5, 1, 4)

# 2. run on RAKE on a given text
sample_file = open("data/docs/french/frwikinews-test-1000.txt", 'r')
text = sample_file.read()
keywords = rake_object.run(text)


#print(text)
print(keywords)


# 3. print results
# for k in keywords:
#     print(k[0])
