#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd 01_work/blog_articles/extending_streamlit_usage/explore_spacy_streamlit_application/


[file]
streamlit run explore_spacy_streamlit_application_5.py



# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://github.com/Jcharis/
Source: https://github.com/explosion/spacy-streamlit

"""


import os
from spacy_streamlit import visualize_ner
from spacy_streamlit import visualize_similarity
from spacy_streamlit import visualize_tokens
import datetime
import time
import streamlit as st
import spacy_streamlit
import spacy
# nlp = spacy.load('en_core_web_sm')
nlp = spacy.load('en_core_web_lg')
from PIL import Image
from collections import Counter
from string import punctuation

# *** FUNCTIONS ***
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

    sent_strength = {}
    for sent in doc.sents:
        for word in sent:
            if word.text in freq_word.keys():
                if sent in sent_strength.keys():
                    sent_strength[sent] += freq_word[word.text]
                else:
                    sent_strength[sent] = freq_word[word.text]

    summary = []

    sorted_x = sorted(sent_strength.items(),
                      key=lambda kv: kv[1], reverse=True)

    counter = 0
    for i in range(len(sorted_x)):
        summary.append(str(sorted_x[i][0]).capitalize())

        counter += 1
        if(counter >= limit):
            break

    return ' '.join(summary)

def get_hotwords(text):
    result = []
    pos_tag = ['PROPN', 'ADJ', 'NOUN']  # 1
    doc = nlp(text.lower())  # 2
    for token in doc:
        # 3
        if(token.text in nlp.Defaults.stop_words or token.text in punctuation):
            continue
        # 4
        if(token.pos_ in pos_tag):
            result.append(token.text)

    return result  # 5

# *** MAIN ***
# Use the full page instead of a narrow central column
st.set_page_config(page_title="Complete Spacy NLP Application", page_icon=None,
                   initial_sidebar_state="auto", layout="wide")

# Options: layout="centered", layout="wide"

# DEFAULT_TEXT = """Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002."""

# DEFAULT_TEXT = """Born in 1971 in Brussels, Belgium – Member of Oeil Public collective agency from 2001 till its closure of in 2010 – Currently represented by Maison de Photographes Signatures in France and Laif/Redux for the rest of the world – He lived in Paris for 20 years then moved and settled down in India(New Delhi) where he’s been residing since 2016."""

DEFAULT_TEXT = """For more than five years, Gloria Majiga-Kamoto, a 30-year-old Malawian environmental activist, has waged a David v Goliath battle against some of the country's largest plastic manufacturers to bring an end to single-use plastics. Together with other activists and civil society groups, Majiga-Kamoto spearheaded a grassroots campaign that fought to pressure authorities into instituting a plastic ban in Malawi. "We organized several marches — marched to the court and in communities to document their experiences and the challenges they encountered because of the plastic problem we have in the country," Majiga-Kamoto told CNN. After a protracted legal battle with plastic manufacturers, the Malawi Supreme Court upheld a national ban on the production, importation, distribution, and use of thin plastics in July 2019. Majiga-Kamoto\'s fierce advocacy led to the shutting down of three plastic firms in 2020 by the Malawian government and as a result of her grassroots campaign, she has been awarded the prestigious Goldman Environmental Prize for Africa. She is one of six global winners of the prestigious award, announced Tuesday morning, which honors grassroots environmental activists. But the mother-of-one says her advocacy journey has sometimes taken a toll. "You sometimes put your family at risk coming up against huge companies and people that are well connected politically. You always find there\'s a conflict of interest and you\'re stuck in the middle. It does feel a bit threatening and can also feel a bit scary," she told CNN."""

def main():
    # st.title("Complete Spacy NLP Application")
    st.header("Exploring Spacy")

    # logo_img = Image.open(os.path.join('logo_spacy_194x88.png'))
    # st.image(logo_img)
    
    st.sidebar.info("Make your selection with the checkboxes or the menu")
    menu = ['Home', 'case_1', 'case_2', 'case_3',
            'case_4', 'Summarization', 'KwExtracting', 'About']
    choice = st.sidebar.selectbox('Menu', menu)
    # st.sidebar.subheader("About App")
    # st.sidebar.info("More text")

    # st.sidebar.subheader("By")
    # st.sidebar.text("More on flaven.fr")
    # st.sidebar.text("Twitter: @bflaven")
    
    
    	
    if choice == 'Home':
        st.text("") # leave it empty but make the if elif work!
        
        
    
    elif choice == 'case_1':
        st.text("Text Description for case_1")
        
        if st.checkbox("checkbox_1"):
            st.subheader("subheader - checkbox_1")
            st.text("text - Description for checkbox_2")
            st.caption(
                "caption -  Description for checkbox_1")
            st.success("success - message you just check the checkbox_2")
            
            spacy_model = "en_core_web_sm"
            textOne = st.text_area("Text that will be analysed in Spacy Doc", "Type your text here...", height=200, key="textOneArea", help="textOne - Cut and Paste any Text in this Text Area")
            if st.button("Analyze"):
                    st.success("Successful analyse")
                    doc = spacy_streamlit.process_text(
                        spacy_model, textOne)
                    spacy_streamlit.visualize_ner(
                    doc,
                    labels=["PERSON", "DATE", "GPE"],
                    show_table=False,
                    title="Persons, dates and locations",
                    )
                    st.text(f"Analyzed using spaCy model {spacy_model}")
                    
            else:
                st.warning("Doc is empty for Analyze")

        if st.checkbox("checkbox_2"):
            st.subheader("subheader - checkbox_2")
            st.text("text - Description for checkbox_2")
            
            # https://docs.streamlit.io/en/stable/api.html#streamlit.text_area
            textTwo = st.text_area("Text that will be analysed in Spacy Doc", "Type your text here...",
                                   height=200, key="textTwoArea", help="textTwo - Cut and Paste any Text in this Text Area")
            if st.button("Visualize"):
                st.success("Successful visualize")
                doc = nlp(textTwo)
                visualize_ner(doc, labels=nlp.get_pipe("ner").labels)
            else:
                st.warning("Doc is empty for visualize")
            
            

        if st.checkbox("checkbox_3"):
            st.subheader("subheader - checkbox_3")
            st.text("text - Description for checkbox_3")
            
    elif choice == 'case_2':
        st.text(
            "Text Description for case_2 - FYI streamlit reload the page everytime you change a parameter")
        visualize_similarity(nlp, ("pizza", "fries"))
            
    elif choice == 'case_3':
        st.text(
            "Text Description for case_3  - FYI streamlit reload the page everytime you change a parameter")
        # https://docs.streamlit.io/en/stable/api.html#streamlit.text_area
        textThree = st.text_area("Text that will be analysed in Spacy Doc", "Type your text here...",
                                 height=200, key="textThreeArea", help="textThree - Cut and Paste any Text in this Text Area")
        if st.button("Visualize tokens"):
            st.success("Successful visualize tokens")
            doc = nlp(textThree)
            # visualize_tokens(doc, attrs=["text", "pos_", "dep_", "ent_type_"])
            visualize_tokens(
                doc, attrs=["text", "ent_type", "ent_type_", "pos_", "dep_"])
            # token.text, token.ent_type, token.ent_type_
            # token.text, token.pos_, token.dep_
            # token.text, token.ent_type, token.ent_type_
        else:
            st.warning("Doc is empty for visualize tokens")

    elif choice == 'case_4':
        st.text("Text Description for case_4 - FYI streamlit reload the page everytime you change a parameter")
        
        models = ["en_core_web_sm", "en_core_web_md"]
        spacy_streamlit.visualize(models, DEFAULT_TEXT)
    
    elif choice == 'Summarization':
        st.text("text for Summarization")        
        # https://docs.streamlit.io/en/stable/api.html#streamlit.text_area
        textFour = st.text_area("Text that will be analysed in Spacy Doc", "Type your text here...",
                                height=200, key="textFourArea", help="textFour - Cut and Paste any Text in this Text Area")
        
        
        if st.button("Summarization"):
            st.success("Successful Summarization")
            text_summary = top_sentence(textFour, 3)
            # st.text(text_summary)
            st.markdown(text_summary)
                
        else:
            st.warning("Doc is empty for Summarization")

    # KwExtracting
    elif choice == 'KwExtracting':
        st.text("text for KwExtracting")
    
        # https://docs.streamlit.io/en/stable/api.html#streamlit.text_area
        textFive = st.text_area("Text that will be analysed in Spacy Doc", "Type your text here...",
                                height=200, key="textFiveArea", help="textFive - Cut and Paste any Text in this Text Area")
        
        if st.button("KwExtracting"):
            st.success("Successful KwExtracting")
            text_keywords = get_hotwords(textFive)
            hashtags = [('#' + x[0])
                        for x in Counter(text_keywords).most_common(5)]
            st.markdown(hashtags)

        else:
            st.warning("Doc is empty for KwExtracting")
    
    elif choice == 'About':
         
        st.markdown("""
                #### What is Spacy?
                spaCy is a popular and easy-to-use natural language processing library in Python. It provides current state-of-the-art accuracy and speed levels, and has an active open source community. However, since SpaCy is a relative new NLP library, and it’s not as widely adopted as NLTK. There is not yet sufficient tutorials available.
                [Read more on spacy.io](https://spacy.io/)
                """)

        st.text("Just google \"Spacy\" and you will see...")



if __name__ == '__main__':
	main()
 

