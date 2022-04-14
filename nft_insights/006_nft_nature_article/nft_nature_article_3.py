#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name nft_insights python=3.9.7
conda info --envs
source activate nft_insights
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/nft_insights/006_nft_nature_article/


[file]
streamlit run nft_nature_article_3.py

[source]
Mapping the NFT revolution: market trends, trade networks, and visual features
--- https://www.turing.ac.uk/blog/non-fungible-tokens-can-we-predict-price-theyll-sell

+ DATA
https://osf.io/wsnzr/?view_only=319a53cf1bf542bbbe538aba37916537


[required]
# install
pip install numpy
pip install pillow
pip install streamlit
pip install watchdog
pip install python-dotenv

# required for this file
pip install pandas
pip install requests
pip install datetime
pip install gql


# show what the requirements
pip freeze > nft_nature_article_requirements_1.txt
pip install -r nft_nature_article_requirements_1.txt


                    *-------*
                    /(+) (+)\
                    \:=====:/
                    /  ---  \
                    *-------*

"""
# require in this file
import streamlit as st

import pandas as pd
import requests
import datetime
import gql as gql

# personal configuration
import config_values.values_conf as conf


def detectVersion():
    st.sidebar.markdown('* * *')
    st.sidebar.markdown('**VERSIONS**')
    st.sidebar.write("streamlit ::", st.__version__)
    st.sidebar.write("pandas ::", pd.__version__)
    st.sidebar.write("gql ::", qql.__version__)


### 2. VALUES ###
TEXT_TITLE_APP = conf.TEXT_TITLE_APP
TEXT_SUBHEADER_APP = conf.TEXT_SUBHEADER_APP
APP_TEXT_HELP_1 = conf.APP_TEXT_HELP_1


def main():
    """ A simple attempt to analyse api with streamlit """
    
    ### 2. INTRO ###
    st.title(f'{TEXT_TITLE_APP}')
    st.warning(f'{TEXT_SUBHEADER_APP}')


if __name__ == "__main__":
    main()
    detectVersion()
