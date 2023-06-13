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
streamlit run 009_streamlit_seo_google_trends_python.py



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
# suggestions_string = st.text_input("Enter a string", "Type Here...")
# if st.button('Submit_1'):

#     st.success(suggestions_string)    
#     trend_show = TrendReq(hl='en-US', tz=360)
#     # SUGGESTIONS
#     dp_df = trend_show.suggestions(suggestions_string)
#     dp_df = pd.DataFrame(dp_df)
#     st.write(dp_df) 
# else:
#     st.warning("How-to: Enter a word and press the \"Submit\" button..")


# EXAMPLE FOR SUGGESTIONS

# V1
# country_trending_searches = st.selectbox("Choose a country", ['united_kingdom', 'france', 'italy', 'argentina', 'russia', 'sweden', 'czech_republic'])

# V2
country_trending_searches = st.selectbox("Choose a country", ['country', 'united_kingdom', 'hungary', 'japan', 'france', 'mexico', 'vietnam', 'united_kingdom', 'france', 'italy', 'argentina', 'russia', 'sweden', 'czech_republic'])


# st.write("You selected this option", country_trending_searches)

# st.write("The country is : ", country_trending_searches)
# if st.button('Submit_2'):

#     st.success(country_trending_searches)
#     trend_show = TrendReq(hl='en-US', tz=360)
    # TRENDING_SEARCHES
#     dp_df = trend_show.trending_searches(pn=country_trending_searches)
#     dp_df = pd.DataFrame(dp_df)
#     st.write(dp_df)
# else:
#     st.warning("How-to: Select a single country...")


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


# MultiSelect
st.write("MultiSelect")
kw_list = st.multiselect("Choose people", ('Joe Biden', 'Donald Trump', 'Hillary Clinton', 'Bernie Sanders', 'Elizabeth Warren', 'Jane Sanders', 'Tulsi Gabbard', 'Barack Obama'))
st.write("You selected", len(kw_list), "people")
st.write("The keywords are: ", kw_list)
# Radio Button
status = st.radio(
    "When people are selected, query Google Trends", ('Inactive', 'Active'))

if status == 'Active':
        st.info("Active is checked")
        
        if len(kw_list) == 0:
            st.write ('ERROR')
            st.warning("You need to select people...")
        else:
            st.write('YEP')
             
            kw_group = list(zip(*[iter(kw_list)]*1))
            kw_grp_list = [list(x) for x in kw_group]

            trend_show = TrendReq(hl='en-US', tz=360)
            dict = {}
            i = 0
            for kw in kw_grp_list:
                trend_show.build_payload(kw, timeframe='today 3-m', geo='US')
                dict[i] = trend_show.interest_over_time()
                i += 1

            trend_frame = pd.concat(dict, axis=1)
            trend_frame.columns = trend_frame.columns.droplevel(0)
            trend_frame = trend_frame.drop('isPartial', axis=1)
            st.dataframe(trend_frame)


            trace = [go.Bar(
                x=trend_frame.index,
                y=trend_frame[col], name=col) for col in trend_frame.columns[0:len(kw_list)]]

            data = trace
            layout = go.Layout(title='Google Trends for: '+str(kw_list), showlegend=True)
            fig = go.Figure(data=data, layout=layout)

            st.plotly_chart(fig, use_container_width=True)
else:
            st.warning("Inactive is checked")



