#!/usr/bin/python
# -*- coding: utf-8 -*-
# 
"""

https://towardsdatascience.com/scraping-a-website-with-4-lines-using-python-200d5c858bb1
https://newspaper.readthedocs.io/en/latest/
x

cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/article_7_build-your-first-chatbot-in-python/

python 02_build_chatbot_python.py

"""


#Imports
import string
import random
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.tokenize import PunktSentenceTokenizer
import sklearn
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
from termcolor import colored

"""
Download it one and then disable

"""

#NLTK Downloads (Need to do only once)
# nltk.download('punkt') 
# nltk.download('stopwords')
# nltk.download('averaged_perceptron_tagger')
# nltk.download('wordnet') 
# nltk.download('nps_chat')

#Global Constants
GREETING_INPUTS    = ("hello", "hi")
GREETING_RESPONSES = ["hi", "hey", "*nods*", "hi there", "Talkin' to me?"]
FILENAME           = "canada_faq.txt"
#Global Variables
lem = nltk.stem.WordNetLemmatizer()
remove_punctuation = dict((ord(punct), None) for punct in string.punctuation)

#Functions
'''
fetch_features transforms a chat into a classifier friendly format
'''
def fetch_features(chat):
    features = {}
    for word in nltk.word_tokenize(chat):
        features['contains({})'.format(word.lower())] = True
    return features
'''
lemmatise performs lemmatization on words
'''
def lemmatise(tokens):
    return [lem.lemmatize(token) for token in tokens]
  
'''
tokenise tokenizes the words
'''
def tokenize(text):
    return lemmatise(nltk.word_tokenize(text.lower().translate(remove_punctuation)))

'''
Standard greeting responses that the bot can recognize and respond with
'''
def greet(sentence):
    for word in sentence.split():
        if word.lower() in GREETING_INPUTS:
            return random.choice(GREETING_RESPONSES)
'''
match matches a user input to the existing set of questions
'''
def match(user_response):
    resp      =''
    q_list.append(user_response)
    
    # TfidfVec  = TfidfVectorizer(tokenizer=tokenise, stop_words='english')

    # TfidfVec = TfidfVectorizer(tokenizer=tokenize, binary=True, stop_words='english', use_idf=True, max_features=feature_cnt)

    # TfidfVec = TfidfVectorizer(tokenizer=tokenize, binary=True, stop_words='english', use_idf=True)

    # remove stop_words='english' and add use_idf=True
    TfidfVec = TfidfVectorizer(tokenizer=tokenize, binary=True, use_idf=True)
    

    
    tfidf     = TfidfVec.fit_transform(q_list)
    vals      = cosine_similarity(tfidf[-1], tfidf)
    idx       = vals.argsort()[0][-2]
    flat      = vals.flatten()
    flat.sort()
    req_tfidf = flat[-2]
    if(req_tfidf==0):
        resp = resp+"Sorry! I don't know the answer to this. Would you like to try again? Type Ciao to exit"
        return resp
    else:
        resp_ids = qa_dict[idx]
        resp_str = ''
        s_id = resp_ids[0]
        end = resp_ids[1]
        while s_id<end :
            resp_str = resp_str + " " + sent_tokens[s_id]
            s_id+=1
        resp = resp+resp_str
        return resp


#Training the classifier
chats = nltk.corpus.nps_chat.xml_posts()[:10000]
featuresets = [(fetch_features(chat.text), chat.get('class')) for chat in chats]
size = int(len(featuresets) * 0.1)
train_set, test_set = featuresets[size:], featuresets[:size]
classifier = nltk.MaxentClassifier.train(train_set) 
#classifier = nltk.NaiveBayesClassifier.train(train_set) #If you need to test Naive Bayes as well
print(nltk.classify.accuracy(classifier, test_set))

#Question Bank Creation
ques_bank   = open(FILENAME,'r',errors = 'ignore')
qb_text     = ques_bank.read()
qb_text     = qb_text.lower()
sent_tokens = nltk.sent_tokenize(qb_text)# converts to list of sentences 
word_tokens = nltk.word_tokenize(qb_text)# converts to list of words
qa_dict     = {} #The Dictionary to store questions and corresponding answers
q_list      = [] #List of all questions
s_count     = 0  #Sentence counter

#Extract questions and answers
#Answer is all the content between 2 questions [assumption]
while s_count < len(sent_tokens):
    result = classifier.classify(fetch_features(sent_tokens[s_count]))
    if("question" in result.lower()):
        next_question_id = s_count+1
        next_question = classifier.classify(fetch_features(sent_tokens[next_question_id]))
        while(not("question" in next_question.lower()) and next_question_id < len(sent_tokens)-1):
            next_question_id+=1
            next_question = classifier.classify(fetch_features(sent_tokens[next_question_id]))
        q_list.append(sent_tokens[s_count])
        end = next_question_id
        if(next_question_id-s_count > 5):
            end = s_count+5
        qa_dict.update({len(q_list)-1:[s_count+1,end]})
        s_count = next_question_id
    else:
        s_count+=1
        
#Response Fetching
flag=True
print(colored("NEO:\nI am Neo, I have all the answers If you want to exit, type Ciao",'blue',attrs=['bold']))
while(flag==True):
    print(colored("\nYOU:",'red',attrs=['bold']))
    u_input = input()
    u_input = u_input.lower()
    if(u_input!='ciao'):
        if(greet(u_input)!=None):
            print(colored("\nNEO:",'blue',attrs=['bold']))
            print(greet(u_input))
        else:
            print(colored("\nNEO:",'blue',attrs=['bold']))
            print(colored(match(u_input).strip().capitalize(),'blue'))
            q_list.remove(u_input)
    else:
        flag=False
        print(colored("\nNEO: Bye! take care..",'blue', attrs=['bold']))

        
