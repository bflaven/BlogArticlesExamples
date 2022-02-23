#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name bert_flair_1 python=3.9.7
conda info --envs
source activate bert_flair_1
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/discovering_bert_and_keybert/example_keybert/


[file]
streamlit run test_python_new_14_multilang_keybert.py

[source]
https://towardsdatascience.com/how-to-extract-relevant-keywords-with-keybert-6e7b3cf889ae
https://www.maartengrootendorst.com/blog/keybert/




[required]

pip install pytorch-pretrained-bert
pip install spacy ftfy==4.4.3
python -m spacy download en

pip install keybert[flair]
pip install keybert[gensim]
pip install keybert[spacy]
pip install keybert[use]

pip install -U sentence-transformers
-U, --upgrade Upgrade all packages to the newest available version

# to export requirements
pip freeze > bert_flair_1.txt



Source: https://pypi.org/project/pytorch-pretrained-bert/#examples

"""

from texts_examples_intl import samples
import config_values.values_conf as conf
import pandas as pd
import streamlit as st
from keybert import KeyBERT



from warnings import simplefilter
# ignore all future warnings
simplefilter(action='ignore', category=FutureWarning)


def greatExpender(label, text):
    with st.expander(label):
        st.markdown(f"{text}")

            
            
def detectVersion():
    st.sidebar.markdown('* * *')
    st.sidebar.markdown('**VERSIONS**')
    st.sidebar.write("streamlit ::", st.__version__)
    st.sidebar.write("panda ::", pd.__version__)


### 2. VALUES ###
TEXT_TITLE_APP = conf.TEXT_TITLE_APP
TEXT_SUBHEADER_APP = conf.TEXT_SUBHEADER_APP
BERT_TEXT_HELP_1 = conf.BERT_TEXT_HELP_1
BERT_TEXT_HELP_2 = conf.BERT_TEXT_HELP_2
BERT_TEXT_HELP_3 = conf.BERT_TEXT_HELP_3
BERT_TEXT_HELP_4 = conf.BERT_TEXT_HELP_4
BERT_TEXT_HELP_5 = conf.BERT_TEXT_HELP_5
BERT_TEXT_HELP_6 = conf.BERT_TEXT_HELP_6
BERT_TEXT_HELP_7 = conf.BERT_TEXT_HELP_7
BERT_TEXT_HELP_8 = conf.BERT_TEXT_HELP_8
BERT_TEXT_HELP_9 = conf.BERT_TEXT_HELP_9
BERT_TEXT_HELP_10 = conf.BERT_TEXT_HELP_10
BERT_TEXT_HELP_11 = conf.BERT_TEXT_HELP_11
BERT_TEXT_HELP_12 = conf.BERT_TEXT_HELP_12




LABEL_EXPANDER = conf.LABEL_EXPANDER
GREAT_EXPENDER_TEXT_1 = conf.GREAT_EXPENDER_TEXT_1

class Keyword():
    # do not use cache cause it prevents you from changing model on fly
    # @st.cache(allow_output_mutation=True, suppress_st_warning=True, show_spinner=True)
    def __init__(self, language_selected):
        languages = ['it', 'fr', 'es', 'ru']
        
        if language_selected == 'en':
            self.stopwords = 'english'
            # model = 'xlm-r-distilroberta-base-paraphrase-v1' # too heavy for my computer
            model = 'distilbert-base-nli-mean-tokens'
            self.model = KeyBERT(model)
        
        elif language_selected in languages:
            with open(f'stopwords/stopwords_{language_selected}.txt', 'r') as file:
                temp = file.readlines()
                self.stopwords = [x.strip('\n') for x in temp]
            model = 'distiluse-base-multilingual-cased-v1'
            self.model = KeyBERT(model)
        else:
            raise KeyError(f'{language_selected} language is not supported :(')

    def extract(self, doc, number_kw_extracted, number_min_ngram, number_max_ngram):
        keywords = self.model.extract_keywords(
            doc, stop_words=self.stopwords, top_n=number_kw_extracted, keyphrase_ngram_range=(number_min_ngram, number_max_ngram))
        # print(keywords)
        # st.write(keywords)
        return keywords

    # Max Sum Similarity (nr_candidates_selected, use_maxsum_selected)
    def extractMaxSumSimilarity(self, doc, number_kw_extracted, number_min_ngram, number_max_ngram, nr_candidates_selected, use_maxsum_selected):
        keywords = self.model.extract_keywords(
            doc, stop_words=self.stopwords, top_n=number_kw_extracted, keyphrase_ngram_range=(number_min_ngram, number_max_ngram), use_maxsum=use_maxsum_selected, nr_candidates=nr_candidates_selected)
        # print(keywords)
        st.write(keywords)
        return keywords

    # Maximal Marginal Relevance (use_mmr_selected, diversity_selected)
    def extractMaximalMarginalRelevance(self, doc, number_kw_extracted, number_min_ngram, number_max_ngram, use_mmr_selected, diversity_selected):
        keywords = self.model.extract_keywords(
            doc, stop_words=self.stopwords, top_n=number_kw_extracted, keyphrase_ngram_range=(number_min_ngram, number_max_ngram), use_mmr=use_mmr_selected, diversity=diversity_selected)
        # print(keywords)
        # st.write(keywords)
        return keywords


def DoKeywords(language_selected, text_input, number_kw_extracted, number_min_ngram, number_max_ngram):
    kw_obj = Keyword(language_selected)  # keep it this way
    kw_obj.extract(text_input, number_kw_extracted,
                        number_min_ngram, number_max_ngram)
    st.write(kw_obj.extract(text_input, number_kw_extracted,
                                number_min_ngram, number_max_ngram))
   

def DoKeywordsExtendedMaxSumSimilarity(language_selected, text_input, number_kw_extracted, number_min_ngram, number_max_ngram, add_diversity, method, nr_candidates_selected, use_maxsum_selected):
    kw_obj = Keyword(language_selected)  # keep it this way
    if(add_diversity):
        if method == "Max Sum Similarity":
            # Max Sum Similarity
            # use_maxsum_selected
            # nr_candidates_selected
            kw_obj.extractMaxSumSimilarity(text_input, number_kw_extracted,
                           number_min_ngram, number_max_ngram, nr_candidates_selected, use_maxsum_selected)
            st.write(kw_obj.extractMaxSumSimilarity(text_input, number_kw_extracted,
                            number_min_ngram, number_max_ngram, nr_candidates_selected, use_maxsum_selected))

def DoKeywordsExtendedMaximalMarginalRelevance(language_selected, text_input, number_kw_extracted, number_min_ngram, number_max_ngram, add_diversity, method, use_mmr_selected, diversity_selected):
    kw_obj = Keyword(language_selected)  # keep it this way
    if(add_diversity):
        if method == "Maximal Marginal Relevance":
            # Maximal Marginal Relevance
            # use_mmr_selected
            # diversity_selected
            kw_obj.extractMaximalMarginalRelevance(
                text_input, number_kw_extracted, number_min_ngram, number_max_ngram, use_mmr_selected, diversity_selected)
            st.write(kw_obj.extractMaximalMarginalRelevance(text_input, number_kw_extracted,
                                    number_min_ngram, number_max_ngram, use_mmr_selected, diversity_selected))
        
        
def main():
    """ A simple attempt for to outsource to an app some dummy jobs"""

    ### 2. INTRO ###
    st.title(f'{TEXT_TITLE_APP}')
    st.warning(f'{TEXT_SUBHEADER_APP}')

    greatExpender(LABEL_EXPANDER, GREAT_EXPENDER_TEXT_1)
    ### 3. LANGUAGES
    languages = ('en', 'it', 'fr', 'es', 'ru')
    language_selected = st.selectbox(
        'Pick a language', languages,  help=BERT_TEXT_HELP_1)
    st.write('You selected:', language_selected)

    ### 4. TEXT SAMPLES
    placeholder = st.empty()
    text_input = placeholder.text_area(
        "Type in some text you want to analyze", height=300, help=BERT_TEXT_HELP_2)

    sample_text = st.selectbox(
        "Or pick some sample texts", [
            f"sample  {i+1}" for i in range(len(samples))], help=BERT_TEXT_HELP_3
    )

    sample_id = int(sample_text.split(" ")[-1])
    # st.code(sample_id)
    text_input = placeholder.text_area(
        "Type in some text you want to analyze", value=samples[sample_id - 1], height=300, help=BERT_TEXT_HELP_4
    )
    
    ### 5. PARAMETERS

    #2 — Keywords and expressions (n-grams) are extracted from the same document using Bag Of Words techniques (such as a TfidfVectorizer or CountVectorizer). This is a classical step that you may be familiar with if you’ve performed keywords extraction in the past
    # https://kavita-ganesan.com/what-are-n-grams/

    number_kw_extracted = st.sidebar.slider(
        "Select number of keywords to extract", 5, 20, 10, 2, help=BERT_TEXT_HELP_5)
    number_min_ngram = st.sidebar.number_input(
        "Min ngram", 1, 5, 1, 1, help=BERT_TEXT_HELP_6)
    number_max_ngram = st.sidebar.number_input(
        "Max ngram", number_min_ngram, 5, 3, step=1, help=BERT_TEXT_HELP_7)
    st.sidebar.code(f"ngram_range = ({number_min_ngram}, {number_max_ngram})")
    
    # DIVERSITY
    
    
    params = {
        "docs": text_input,
        "top_n": number_kw_extracted,
        "keyphrase_ngram_range": (number_min_ngram, number_max_ngram)
    }
    
    
    
    add_diversity = st.sidebar.checkbox(
        "Add diversity to the results", help=BERT_TEXT_HELP_8)
    if add_diversity:
        method = st.sidebar.selectbox(
            "Select a method", ("Max Sum Similarity",
                                "Maximal Marginal Relevance"), help=BERT_TEXT_HELP_9
        )
        
        # source: https://github.com/MaartenGr/KeyBERT/
        # Max Sum Similarity
        # EXAMPLE : kw_model.extract_keywords(doc, keyphrase_ngram_range=(3, 3), stop_words='english', use_maxsum=True, nr_candidates=20, top_n=5)

        # To diversify the results, we take the 2 x top_n most similar words/phrases to the document. Then, we take all top_n combinations from the 2 x top_n words and extract the combination that are the least similar to each other by cosine similarity.
        
        if method == "Max Sum Similarity":
            nr_candidates_selected = st.sidebar.slider(
                "nr_candidates_selected", 20, 50, 20, 2, help=BERT_TEXT_HELP_10)
            use_maxsum_selected = True
            


        # Maximal Marginal Relevance
        # EXAMPLE : kw_model.extract_keywords(doc, keyphrase_ngram_range=(3, 3), stop_words='english', use_mmr = True, diversity = 0.2)

        # To diversify the results, we can use Maximal Margin Relevance (MMR) to create keywords / keyphrases which is also based on cosine similarity.
        
        elif method == "Maximal Marginal Relevance":
            diversity_selected = st.sidebar.slider(
                "diversity_selected", 0.1, 1.0, 0.6, 0.01, help=BERT_TEXT_HELP_11)
            use_mmr_selected = True


        # DEBUG
        # st.code(params)
    
    ### 6. KEYWORDS OUTPUT 'en', 'it', 'fr', 'es'
    
    if st.checkbox("Show keywords extracted)", help=BERT_TEXT_HELP_12):
        if language_selected == 'en':
            st.markdown(f'#### KWs for: {language_selected} ')
            
            
            if(add_diversity):
                    
                        if method == "Max Sum Similarity":
                            
                            DoKeywordsExtendedMaxSumSimilarity(language_selected, text_input, number_kw_extracted, number_min_ngram, number_max_ngram, add_diversity, method, nr_candidates_selected, use_maxsum_selected)
                        
                        elif method == "Maximal Marginal Relevance":                           
                            
                            DoKeywordsExtendedMaximalMarginalRelevance(language_selected, text_input, number_kw_extracted, number_min_ngram, number_max_ngram, add_diversity, method, diversity_selected, use_mmr_selected)
                        
        
            else:
                    DoKeywords(language_selected, text_input, number_kw_extracted, number_min_ngram, number_max_ngram)
                
                
        elif language_selected == 'it':
            st.markdown(f'#### KWs for: {language_selected} ')
            
            DoKeywords(language_selected, text_input,
                       number_kw_extracted, number_min_ngram, number_max_ngram)

        elif language_selected == 'fr':
            st.markdown(f'#### KWs for: {language_selected} ')

            
            DoKeywords(language_selected, text_input,
                       number_kw_extracted, number_min_ngram, number_max_ngram)

        elif language_selected == 'es':
            st.markdown(f'#### KWs for: {language_selected} ')

            DoKeywords(language_selected, text_input,
                       number_kw_extracted, number_min_ngram, number_max_ngram)
        
        elif language_selected == 'ru':
            st.markdown(f'#### KWs for: {language_selected} ')

            DoKeywords(language_selected, text_input,
                       number_kw_extracted, number_min_ngram, number_max_ngram)



if __name__ == "__main__":
    main()
    detectVersion()





# kw_obj = Keyword('it')
# kw_obj.extract(doc_it)
# print(kw_obj.extract(doc_en))

# kw_obj = Keyword('fr')
# kw_obj.extract(doc_fr)
# print(kw_obj.extract(doc_fr))

# kw_obj = Keyword('es')
# kw_obj.extract(doc_es)
# print(kw_obj.extract(doc_es))
