#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd 01_work/blog_articles/extending_streamlit_usage/explore_spacy_streamlit_application/


[file]
streamlit run explore_spacy_streamlit_application_3.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://github.com/Jcharis/
Source: https://github.com/explosion/spacy-streamlit


# content
As a PO, I am not wondering anymore if the Python/AI/ML revolution is a new fad or a real trend? That’s both of it! Like anyone who start something new like I do now with Python and IA, I am currently in the “enthusiastic phase” that tend to transmogrify me as an overzealous supporter like cucumbers are ultimately transmogrified into pickles!

Anyway, this learning process is not without consequences, it definitely calls into question my PO’s practices, habits and skills. Am I a conservative with a fixed mindset ? Or do I accept changes as necessary and essential even though it may say leaving my comfort zone to a more exploratory area! It is almost a cliché dilemma!

I know that all technologies are doomed to disappear or to be replaced. Regarding Python’s potential, the question has
become more and more acute "Will I be, from 1 or 2 years from now, an has-been P.O, knowing only deprecated technology if I do not tackle right now the Python/AI/ML revolution?". I guess I will answer YES.

By experience, I know also that it is not a direct threat but a progressive one. I heard that meanwhile Python is
steadily progressing, PHP for instance remains popular mostly
due to the 2 killer apps named WordPress and Drupal, legacy! Even though, there are some smoke screen effects due to local exceptions e.g. French development labour market dominated
by Symfony for instance or the worldwide Laravel spectacular breakthrough.

I do not know if It can be considered as a forerunner sign for the actual or future Python hegemony but just google for instance the result number on
Manichean comparisons such as “PHP vs Python”, you’ll be surprised!

Lastly, here is 2 videos, that are addressing this concern on this future trend. The first video is in brazilian, a quite personal testimony but it remains interesting both for practising brazilian and hearing few arguments. The second video gives a very macro vision and quite technical but with a huge historical depth and that’s quite interesting even though a bit technical.

After, the few thoughts, let’s get down to earth!

Professionally, I am a bit utilitarian. Learning something new like Python and IA has to "payback" somehow. I always try to figure out what can I gain from this experience and how can I apply this knowledge on a daily basis before starting up. Sometimes it even turns ridiculous! I must also confess that I didn’t go that far as the guy behind keypressingmonkey.



"""


import streamlit as st
import spacy_streamlit
# spacy_model = "en_core_web_sm" 
import spacy
nlp = spacy.load('en_core_web_sm')
from PIL import Image
import os

# Function to Analyse Tokens and Lemma
@st.cache
def text_analyzer(my_text):
	# nlp = spacy.load('en')
	nlp = spacy.load("en_core_web_sm")
	docx = nlp(my_text)
	# tokens = [ token.text for token in docx]
	allData = [('"Token":{},\n"Lemma":{}'.format(token.text,token.lemma_)) for token in docx ]
	return allData


# Use the full page instead of a narrow central column
# st.beta_set_page_config(layout="wide")
st.set_page_config(page_title=None, page_icon=None,
                   initial_sidebar_state="auto", layout="wide")
# layout="centered",

def main():
    # title and logo
    st.title("Small Application with")
    logo = Image.open(os.path.join('logo_spacy_194x88.png'))
    st.image(logo)
    
    # nav
    menu = ['Home', 'Stopwords', 'More', 'About']
    choice = st.sidebar.selectbox('Menu', menu)
    if choice == "Home":
        st.subheader("Home")
    
    elif choice == "Stopwords":
        st.subheader("Stopwords")
        # nlp = spacy.load('en_core_web_sm')
        spacy_stopwords = spacy.lang.en.stop_words.STOP_WORDS
        # st.text("length spacy_stopwords")
        # nb_spacy_stopwords = len(spacy_stopwords)        
        # st.write(nb_spacy_stopwords)
        # st.text("value spacy_stopwords list")
        # st.write(spacy_stopwords)
        all_file_text = st.text_area('You text', 'Here, enter some text')
        if st.button("Analyze"):
            # all_file_doc = nlp(all_file_text)
            # all_file_no_stopword_doc = [token for token in all_file_doc if not token.is_stop]
            # spacy_streamlit.visualize_tokens(
            # all_file_no_stopword_doc)
            
            nlp_result = text_analyzer(all_file_text)
            # st.json(nlp_result)
            st.write(nlp_result)


        
    elif choice == "More":
            st.subheader("More")
            raw_docx = st.text_area('Your Docs', 'Enter Text')
            docx = nlp(raw_docx)            
            if st.button("Tokenize"):
                spacy_streamlit.visualize_tokens(
				docx, attrs=["text", "pos_", "dep_", "ent_type_"])
        
    else:
        st.subheader("About")
        st.title("Let's create a table!")
        for i in range(1, 10):
            cols = st.beta_columns(4)
            cols[0].write(f'{i}')
            cols[1].write(f'{i * i}')
            cols[2].write(f'{i * i * i}')
            cols[3].write('x' * i)
        
        my_expander = st.beta_expander("Click me baby...")
        my_expander.write('Hello there!')
        clicked = my_expander.button('Click me!')
        
        def my_widget(key):
            st.subheader('Hello there!')
            clicked = st.button("Click me " + key)
        
        my_expander = st.beta_expander("Expand", expanded=True)
        
        with my_expander:
            clicked = my_widget("second")
        
        with st.sidebar:
            clicked = my_widget("third")


if __name__ == '__main__':
	main()
