#!/usr/bin/python
# -*- coding: utf-8 -*-
# 

"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_3_keyword_extraction_nlp_spacy/


python 05_kw_extractor_spacy_linguistic_features.py


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

input_text = "My last post was a modest attempt in discovering Python potential with the help of Anaconda. Meanwhile, Artificial Intelligence (AI) was bewitched me 🙂 So, I gained confidence using Python in order to explore AI librairies such as NTLK, OpenCV or face_recognition from ageitgey (Adam Geitgey)." \
  "You can find the files in my github account More on https://github.com/bflaven/BlogArticlesExamples/ in python_playing_with_facial_recognition" \
  "This post is about a real issue that can be solved by IA. I believe that for any technical topic, rather than exploring AI documentation which in itself could be quite wastful. I always strive to tackle a real use case and apply as much as possible what I want to discover." \
  "So, applying this principle, I have spotted facial recognition for pictures. Like many, I am iOS mobile Phone user and I saw facial recognition at work. I start to wonder: “How can apply those facial recognition principles in a backoffice?”. As I am currently a PO for a Backoffice, I am supposed to have a clear “vision” of my product but more than that I know perfectly its weaknesses, especially dealing with pictures." \

"The benefit of this simple question allows me not to stress about the details right away and instead quickly jot something down as a placeholder for a conversation between me, myself and I, a soliloquy. The intent was to not forget to ask all the right questions either upfront or somewhere down the road but do not prevent from starting a P.O.C." \

"Here is my shortlist that highlights some of the functional and nonfunctional concerns or requirements that I wanted to address. This list has driven all my decisions to obtain a pragmatic result without missing the goal." \

"Goal: How can apply those facial recognition principles in a Backoffice in order to improve image search results at the end?" \

"Short actions todolist:" \
"Browse unknown people images directory with Facial Recognition Script" \
"Detect known people faces among these images set them aside" \
"Insert these known people images in a MySQL database" \
"Requirement: This Spike will be all made in Python but I do not want to end up with an overzealous shopping list of requirements." \

"Let me explain the situation. In the Backoffice, which I am dealing with, is hosting thousand of “unqualified” images that contains faces of: Donald Trump, Xi Jinping, Angela Merkel, Boris Johnson, Emmanuel Macron, Vladimir Poutine, Recep Tayyip Erdoğan or less kwnown poeple in an european centric point of view: Macky Sall, Rodrigo Duterte, Ramzan Kadyrov, Hun Sen, Narendra Modi, Hassan Rohani, Stevo Pendarovski, Nicolás Maduro, Edgar Lungu..." \

"Remember that we still need a human intelligence to say who is who? For your information, Stevo Pendarovski, Стево Пендаровски, is president of North Macedonia, holding the office since 12 May 2019 and he looks a bit like me 🙂 or that is just the glasses." \

"The face of Stevo Pendarovski, Стево Пендаровски, president of North Macedonia" \
"Improve a CMS's photos library qualification with AI, facial recognition in python, to provide better images search results to users" \

"The idea is to increase the relevance of research and reduce the sample of images that will be retrieved with a traditionnal textual search based on their name. It will save time, money and resources but also improve user experience. So, user do not get no results at all or improper results in his/her image search." \

"The fact, no one wants to qualify each image by opening them one after the other, adding correct caption to improve indexation and by consequence future’s search results. We are talking about more than 1 500 000 pictures. Indeed, the wise choice is to leave it to a computer." \


output = get_hotwords(input_text)

print ("\n --- output")
print(output)

print ("\n --- result for hashtags")
hashtags = [('#' + x[0]) for x in Counter(output).most_common(5)]
print(' '.join(hashtags))

