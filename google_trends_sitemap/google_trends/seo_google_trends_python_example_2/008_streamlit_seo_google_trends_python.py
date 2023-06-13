#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
# NO CONDA ENV
conda create --name google_trends python=3.9.13
conda info --envs
source activate google_trends
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
# examples
conda env remove -n po_launcher_e2e_cypress
conda env remove -n parse_website

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_google_trends.txt


# to install
pip install -r requirements_google_trends.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/google_trends/seo_google_trends_python_example_2/

[file]
streamlit run 008_streamlit_seo_google_trends_python.py



# other module
# go to the env

# for google trends
pip install pytrends


# for app for google trends
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog


# show graphs
pip install plotly

# for jupyter
pip install matplotlib
pip install seaborn



Source: https://www.holisticseo.digital/python-seo/google-trends/

"""

# import the TrendReq method from the pytrends request module
import pytrends
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
import matplotlib.pyplot as plt
import seaborn as sns
from pytrends.request import TrendReq


# basic imports
import streamlit as st

# check values_conf.py for credentials file
import config_values.values_conf as conf


# values
TITLE_APP = conf.TITLE_APP

HEAD_KEY_FIGURES_1 = conf.HEAD_KEY_FIGURES_1
HEAD_KEY_FIGURES_2 = conf.HEAD_KEY_FIGURES_2
HEAD_KEY_FIGURES_3 = conf.HEAD_KEY_FIGURES_3


###############################################################################

# The code below is for the layout of the page
if "widen" not in st.session_state:
    layout = "centered"
else:
    layout = "wide" if st.session_state.widen else "centered"

st.set_page_config(
    layout=layout, page_title=TITLE_APP, page_icon="🔌"
)

# main layout
st.header(f'{TITLE_APP}')

# EXAMPLE FOR SUGGESTIONS
suggestions_string = st.text_input("Enter a string", "Type Here...")
if st.button('Submit_1'):

    st.success(suggestions_string)    
    trend_show = TrendReq(hl='en-US', tz=360)
    # SUGGESTIONS
    dp_df = trend_show.suggestions(suggestions_string)
    dp_df = pd.DataFrame(dp_df)
    st.write(dp_df) 
else:
    st.warning("How-to: Enter a word and press the \"Submit\" button..")


# EXAMPLE FOR SUGGESTIONS
# country_trending_searches = st.selectbox("Choose a country", ['united_kingdom', 'france', 'italy', 'argentina', 'russia', 'sweden', 'czech_republic'])

country_trending_searches = st.selectbox("Choose a country", ['country',
'andorra',
'united_arab_emirates',
'afghanistan',
'antigua_and_barbuda',
'anguilla',
'albania',
'armenia',
'angola',
'antarctica',
'argentina',
'american_samoa',
'austria',
'australia',
'aruba',
'åland_islands',
'azerbaijan',
'_bosnia_and_herzegovina',
'barbados',
'bangladesh',
'belgium',
'burkina_faso',
'bulgaria',
'bahrain',
'burundi',
'benin',
'saint_barthélemy',
'bermuda',
'brunei_darussalam',
'bolivia',
'_bonaire,_sint_eustatius_and_saba',
'brazil',
'bahamas',
'bhutan',
'bouvet_island',
'botswana',
'belarus',
'belize',
'canada',
'cocos_islands',
'the_democratic_republic_of_congo',
'central_african_republic',
'congo',
'switzerland',
'côte_d\'ivoire',
'cook_islands',
'chile',
'cameroon',
'china',
'colombia',
'costa_rica',
'cuba',
'cape_verde',
'curaçao',
'christmas_island',
'cyprus',
'czech_republic',
'germany',
'djibouti',
'denmark',
'dominica',
'dominican_republic',
'algeria',
'ecuador',
'estonia',
'egypt',
'western_sahara',
'eritrea',
'spain',
'ethiopia',
'finland',
'fiji',
'falkland_islands',
'_micronesia,_federated_states_of',
'faroe_islands',
'france',
'gabon',
'united_kingdom',
'grenada',
'georgia',
'french_guiana',
'guernsey',
'ghana',
'gibraltar',
'greenland',
'gambia',
'guinea',
'guadeloupe',
'equatorial_guinea',
'greece',
'south_georgia_and_the_south_sandwich_islands',
'guatemala',
'guam',
'guinea-bissau',
'guyana',
'hong_kong',
'heard_island_and_mcdonald_islands',
'honduras',
'croatia',
'haiti',
'hungary',
'indonesia',
'ireland',
'israel',
'isle_of_man',
'india',
'_british_indian_ocean_territory',
'iraq',
'iran',
'iceland',
'italy',
'jersey',
'jamaica',
'jordan',
'japan',
'kenya',
'kyrgyzstan',
'cambodia',
'kiribati',
'comoros',
'_saint_kitts_and_nevis',
'north_korea',
'south_korea',
'kuwait',
'cayman_islands',
'kazakhstan',
'laos',
'lebanon',
'saint_lucia',
'liechtenstein',
'sri_lanka',
'liberia',
'lesotho',
'lithuania',
'luxembourg',
'latvia',
'libya',
'morocco',
'monaco',
'moldova',
'montenegro',
'saint_martin_(french_part)',
'madagascar',
'marshall_islands',
'north_macedonia',
'mali',
'myanmar',
'mongolia',
'macao',
'northern_mariana_islands',
'martinique',
'mauritania',
'montserrat',
'malta',
'mauritius',
'maldives',
'malawi',
'mexico',
'malaysia',
'mozambique',
'namibia',
'new_caledonia',
'niger',
'norfolk_island',
'nigeria',
'nicaragua',
'netherlands',
'norway',
'nepal',
'nauru',
'niue',
'new_zealand',
'oman',
'panama',
'peru',
'french_polynesia',
'papua_new_guinea',
'philippines',
'pakistan',
'poland',
'saint_pierre_and_miquelon',
'pitcairn_islands',
'puerto_rico',
'palestine',
'portugal',
'palau_republic_of',
'paraguay',
'qatar',
'réunion',
'romania',
'serbia',
'russia',
'rwanda',
'saudi_arabia',
'solomon_islands',
'seychelles',
'sudan',
'sweden',
'singapore',
'saint_helena',
'slovenia',
'svalbard_and_jan_mayen',
'slovakia',
'sierra_leone',
'san_marino',
'senegal',
'somalia',
'suriname',
'south_sudan',
'são_tomé_and_príncipe',
'el_salvador',
'sint_maarten_(dutch_part)',
'syria',
'eswatini',
'_turks_and_caicos_islands',
'chad',
'french_southern_territories',
'togo',
'thailand',
'tajikistan',
'tokelau',
'timor-leste',
'turkmenistan',
'tunisia',
'tonga',
'turkey',
'trinidad_and_tobago',
'tuvalu',
'taiwan',
'tanzania',
'ukraine',
'uganda',
'united_states_minor_outlying_islands',
'united_states',
'uruguay',
'uzbekistan',
'vatican_city_state',
'saint_vincent_and_the_grenadines',
'venezuela',
'british_virgin_islands',
'u.s._virgin_islands',
'vietnam',
'vanuatu',
'wallis_and_futuna',
'samoa',
'kosovo',
'yemen',
'mayotte',
'south_africa',
'zambia',
'zimbabwe'
])


st.write("You selected this option", country_trending_searches)

st.write("The country is : ", country_trending_searches)
if st.button('Submit_2'):

    st.success(country_trending_searches)
    trend_show = TrendReq(hl='en-US', tz=360)
    # TRENDING_SEARCHES
    dp_df = trend_show.trending_searches(pn=country_trending_searches)
    dp_df = pd.DataFrame(dp_df)
    st.write(dp_df)
else:
    st.warning("How-to: Select a single country...")


# EXAMPLE_13 (YEP)
# trend_show = TrendReq(hl='en-US', tz=360)

# TRENDING_SEARCHES
# dp_df = trend_show.trending_searches(pn='united_kingdom')


# SUGGESTIONS
# dp_df = trend_show.suggestions('donald trump')
# dp_df = trend_show.suggestions('sex')
# dp_df = trend_show.suggestions('soup')


# dp_df = pd.DataFrame(dp_df)
# print('\n\n--- RESULT EXAMPLE_13 ')
# print(dp_df)
# st.write(dp_df)
