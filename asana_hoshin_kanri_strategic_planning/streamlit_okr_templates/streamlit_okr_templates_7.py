#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

# Conda Environment
conda create --name streamlit-custom python=3.9.7
conda info --envs
source activate streamlit-custom
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[PATH]
cd /Users/brunoflaven/Documents/01_work/blog_articles/asana_hoshin_kanri_strategic_planning/streamlit_okr_templates/


[FILE]
streamlit run streamlit_okr_templates_7.py


[INSTALL]
pip install streamlit --upgrade


[DOC]

See https://pypi.org/project/searchconsole/

While the above focuses on deployed apps, you can also add secrets while developing locally. To do this, add a file called secrets.toml in a folder called .streamlit at the root of your app repo and paste your secrets into that file.

mkdir .streamlit
cd .streamlit
touch secrets.toml


https://docs.streamlit.io/streamlit-cloud/get-started/deploy-an-app/connect-to-data-sources/secrets-management




"""
# first import
import os
import time
import datetime
from PIL import Image
from numpy import RankWarning
import numpy as np
import plotly.express as px
import plotly.figure_factory as ff
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# basic imports
import streamlit as st
import pandas as pd

# imports for search console libraries
import searchconsole
from apiclient import discovery
from google_auth_oauthlib.flow import Flow

# imports for aggrid
from st_aggrid import AgGrid
from st_aggrid import AgGrid
from st_aggrid.grid_options_builder import GridOptionsBuilder
from st_aggrid.shared import JsCode
from st_aggrid import GridUpdateMode, DataReturnMode

# all other imports
import os
# from streamlit_elements import Elements
from streamlit_elements import elements, mui, html


# check values_conf.py for credentials file
import config_values.values_conf as conf

# values
TITLE_APP = conf.TITLE_APP

HEAD_KEY_FIGURES_1 = conf.HEAD_KEY_FIGURES_1
HEAD_KEY_FIGURES_2 = conf.HEAD_KEY_FIGURES_2
HEAD_KEY_FIGURES_3 = conf.HEAD_KEY_FIGURES_3




# Dataset we need to import
DATA_URL = ("data/objectives_kr_sample_2.csv")


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

#### Using secrets.toml 

# Everything is accessible via the st.secrets dict:

st.write("DB username:", st.secrets["db_username"])
st.write("DB password:", st.secrets["db_password"])
st.write("My cool secrets:", st.secrets["my_cool_secrets"]["things_i_like"])

# And the root-level secrets are also accessible as environment variables:


st.write(
    "Has environment variables been set:",
    os.environ["db_username"] == st.secrets["db_username"],
)


def bruno_form_callback():
    # st.write(st.session_state.my_token_input)
    st.session_state.my_token_received = True
###############################################################################

tab1, tab2 = st.tabs(["Main", "About"])


with tab1:
    
    
    # sidebar
    st.write("")

    st.sidebar.image("okr_logo_2_500x333.jpg", width=300)

    st.sidebar.markdown("")
    with st.sidebar.form("my_form"):
        st.write("Inside the form")
        slider_val = st.slider("Form slider")
        checkbox_val = st.checkbox("Form checkbox")
        submitted = st.form_submit_button("Submit")
        if submitted:
            st.write("slider", slider_val, "checkbox", checkbox_val)

    st.sidebar.write("Outside the form")

    
    # main
    df = pd.read_csv('https://raw.githubusercontent.com/fivethirtyeight/data/master/airline-safety/airline-safety.csv')
    
    
    
    
    # df = pd.read_csv(DATA_URL)

    col1, col2, col3 = st.columns(3)
    col1.metric(HEAD_KEY_FIGURES_1, "4")
    col2.metric(HEAD_KEY_FIGURES_2, "16")
    col3.metric(HEAD_KEY_FIGURES_3, "36")

    # OUTPUT
    # AgGrid(df)

col1, col2 = st.columns([1, 1])
with col1:
                st.caption("")
                check_box = st.checkbox(
                    "Ag-Grid mode", help="Tick this box to see your data in Ag-grid!"
                )
                st.caption("")


with col2:
                st.caption("")
                st.checkbox(
                    "Widen layout",
                    key="widen",
                    help="Tick this box to switch the layout to 'wide' mode",
                )
                st.caption("")


# PLOT_6 Objectives by Theme
# https://plotly.com/python/sunburst-charts/
# https://plotly.com/python/reference/sunburst/

df = pd.read_csv(
    'https://raw.githubusercontent.com/plotly/datasets/master/sales_success.csv')

# print(df.head())
st.write(df.head())

# levels used for the hierarchical chart
levels = ['salesperson', 'county', 'region']
color_columns = ['sales', 'calls']
value_column = 'calls'


def build_hierarchical_dataframe(df, levels, value_column, color_columns=None):
    """
    Build a hierarchy of levels for Sunburst or Treemap charts.

    Levels are given starting from the bottom to the top of the hierarchy,
    ie the last level corresponds to the root.
    """
    df_all_trees = pd.DataFrame(columns=['id', 'parent', 'value', 'color'])
    for i, level in enumerate(levels):
        df_tree = pd.DataFrame(columns=['id', 'parent', 'value', 'color'])
        dfg = df.groupby(levels[i:]).sum()
        dfg = dfg.reset_index()
        df_tree['id'] = dfg[level].copy()
        if i < len(levels) - 1:
            df_tree['parent'] = dfg[levels[i+1]].copy()
        else:
            df_tree['parent'] = 'total'
        df_tree['value'] = dfg[value_column]
        df_tree['color'] = dfg[color_columns[0]] / dfg[color_columns[1]]
        df_all_trees = df_all_trees.append(df_tree, ignore_index=True)
    total = pd.Series(dict(id='total', parent='',
                              value=df[value_column].sum(),
                              color=df[color_columns[0]].sum() / df[color_columns[1]].sum()))
    df_all_trees = df_all_trees.append(total, ignore_index=True)
    return df_all_trees


df_all_trees = build_hierarchical_dataframe(
    df, levels, value_column, color_columns)
average_score = df['sales'].sum() / df['calls'].sum()

fig = make_subplots(1, 2, specs=[[{"type": "domain"}, {"type": "domain"}]],)

fig.add_trace(go.Sunburst(
    labels=df_all_trees['id'],
    parents=df_all_trees['parent'],
    values=df_all_trees['value'],
    branchvalues='total',
    marker=dict(
        colors=df_all_trees['color'],
        colorscale='RdBu',
        cmid=average_score),
    hovertemplate='<b>%{label} </b> <br> Sales: %{value}<br> Success rate: %{color:.2f}',
    name=''
), 1, 1)

fig.add_trace(go.Sunburst(
    labels=df_all_trees['id'],
    parents=df_all_trees['parent'],
    values=df_all_trees['value'],
    branchvalues='total',
    marker=dict(
        colors=df_all_trees['color'],
        colorscale='RdBu',
        cmid=average_score),
    hovertemplate='<b>%{label} </b> <br> Sales: %{value}<br> Success rate: %{color:.2f}',
    maxdepth=2
), 1, 2)

fig.update_layout(margin=dict(t=10, b=10, r=10, l=10))

st.write(fig)
# fig.show()


# PLOT_7 Bar charts with Wide Format Data

# example_1


df = px.data.medals_long()

st.write(df)

fig = px.bar(df, x="medal", y="count", color="nation", text_auto=True)
st.write(fig)
# fig.show()

# example_2
x = ['b', 'a', 'c', 'd']
fig = go.Figure(go.Bar(x=x, y=[2, 5, 1, 9], name='Montreal'))
fig.add_trace(go.Bar(x=x, y=[1, 4, 9, 16], name='Ottawa'))
fig.add_trace(go.Bar(x=x, y=[6, 8, 4.5, 8], name='Toronto'))

fig.update_layout(barmode='stack', xaxis={'categoryorder': 'total descending'})
st.write(fig)
# fig.show()


# See https://plotly.com/python/bar-charts/
# See https://plotly.com/python/horizontal-bar-charts/


with tab2:

    st.write("")
    st.write("")

    st.write(
    """

    #### About this app

    **Text coming in readme format**
    
    *More lines*
    
    """
    )
