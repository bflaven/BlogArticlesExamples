#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/001_nlp_spacy_python_realp/


[file]
python 002_nlp_spacy_python.py




# source
Source: https://realpython.com/natural-language-processing-spacy-python/


"""
import spacy
import spacy_streamlit
# SENTENCE DETECTION PART_2

# Add the decorator `@Language.component` (for function components) or `@Language.factory` (for class components / factories) to your custom component and assign it a name, e.g. `@Language.component('your_name')`. You can then run `nlp.add_pipe('your_name')` to add it to the pipeline.


# ellipsis_text = ('Order is a very relative notion, it is specific for each of us. “The world is my representation” as Arthur “Chop” Schopenhauer says... At the same time, experience teaches us “Every cloud has a silver lining” so modestly I discovered that a relative “disorder” is often more efficient than an absolute “order”. Right? Ooh slow down a bit! It is not an easy-peasy Q/A!')

# Load a new model instance
custom_nlp = spacy.load('en_core_web_sm')


def set_custom_boundaries(doc):
        # Adds support to use `   ` as the delimiter for sentence detection
        for token in doc[:-1]:
            if token.text == '   ':
                doc[token.i+1].is_sent_start = True
        return doc
   
ellipsis_text = ('Gus, can you,     never mind, I forgot'
                     ' what I was saying. So, do you think'
                     ' we should    ')
# Load a new model instance
custom_nlp = spacy.load('en_core_web_sm') 
custom_nlp.add_pipe(set_custom_boundaries, before='parser')
custom_ellipsis_doc = custom_nlp(ellipsis_text)
custom_ellipsis_sentences = list(custom_ellipsis_doc.sents)
for sentence in custom_ellipsis_sentences:
        print(sentence)
   
# Gus, can you,    
# never mind, I forgot what I was saying.
# So, do you think we should    
# Sentence Detection with no customization
ellipsis_doc = nlp(ellipsis_text)
ellipsis_sentences = list(ellipsis_doc.sents)
for sentence in ellipsis_sentences:
        print(sentence)
   
# Gus, can you,     never mind, I forgot what I was saying.
# So, do you think we should    


def set_custom_boundaries(doc):
    # Adds support to use `...` as the delimiter for sentence detection
    for token in doc[:-1]:
        if token.text == '...':
            doc[token.i+1].is_sent_start = True
            return doc
    

# custom_nlp.add_pipe('set_custom_boundaries', before='parser')
# custom_nlp.add_pipe(set_custom_boundaries, before='parser')
custom_ellipsis_doc = custom_nlp(ellipsis_text)
custom_ellipsis_sentences = list(custom_ellipsis_doc.sents)

print("\n --- result_5")
for sentence in custom_ellipsis_sentences:
    print(sentence)



# Sentence Detection with no customization
# ellipsis_doc = nlp(ellipsis_text)
# ellipsis_sentences = list(ellipsis_doc.sents)

# print("\n --- result_6")
# for sentence in ellipsis_sentences:
#     print(sentence)


# TOKENIZATION IN SPACY

# TOKENIZATION IN SPACY TRY_1
# file_name = '99-ambitieuses_light-4.txt'
# # file_name = '99-ambitieuses_full-5.txt'
# all_file_text = open(file_name).read()
# all_file_doc = nlp(all_file_text)
# # Extract tokens for the given doc
# # print([token.text for token in all_file_doc])
# for token in all_file_doc:
#     print(token, token.idx)

