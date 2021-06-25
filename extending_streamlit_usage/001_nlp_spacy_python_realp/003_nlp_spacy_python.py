#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/

[file]
python 003_nlp_spacy_python.py




# source
Source: https://realpython.com/natural-language-processing-spacy-python/


"""
import spacy
import spacy_streamlit


def debug_text_enumerate(doc):
    for i, token in enumerate(doc):
        # DEBUG
        print(i, token, token.pos_, token.dep_)
        # print(i, token.text, token.pos_, token.dep_)
        # print(i, token.text, token.ent_type)
        # print(i, token.text, token.ent_type_)
        # print(i, token.text, token.ent_type, token.ent_type_)
        # print(i, token.text, token.head)

        # print(doc[i].text)
        # print(doc[i])
        # print(i, doc[i], doc[i].pos_, doc[i].dep_)
        # and so on...


def debug_text_loop(doc):
    for token in doc:
        # print(token, token.pos_, token.dep_)
        # print(token.text, token.pos_, token.dep_)
        # print(token.text, token.ent_type)
        # print(token.text, token.ent_type_)
        # print(token.text, token.ent_type, token.ent_type_)
        print(token.text, token.head)

nlp = spacy.load('en_core_web_sm')

print("\n --- result_1")
print("EN spacy loaded")


# HOW TO READ A TEXT
# bf_text = ('Order is a very relative notion, it is specific for each of us. “The world is my representation” as Arthur “Chop” Schopenhauer says. At the same time, experience teaches us “Every cloud has a silver lining” so modestly I discovered that a relative “disorder” is often more efficient than an absolute “order”. Right? Ooh slow down a bit! It is not an easy-peasy Q/A! For sure, you can ask yourself why such interrogations are part of a so called post dedicated to Python. Well, first of all, it make sense for me for several reasons: Never bad to introduce some philosophy in programming practice. Personally, it reconciles two of my favorite hobbies(bad programming & cheap philosophy) to one: headache! More seriously, these thoughts come from a practical and real-world experience. Let me tell you the story: after a long, long aging process, as a PO, I achieved to build a robust testing strategy with CodeceptJS for a backoffice! But then I discovered that the e2e sequential execution of the suite created a bias(let’s called them errors). OMG! Then I was wondering how to introduce randomization inside the testing suite execution in order to reduce this bias to the maximum. The purpose is to avoid the false positive nightmare! Meanwhile, in a completely chaotic, confused, disordered, disorganised, topsy-turvy, helter-skelter, pell-mell, upside-down, higgledy-piggledy, hugger-mugger, harum-scarum, snafu, slipshod, unplanned, erratic, strayed, hit-and-miss, incidental, spontaneous, uncoordinated, willy-nilly, devil-may-care, unpremeditated, reckless, cockeyed, hit-and-miss, fluky, incidental… anarchic way, I am learning advanced Python techniques(NLP, facial recognition …) but also fundamentals like the difference between a “tuple” and a “dictionnary”. So it was logic that Python popped up in my mind to bring this randomness, given the complexity of doing the same thing in Bash, a language that I am far from mastering! Incidentally, this experiment proves me that Python is: Easy to read: Python is easy to read and most of the language makes sense at a glimpse. This makes finding issues a lot easier than more complicated languages. Portability: Python runs on many platforms and systems, meaning your programs can reach a wider audience. It can easily replace Bash or Ruby of instance. Two qualities that gave Python a serious advantage in what I am looking for: to create on-demand order or disorder 🙂. Order: when it comes to browsing, summarizing and indexing hundreds of texts in order to store them in a database itself MySQL and / or NoSQL. Disorder: when it comes to run tests in parallel, for example, and thereby overcome a bias linked to a sequential execution. Oddly, sometimes, Disorder proves to be more efficient and effective than Order. So, this post presents my quick researches on how-to handle random in Python. Having in mind that the final objective is to load randomly testing files that achieve a complete Backoffice’s assessment without increasing errors into the process. By the way, it reveals a third and fourth Python qualities: Increasing productivity: how much work you can accomplish in a given time with few lines of code. Relieving Boring Stuff in Bullshit Jobs: Thanks to Al Sweigart and David Graeber to have enabled me to create this “tuna-mayo-sandwich” concept. So, now, let’s move on and show some code…')


# bf_doc = nlp(bf_text)
# Extract tokens for the given doc
# print("\n --- result_2")
# print([token.text for token in bf_doc])

# print("\n --- result_3")
# # HOW TO READ A TEXT FILE TRY_1
# file_name = 'article_bf_1.txt'
# introduction_file_text = open(file_name).read()
# introduction_file_doc = nlp(introduction_file_text)
# # Extract tokens for the given doc
# print([token.text for token in introduction_file_doc])


# SENTENCE DETECTION PART_1
# print("\n --- result_4")

# In spaCy, the sents property is used to extract sentences. Here’s how you would extract the total number of sentences and the sentences for a given input texts.

# BF  detect the sentence's number based on the dot (.)
about_text = ('Python, Randomization, E2E – it’s all about Random and some good reasons to learn and leverage on Python'
              'Order is a very relative notion, it is specific for each of us. “The world is my representation” as Arthur “Chop” Schopenhauer says. At the same time, experience teaches us “Every cloud has a silver lining” so modestly I discovered that a relative “disorder” is often more efficient than an absolute “order”. Right? Ooh slow down a bit! It is not an easy-peasy Q/A!'

              'For sure, you can ask yourself why such interrogations are part of a so called post dedicated to Python. Well, first of all, it make sense for me for several reasons:'

              'Never bad to introduce some philosophy in programming practice. Personally, it reconciles two of my favorite hobbies(bad programming & cheap philosophy) to one: headache! More seriously, these thoughts come from a practical and real-world experience.'

              'Let me tell you the story: after a long, long aging process, as a PO, I achieved to build a robust testing strategy with CodeceptJS for a backoffice! But then I discovered that the e2e sequential execution of the suite created a bias(let’s called them errors). OMG! Then I was wondering how to introduce randomization inside the testing suite execution in order to reduce this bias to the maximum. The purpose is to avoid the false positive nightmare!'

              'Meanwhile, in a completely chaotic, confused, disordered, disorganized, topsy-turvy, helter-skelter, pell-mell, upside-down, higgledy-piggledy, hugger-mugger, harum-scarum, snafu, slipshod, unplanned, erratic, strayed, hit-and-miss, incidental, spontaneous, uncoordinated, willy-nilly, devil-may-care, unpremeditated, reckless, cockeyed, hit-and-miss, fluky, incidental… anarchic way, I am learning advanced Python techniques(NLP, facial recognition …) but also fundamentals like the difference between a “tuple” and a “dictionnary”. So it was logic that Python popped up in my mind to bring this randomness, given the complexity of doing the same thing in Bash, a language that I am far from mastering!'

              'Incidentally, this experiment proves me that Python is : '

              'Easy to read: Python is easy to read and most of the language makes sense at a glimpse. This makes finding issues a lot easier than more complicated languages.'
              'Portability: Python runs on many platforms and systems, meaning your programs can reach a wider audience. It can easily replace Bash or Ruby of instance.'
              'Two qualities that gave Python a serious advantage in what I am looking for: to create on-demand order or disorder 🙂'

              'Order: when it comes to browsing, summarizing and indexing hundreds of texts in order to store them in a database itself MySQL and / or NoSQL.'
              'Disorder: when it comes to run tests in parallel, for example, and thereby overcome a bias linked to a sequential execution.'
              'Oddly, sometimes, Disorder proves to be more efficient and effective than Order.'

              'So, this post presents my quick researches on how-to handle random in Python. Having in mind that the final objective is to load randomly testing files that achieve a complete Backoffice’s assessment without increasing errors into the process.'

              'By the way, it reveals a third and fourth Python qualities:'

              'Increasing productivity: how much work you can accomplish in a given time with few lines of code.'
              'Relieving Boring Stuff in Bullshit Jobs: Thanks to Al Sweigart and David Graeber to have enabled me to create this “tuna-mayo-sandwich” concept.'
              'So, now, let’s move on and show some code…'

           )
"""
# about_doc = nlp(about_text)
# sentences = list(about_doc.sents)
# len(sentences)
# for sentence in sentences:
#     print (sentence)
"""
# same example with (...) aka ellipsis
# In the above example, spaCy is correctly able to identify sentences in the English language, using a full stop(.) as the sentence delimiter. You can also customize the sentence detection to detect sentences on custom delimiters.
# Here’s an example, where an ellipsis(...) is used as the delimiter:

"""
# BF  detect the sentence's number based on the ellipsis (...)
# Sentence Detection with no customization
ellipsis_doc = nlp(about_text)
ellipsis_sentences = list(ellipsis_doc.sents)

print("\n --- result_6")
for sentence in ellipsis_sentences:
    print(sentence)
"""

"""
# TOKENIZATION IN SPACY

# TOKENIZATION IN SPACY TRY_1
file_name = 'article_bf_1.txt'
all_file_text = open(file_name).read()
all_file_doc = nlp(all_file_text)
# Extract tokens for the given doc
# print([token.text for token in all_file_doc])
for token in all_file_doc:
    print(token, token.idx)

# Note how spaCy preserves the starting index of the tokens. It’s useful for in -place word replacement. spaCy provides various attributes for the Token class:
"""

"""
# TOKENIZATION IN SPACY TRY_2
file_name = 'article_bf_1.txt'
all_file_text = open(file_name).read()
all_file_doc = nlp(all_file_text)
for token in all_file_doc:
    print(token, token.idx, token.text_with_ws, token.is_alpha, token.is_punct, token.is_space, token.shape_, token.is_stop)
"""
    
