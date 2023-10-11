#!/usr/bin/python
# -*- coding: utf-8 -*-
# 
"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_2_keyword_extraction_nlp_rake/

python 04_rake_tutorial.py

"""


from __future__ import absolute_import
from __future__ import print_function
import six
__author__ = 'a_medelyan'

import rake
import operator
import io


# required
# 
# For english text
stoppath = "data/stoplists/SmartStoplist.txt" 

# For english text
# stoppath = "data/stoplists/FrenchStoplist.txt"



# EXAMPLE TWO - BEHIND THE SCENES (from https://github.com/aneesha/RAKE/rake.py)

# 1. initialize RAKE by providing a path to a stopwords file
rake_object = rake.Rake(stoppath)

"""
text = "Compatibility of systems of linear constraints over the set of natural numbers. Criteria of compatibility " \
       "of a system of linear Diophantine equations, strict inequations, and nonstrict inequations are considered. " \
       "Upper bounds for components of a minimal set of solutions and algorithms of construction of minimal generating"\
       " sets of solutions for all types of systems are given. These criteria and the corresponding algorithms " \
       "for constructing a minimal supporting set of solutions can be used in solving all the considered types of " \
       "systems and systems of mixed types."
"""

text = "My last post was a modest attempt in discovering Python potential with the help of Anaconda. Meanwhile, Artificial Intelligence (AI) was bewitched me 🙂 So, I gained confidence using Python in order to explore AI librairies such as NTLK, OpenCV or face_recognition from ageitgey (Adam Geitgey)." \
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


# 1. Split text into sentences
sentenceList = rake.split_sentences(text)

for sentence in sentenceList:
    print("Sentence:", sentence)

# generate candidate keywords
stopwords = rake.load_stop_words(stoppath)
stopwordpattern = rake.build_stop_word_regex(stoppath)
phraseList = rake.generate_candidate_keywords(sentenceList, stopwordpattern, stopwords)
print("Phrases:", phraseList)

# calculate individual word scores
wordscores = rake.calculate_word_scores(phraseList)

# generate candidate keyword scores
keywordcandidates = rake.generate_candidate_keyword_scores(phraseList, wordscores)
for candidate in keywordcandidates.keys():
    print("Candidate: ", candidate, ", score: ", keywordcandidates.get(candidate))

# sort candidates by score to determine top-scoring keywords
sortedKeywords = sorted(six.iteritems(keywordcandidates), key=operator.itemgetter(1), reverse=True)
totalKeywords = len(sortedKeywords)

# for example, you could just take the top third as the final keywords
for keyword in sortedKeywords[0:int(totalKeywords / 3)]:
    print("Keyword: ", keyword[0], ", score: ", keyword[1])

print(rake_object.run(text))


