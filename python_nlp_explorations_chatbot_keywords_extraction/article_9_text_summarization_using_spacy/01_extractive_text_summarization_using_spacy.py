#!/usr/bin/python
# -*- coding: utf-8 -*-
# 
"""


cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_9_text_summarization_using_spacy


python 01_extractive_text_summarization_using_spacy.py





"""
import spacy
from collections import Counter
from string import punctuation


nlp = spacy.load("en_core_web_lg")



def top_sentence(text, limit):
    keyword = []
    pos_tag = ['PROPN', 'ADJ', 'NOUN', 'VERB']
    doc = nlp(text.lower())
    for token in doc:
        if(token.text in nlp.Defaults.stop_words or token.text in punctuation):
            continue
        if(token.pos_ in pos_tag):
            keyword.append(token.text)
    
    freq_word = Counter(keyword)
    max_freq = Counter(keyword).most_common(1)[0][1]
    for w in freq_word:
        freq_word[w] = (freq_word[w]/max_freq)
        
    sent_strength={}
    for sent in doc.sents:
        for word in sent:
            if word.text in freq_word.keys():
                if sent in sent_strength.keys():
                    sent_strength[sent]+=freq_word[word.text]
                else:
                    sent_strength[sent]=freq_word[word.text]
    
    summary = []
    
    sorted_x = sorted(sent_strength.items(), key=lambda kv: kv[1], reverse=True)
    
    counter = 0
    for i in range(len(sorted_x)):
        summary.append(str(sorted_x[i][0]).capitalize())

        counter += 1
        if(counter >= limit):
            break
            
    return ' '.join(summary)


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




print("\n --- result")
print(top_sentence(input_text, 3))

"""
I always strive to tackle a real use case and apply as much as possible what i want to discover.so, applying this principle, i have spotted facial recognition for pictures. So, i gained confidence using python in order to explore ai librairies such as ntlk, opencv or face_recognition from ageitgey I start to wonder: “how can apply those facial recognition principles in a backoffice?”.
"""


"""
example_text = '''Yamaha is reminding people that musical equipment cases are for musical equipment — not people — two weeks after fugitive auto titan Carlos Ghosn reportedly was smuggled out of Japan in one. In a tweet over the weekend, the Japanese musical equipment company said it was not naming any names, but noted there had been many recent stories about people getting into musical equipment cases. Yamaha (YAMCY) warned people not to get into, or let others get into, its cases to avoid "unfortunate accidents." Multiple media outlets have reported that Ghosn managed to sneak through a Japanese airport to a private jet that whisked him out of the country by hiding in a large, black music equipment case with breathing holes drilled in the bottom. CNN Business has not independently confirmed those details of his escape. The former Nissan (NSANF) CEO had been out on bail awaiting trial in Japan on charges of financial wrongdoing before making his stunning escape to Lebanon at the end of December. Ghosn has referred to his departure as an effort to "escape injustice." In an interview with CNN\'s Richard Quest last week, Ghosn did not comment on the nature of his escape, saying he didn\'t want to endanger any of the people who aided in the operation. Ghosn did, however, respond to a question about what it felt like to ride through the airport in a packing case by first declining to comment but then adding: "Freedom, no matter the way it happens, is always sweet." In a press conference in Lebanon ahead of the CNN interview last Wednesday, Ghosn\'s first public appearance since fleeing Japan, Ghosn said he decided to leave the country because he believed he would not receive a fair trial, a claim Japanese authorities have disputed. Brands sometimes capitalize on their tangential relationship to big news in order to attract attention on social media. Yamaha is one of Japan\'s best known brands and Ghosn was one of Japan\'s top executives before being ousted from Nissan — a match made in social media heaven. Not surprisingly, Yamaha\'s post went viral on Twitter over the weekend.'''
"""


"""
# OUPUT

"Yamaha is reminding people that musical equipment cases are for musical equipment — not people — two weeks after fugitive auto titan carlos ghosn reportedly was smuggled out of japan in one. In a press conference in lebanon ahead of the cnn interview last wednesday, ghosn's first public appearance since fleeing japan, ghosn said he decided to leave the country because he believed he would not receive a fair trial, a claim japanese authorities have disputed. In a tweet over the weekend, the japanese musical equipment company said it was not naming any names, but noted there had been many recent stories about people getting into musical equipment cases."


"""