#!/usr/bin/python
# -*- coding: utf-8 -*-
# 

"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_3_keyword_extraction_nlp_spacy/


python 07_kw_extractor_spacy_linguistic_features.py


"""
import io
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


input_text = "After facial recognition, I am tackling language issues with Python. Indeed, after image, the other ingredient for a post is mostly text! As a CMS \"manufacturer\" or PO, I was wondering what advantages I can withdraw from NLP. Concretely, it means exploring and learning Python to improve both user support (FAQs turn as a Chatbot, analyzing User Feedback...) but also think about some editorial features especially with the help of Natural Language Processing (NLP). I am wrestling with the subject for too long because there are tons of libraries and tutorials introducing to Python and NLP! Looking for python is an heavy trend. Apparently, Google users in America have searched for Python more often than for Kim Kardashian. So, \"creating a chatbot in Python\" has become the typical quoted example like \"creating a blog\" or \"hello world\" in other language! Like I said at the beginning of this post. The starting idea was simple, how can I aleviate real-world tasks such as:\
Improve the user feedback loop (monitoring user feedback or converting static FAQs to a modest User Support Conversational Agent).\
Text understanding to enable meaningfull keywords extraction or text summary for instance.\
I found some very contrived examples and some more advanced ones like always. Even though, these examples are oversimplified, there are still caveats for less technical readers, including me, especially when it comes to concepts pertaining to linguistic eg stemming, tokenization, tokenizer, bag of words or Convolutional Neural Network. I invite to check these very intuitive videos that are good introduction to NLP. These videos are giving some enlightening on NLP's concepts such as stemming, tokenization, tokenizer or bag of words or even some explanations on different type of IA’s network such as Convolutional Neural Network and the way to use it.\
Here is a posts'digest to start with NLP oriented around 2 basic usages, that can ba implemented in a CMS: Practical Use Cases in a CMS's support and simple techniques to extract Keywords or even \"slice\" a post. Chronologically, the very first library, I explored was the famous NLPs librairie, NTLK. Then I discovered Pytorch, made by Facebook and then Spacy. There will be certainly a more specific article on Spacy because I really like Spacy for its accessibility both in tutorials and in its core values. After all this reading, I selected few articles that were illustrating, at least, some of my personal interests for NLP. The source code is avalaible on my github account and I am using my own mac plus anaconda to deal and install all the require librairies.\
1. Keyword Extraction\
A beginner's guide to keyword extraction with natural language processing (article_1_keyword_extraction_nlp)\
A good usecase for support where you parse a unique user feedback file and retrieve core informations with NLP. This usecase leverage on a bunch of librairies such as Panda, Scipy, Seaborn, scikit-learn and for sure NLTK. It parses a huge document in .tsv format (Tab-separated values).\
NLP keyword extraction tutorial with RAKE and Maui (article_2_keyword_extraction_rake_rake)\
For me, only first part was interesting, it shows how to use RAKE which stands for Rapid Automatic Keyword Extraction. RAKE extracts keywords that should describe the main topics expressed in a document.\
Extract Keywords Using spaCy in Python (article_3_keyword_extraction_nlp_spacy)\
This article from Ng Wai Foong and some other examples from the great official spaCy documentation show how to quickly get to grip with Spacy. The script extracting keywords with Spacy is straightforward like the other article from this guy Ng Wai Foong.\
Miscellaneous examples with spaCy (article_4_miscellaneous_examples_nlp_spacy)\
Some miscellaneous linguistic scripts using spaCy. There is much more on their github account and the documantion is terrific. https://github.com/explosion/spaCy\
Scraping Post\
Newspaper: Article scraping & curation (article_5_playing_with_newspaper_post_scraping_curation)\
It is just playing with the librairie newspaper that will slice post. I am using my own post Playing with newspaper https://newspaper.readthedocs.io/en/latest/ check the import of newspaper\
\
ChatBot With PyTorch - NLP And Deep Learning (article_6_chatbot_with_pytorch)\
We left the Keyword Extraction for ChatBot. Turning my FAQ to a ChatBot with the help of Pytorch and NLTK. It is a very intuitive tutorial and the videos are making the rest. Certainly, I was not rapt in ecstasy by the chatbot ability but there is a lot of promises for Chatbots, supposed to be handling fairly complex conversation with humans and so using a lot of Natural Language Processing techniques in order to understand the human's requests.\
Build Your First Chatbot in Python (article_7_chatbot_with_tensorflow)\
A different ChatBot Build on TensorFlow from a .txt file.\
Chatbot tutorial by Matthew Inkawhich (article_8_chatbot_tutorial_pytorch)\
I found a more advanced Chatbot tutorial with Pytorch due to a lack of space on my hard drive! I was forced to downsize the training so the chatbot sucks... Anyway the example is great. Check https://pytorch.org/tutorials/beginner/chatbot_tutorial.html\
Text Summarization Using spaCy in Python (article_9_text_summarization_using_spacy)\
A second article from Ng Wai Foong. It is about Text Summarization with TF-IDF (Term Frequency-Inverse Data Frequency). It leverages on Spacy and the result is immediate\
Some critics about IA\
Let's step back a little bit to think a minute about IA consequences. These IA tools exerts an undeniable fascination. Why? These are new tools that actually begin to think and act on its own. The idea that these tools will make decisions and undertake actions on their own is fascinating and scary at the same. I was wondering if any critical thinking existed towards the deafening consensus on AI? I found some opponents, on a philosophical point of view. Even though, IA fanatics report that the AI promise is to \"Humanize the machine, not mechanize the User\". The main critic is the AI's \"injunctive power\". Combined with consent, it makes an unstoppable combination to turn us mankind into passive and obedient sheeps! But the GAFAS, that promote IA, never really assumed they were the bad guy. Indeed, IA can been seen as the ultimate market achievement where, reduced as consumers, we only take decisions with utilitarian goals, \"obeying\" to IA. Regarding NLP, the disturbing thing is the familiar form that this injunction takes. The Chatbot speaks to you, the NLP writes and advises you with own words... This is step forward soft power. So, is the very idea of rebelling still even exist as it sounds ludicrous, to fight with a friend! What I mostly remember from this reading: - IA is a threat to humanity, especially our free will. - IA is the ultimate version of \"Invisible hand\", so criticizing IA seems to be the way to \"burn down\" the system aka capitalism, GAFAS (Facebook, Google, Amazon... etc. that are mostly behind the IA libraries and expect something on return. Anyway, that's always good to read opinions against the mainstream way of thinking!\
What's next? How can I use NLP?\
I wonder more and more if the target has not become to even drop PHP to build a web application or refactor the PHP legacy Code in Python! Indeed, building a web application, I do not even talk about a website seems to be easy nowadays. You can gather an effective SPA (Single Page Application) in a very short time but providing meaningful and advanced features for a CMS is trickier! To be totally transparent, a simple question is spinning around in my head: How can I add some \"intelligent\" functionalities, using these Python libraries, to an existing CMS made in PHP? Apparently, the way seems to build a separate API in Python that will brigde with PHP! Like I said in my previous post, these NLP libraries are not only enabling new tasks to be made but these libraries can even carry out tasks like a real human such as me a P.O for a Backoffice! Great, I am outsourcing myself.\
Using Anaconda\
\
A reminder for useful commands."


output = get_hotwords(input_text)

print ("\n --- output")
print(output)

print ("\n --- result for hashtags")
hashtags = [('#' + x[0]) for x in Counter(output).most_common(5)]
print(' '.join(hashtags))


