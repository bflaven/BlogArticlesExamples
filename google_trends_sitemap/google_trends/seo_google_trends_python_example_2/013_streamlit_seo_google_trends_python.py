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
streamlit run 013_streamlit_seo_google_trends_python.py



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

EXAMPLE_TAB_HEAD_LABEL_1 = conf.EXAMPLE_TAB_HEAD_LABEL_1
EXAMPLE_TAB_HEAD_LABEL_2 = conf.EXAMPLE_TAB_HEAD_LABEL_2
EXAMPLE_TAB_HEAD_LABEL_3 = conf.EXAMPLE_TAB_HEAD_LABEL_3


@st.cache_data
def load_data(file_path):
    df = pd.read_csv(file_path)
    return df


###############################################################################

# The code below is for the layout of the page
if "widen" not in st.session_state:
    layout = "centered"
else:
    layout = "wide" if st.session_state.widen else "centered"

st.set_page_config(
    layout=layout, page_title=TITLE_APP, page_icon="🔌"
)


def main():
    """ A simple attempt for google trend """

# main layout
st.header(f'{TITLE_APP}')

st.title("Select a csv")
file_path = st.text_input('Enter the path to the .csv file:', placeholder='people_basket_en_full_google_trends.csv',
                          help='Select a csv e.g `people_basket_en_full_google_trends.csv`')
st.code('people_basket_en_full_google_trends.csv')

if file_path:
    df = load_data(file_path)
    # st.write("Data Preview:")
    # st.write(df.head())
    # st.dataframe(df)

    keywords = df['keyword']

    kw_list = st.multiselect("Choose keywords", (keywords))
    # st.write(name)
    # st.write("You selected", len(kw_list), "keywords")
    # st.write("The keywords are: ", kw_list)
    # Radio Button
    status = st.radio(
        "When keywords are selected, you can now query Google Trends", ('Inactive', 'Active'))

    if status == 'Active':
            if len(kw_list) == 0:
                st.warning("You need to select keywords...", icon="⚠️")
            else:                
                st.success(EXAMPLE_TAB_HEAD_LABEL_3, icon="✅")
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


if __name__ == '__main__':
    main()
