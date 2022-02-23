# required_keybert_functions.py

from keybert import KeyBERT

# require in this file
import streamlit as st

# personal configuration
import config_values.values_conf as conf


def greatExpender(label, text):
    with st.expander(label):
        st.markdown(f"{text}")


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
            # model = 'xlm-r-distilroberta-base-paraphrase-v1' # too heavy for my computer be sure to have space disk
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



