#!/usr/bin/python
# -*- coding: utf-8 -*-
# 
"""

https://towardsdatascience.com/scraping-a-website-with-4-lines-using-python-200d5c858bb1
https://newspaper.readthedocs.io/en/latest/


cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_5_playing_with_newspaper_post_scraping_curation



python 01_scraping-a-website.py

"""
from newspaper import Article


print ("\n\n ---  \/ result --- ")
print ("\n")

# url = 'http://flaven.fr/2020/06/improve-a-cms-photos-library-qualification-with-ai-facial-recognition-in-python-to-provide-better-images-search-results-to-users/'
url = 'http://flaven.fr/2020/05/python-anaconda-worpress-json-json-schema-messy-post-with-few-practices-and-feedback-from-my-p-o-experience/'



article = Article(url)
article.download()
article.html
article.parse()

article.nlp()

# NLP proposal
print (article.keywords)
# ['python', 'print', 'install', 'import', 'po', 'experience', 'practices', 'post', 'messy', 'json', 'create', 'jsonschema', 'myownpythonenv_2', 'feedback', 'conda', 'check', 'wordpress']

# Human proposal
# Tags: Anaconda, Computer Vision, Deep Learning, IA, Image Classification, json, JSON-SCHEMA, Models, Natural language processing, NTLK, Object Detection, P.O, python, TensorFlow Keras, Theano, Video Classification, Worpress


"""
article.authors
article.publish_date
article.text
article.top_image
article.movies
article.nlp()
article.keywords
article.summary


"""




print ("\n\n ---  /\ result --- ")
print ("\n")
