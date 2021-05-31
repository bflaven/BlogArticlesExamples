#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/build_interactive_webapps_python_scripts_using_streamlit/03_interactive_webapps_streamlit_nlp/

[file]
streamlit run 002_streamlit_for_nlp_projects_streamlit_spacy.py


# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/


"""

# Source :: ! ARTICLE_10 https://pub.towardsai.net/build-a-text-summarization-web-app-using-streamlit-in-30-minutes-cbe78a8080af


import torch
import streamlit as st
from transformers import BartTokenizer, BartForConditionalGeneration
from transformers import T5Tokenizer, T5ForConditionalGeneration

st.title('Text Summarization Demo')
st.markdown('Using BART and T5 transformer model')

model = st.selectbox('Select the model', ('BART', 'T5'))

if model == 'BART':
    _num_beams = 4
    _no_repeat_ngram_size = 3
    _length_penalty = 1
    _min_length = 12
    _max_length = 128
    _early_stopping = True
else:
    _num_beams = 4
    _no_repeat_ngram_size = 3
    _length_penalty = 2
    _min_length = 30
    _max_length = 200
    _early_stopping = True

col1, col2, col3 = st.beta_columns(3)
_num_beams = col1.number_input("num_beams", value=_num_beams)
_no_repeat_ngram_size = col2.number_input(
    "no_repeat_ngram_size", value=_no_repeat_ngram_size)
_length_penalty = col3.number_input("length_penalty", value=_length_penalty)

col1, col2, col3 = st.beta_columns(3)
_min_length = col1.number_input("min_length", value=_min_length)
_max_length = col2.number_input("max_length", value=_max_length)
_early_stopping = col3.number_input("early_stopping", value=_early_stopping)

text = st.text_area('Text Input')


def run_model(input_text):
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

    if model == "BART":
        bart_model = BartForConditionalGeneration.from_pretrained(
            "facebook/bart-base")
        bart_tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
        input_text = str(input_text)
        input_text = ' '.join(input_text.split())
        input_tokenized = bart_tokenizer.encode(
            input_text, return_tensors='pt').to(device)
        summary_ids = bart_model.generate(input_tokenized,
                                          num_beams=_num_beams,
                                          no_repeat_ngram_size=_no_repeat_ngram_size,
                                          length_penalty=_length_penalty,
                                          min_length=_min_length,
                                          max_length=_max_length,
                                          early_stopping=_early_stopping)

        output = [bart_tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in
                  summary_ids]
        st.write('Summary')
        st.success(output[0])

    else:
        t5_model = T5ForConditionalGeneration.from_pretrained("t5-base")
        t5_tokenizer = T5Tokenizer.from_pretrained("t5-base")
        input_text = str(input_text).replace('\n', '')
        input_text = ' '.join(input_text.split())
        input_tokenized = t5_tokenizer.encode(
            input_text, return_tensors="pt").to(device)
        summary_task = torch.tensor([[21603, 10]]).to(device)
        input_tokenized = torch.cat(
            [summary_task, input_tokenized], dim=-1).to(device)
        summary_ids = t5_model.generate(input_tokenized,
                                        num_beams=_num_beams,
                                        no_repeat_ngram_size=_no_repeat_ngram_size,
                                        length_penalty=_length_penalty,
                                        min_length=_min_length,
                                        max_length=_max_length,
                                        early_stopping=_early_stopping)
        output = [t5_tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in
                  summary_ids]
        st.write('Summary')
        st.success(output[0])


if st.button('Submit'):
    run_model(text)
