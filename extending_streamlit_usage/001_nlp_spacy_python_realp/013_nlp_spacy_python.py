#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/



[file]
python 013_nlp_spacy_python.py




# source
Source: https://realpython.com/natural-language-processing-spacy-python/


"""

import spacy
from spacy import displacy


# EN
nlp = spacy.load('en_core_web_sm')

# FR
# nlp = spacy.load('fr_core_news_sm')

print("\n --- result_1")
# EN
print("EN spacy loaded")

# FR
# print("FR spacy loaded")

# PREPROCESSING FUNCTIONS
complete_text = (
    'Bruno Flaven has been a Project Manager in a wide variety of Internet business applications both in Mobile and in Desktop for 20 years now.'

    'You can ﬁnd more information about his professional life on his personal website (www.ﬂaven.fr) or his linkedin proﬁle: https://fr.linkedin.com/in/brunoﬂaven. He is currently working for a Paris-base In France Media Monde (FMM) mostly on mobile applications (iOS and Android). He is currently P.O for a Backoffice project made with Symfony.'

    'He also made few trainings to facilitate the handling of the tools that he helps to make.'
)

complete_doc = nlp(complete_text)



def is_token_allowed(token):
     '''
         Only allow valid tokens which are not stop words
         and punctuation symbols.
     '''
     # if (not token or not token.string.strip() or token.is_stop or token.is_punct):
     if (not token or not token.text.strip() or token.is_stop or token.is_punct):
         return False
     return True

def preprocess_token(token):
     # Reduce token to its lowercase lemma form
     return token.lemma_.strip().lower()


# compute
complete_filtered_tokens = [preprocess_token(token)
                            for token in complete_doc if is_token_allowed(token)]

print("\n --- result_2")
print(complete_filtered_tokens)

# print("\n --- result_3")
# print([token.text for token in complete_doc])

# print("\n --- result_3a")
# print([preprocess_token(token)
#       for token in complete_doc if is_token_allowed(token)])


# print("\n --- result_4")
# print(complete_doc.text)





