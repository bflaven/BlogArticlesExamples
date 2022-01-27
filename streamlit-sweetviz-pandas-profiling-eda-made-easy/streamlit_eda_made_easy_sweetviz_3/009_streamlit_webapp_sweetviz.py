#!/usr/bin/python
# -*- coding: utf-8 -*-

"""

[env]
conda create --name streamlit_spacy_1 python=3.9.7
conda info --envs
source activate streamlit_spacy_1
conda deactivate

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/streamlit-sweetviz-pandas-profiling-eda-made-easy/streamlit_eda_made_easy_sweetviz_3/

[file]
streamlit run 009_streamlit_webapp_sweetviz.py

# installation required
pip install 

[source]
https://coderzcolumn.com/tutorials/data-science/sweetviz-automate-exploratory-data-analysis-eda



"""

import streamlit as st
import requests
import pandas as pd
import numpy as np
import seaborn as sns
import datetime as dt
import matplotlib.pyplot as plt

# Import Sweetviz
import sweetviz as sv

# Import datasets
from sklearn import datasets
from sklearn.model_selection import train_test_split

# personal configuration
import config_values.values_conf as conf

### 1. VALUES ###
TEXT_TITLE_APP = conf.TEXT_TITLE_APP
TEXT_SUBHEADER_APP = conf.TEXT_SUBHEADER_APP
TEXT_WARNING = conf.TEXT_WARNING
TEXT_OUTPUT_REPORT_SWEETVIZ = conf.TEXT_OUTPUT_REPORT_SWEETVIZ

LABEL_EXPANDER = conf.LABEL_EXPANDER
MENU_SIDEBAR_OPTIONS = conf.MENU_SIDEBAR_OPTIONS

TEXT_HELP_1 = conf.TEXT_HELP_1
TEXT_HELP_2 = conf.TEXT_HELP_2


GREAT_EXPENDER_TEXT_1 = conf.GREAT_EXPENDER_TEXT_1
GREAT_EXPENDER_TEXT_2 = conf.GREAT_EXPENDER_TEXT_2
GREAT_EXPENDER_TEXT_3 = conf.GREAT_EXPENDER_TEXT_3
TEXT_WARNING_REPORT = conf.TEXT_WARNING_REPORT
TEXT_WARNING_REPORT_HELP = conf.TEXT_WARNING_REPORT_HELP

SINGLE_REPORT_NAME = conf.SINGLE_REPORT_NAME


def greatExpender(text):
    with st.expander(LABEL_EXPANDER):
        st.markdown(f"{text}")
        

def outputReportSweetviz(df, report_name):
    st.markdown(TEXT_OUTPUT_REPORT_SWEETVIZ)
    sweetviz_report = sv.analyze(df)
    sweetviz_report.show_html(
        filepath=report_name, open_browser=True, layout='widescreen', scale=None)
    st.success(f"{report_name} has been created")

    
def main():
    st.title(TEXT_TITLE_APP)
    st.subheader(TEXT_SUBHEADER_APP)
    st.warning(TEXT_WARNING)
    st.code(f'SweetViz Version :: {format(sv.__version__)}')

    
    options = MENU_SIDEBAR_OPTIONS

    menu = st.sidebar.selectbox("Menu options", options, help=TEXT_HELP_1)
    
    # --- SCREEN_1 :: WINES ---
    if (menu == f"{str(MENU_SIDEBAR_OPTIONS[0])}"):
        st.markdown(f"### {str(MENU_SIDEBAR_OPTIONS[0])}")
        greatExpender(GREAT_EXPENDER_TEXT_1)
        # WINES
        report_name = f'{str(SINGLE_REPORT_NAME[0])}'
        wine = datasets.load_wine()
        df = pd.DataFrame(data=wine.data, columns=wine.feature_names)
        df["WineType"] = wine.target
        st.markdown('**WINES from sklearn**')
        if st.checkbox("Show dataframe (head)", help=TEXT_HELP_2):
            st.write(df.head())
        
        # OUTPUT
        sweetviz_report = st.checkbox(
            TEXT_WARNING_REPORT, help=TEXT_WARNING_REPORT_HELP)

        st.warning(TEXT_WARNING_REPORT)
        if sweetviz_report:
            sweetviz_report = report_name
            outputReportSweetviz(df, report_name)


    # --- SCREEN_2 :: DIABETES ---
    if (menu == f"{str(MENU_SIDEBAR_OPTIONS[1])}"):
        st.markdown(f"### {str(MENU_SIDEBAR_OPTIONS[1])}")
        greatExpender(GREAT_EXPENDER_TEXT_2)
        # DIABETES
        report_name = f'{str(SINGLE_REPORT_NAME[1])}'
        diabetes = datasets.load_diabetes()
        df = pd.DataFrame(
        data=diabetes.data, columns=diabetes.feature_names)
        df["Progression"] = diabetes.target
        st.markdown('**DIABETES from sklearn**')
        if st.checkbox("Show dataframe (head)", help=TEXT_HELP_2):
            st.write(df.head())
        
        # OUTPUT
        sweetviz_report = st.checkbox(
            TEXT_WARNING_REPORT, help=TEXT_WARNING_REPORT_HELP)

        st.warning(TEXT_WARNING_REPORT)
        if sweetviz_report:
            sweetviz_report = report_name
            outputReportSweetviz(df, report_name)

    
    # --- SCREEN_3 :: BOSTON ---
    if (menu == f"{str(MENU_SIDEBAR_OPTIONS[2])}"):
        st.markdown(f"### {str(MENU_SIDEBAR_OPTIONS[2])}")
        greatExpender(GREAT_EXPENDER_TEXT_3)
        
        # BOSTON
        report_name = f'{str(SINGLE_REPORT_NAME[2])}'
        boston = datasets.load_boston()
        df = pd.DataFrame(data=boston.data, columns=boston.feature_names)
        df["Price"] = boston.target
        st.markdown('**BOSTON from sklearn**')
        if st.checkbox("Show dataframe (head)", help=TEXT_HELP_2):
            st.write(df.head())
        
        # OUTPUT
        sweetviz_report = st.checkbox(
            TEXT_WARNING_REPORT, help=TEXT_WARNING_REPORT_HELP)

        st.warning(TEXT_WARNING_REPORT)
        if sweetviz_report:
            sweetviz_report = report_name
            outputReportSweetviz(df, report_name)
            
            
            
    
    # --- SCREEN_4 :: resources ---
    if (menu == f"{str(MENU_SIDEBAR_OPTIONS[3])}"):
        st.markdown(f"### {str(MENU_SIDEBAR_OPTIONS[3])}")
        
        st.markdown("""
                    **All my knowledge came from this article:** 
                    
                    [https://coderzcolumn.com/tutorials/data-science/sweetviz-automate-exploratory-data-analysis-eda](https://coderzcolumn.com/tutorials/data-science/sweetviz-automate-exploratory-data-analysis-eda)
                    
                    
                    Again, I strongly invite you to read this article that is the best I have found on the web. I have just extended some elements from this article by giving some information and migrate the all stuff presented into Streamlit framework.
                    
                    """)
        
    
        
if __name__ == "__main__":
    main()


    
    # ! 1. Single Dataset Analysis example_1
    # diabetes_df
    # CHOSEN_DATAFRAME_OUTPUT = 'example_1_diabetes_df_streamlit_webapp_sweetviz.html'

    # sweetviz_report = sv.analyze(diabetes_df)
    # sweetviz_report.show_html(filepath=(CHOSEN_DATAFRAME_OUTPUT), open_browser=True, layout='widescreen', scale=None)

    # ! 2. Target Variable Analysis example_2
    # diabetes_df
    # CHOSEN_DATAFRAME_OUTPUT = 'example_2_diabetes_df_streamlit_webapp_sweetviz.html'

    # sweetviz_report = sv.analyze([diabetes_df, "Diabetes Dataset"], target_feat="Progression")
    # sweetviz_report.show_html(filepath=(CHOSEN_DATAFRAME_OUTPUT), open_browser=True, layout='widescreen', scale=None)

    # ! 2. Target Variable Analysis example_3
    # wine_df
    # CHOSEN_DATAFRAME_OUTPUT = 'example_3_wine_df_proline_magnesium_streamlit_webapp_sweetviz.html'

    # config = sv.FeatureConfig(skip=["proline", "magnesium"], force_num=['WineType'])
    # sweetviz_report = sv.analyze(source=wine_df, feat_cfg=config, target_feat="WineType")
    # sweetviz_report.show_html(filepath=(CHOSEN_DATAFRAME_OUTPUT), open_browser=True, layout='widescreen', scale=None)

    # ! 2. Target Variable Analysis example_4

    # wine_df
    # CHOSEN_DATAFRAME_OUTPUT = 'example_4_wine_df_pairwise_off_streamlit_webapp_sweetviz.html'

    # sweetviz_report = sv.analyze(source=wine_df, pairwise_analysis="off")
    # sweetviz_report.show_html(filepath=(CHOSEN_DATAFRAME_OUTPUT), open_browser=True, layout='widescreen', scale=None)

    # ! 3. Compare Two datasets example_5
    # diabetes_df
    # CHOSEN_DATAFRAME_OUTPUT = 'example_5_diabetes_df_compare_2_datasets_streamlit_webapp_sweetviz.html'

    # train_df, test_df = train_test_split(diabetes_df, train_size=0.8)

    # # DEBUG
    # st.write(f"diabetes_df.shape :: {diabetes_df.shape}")
    # st.write(f"train_df.shape :: {train_df.shape}")
    # st.write(f"test_df.shape :: {test_df.shape}")

    # sweetviz_report = sv.compare(source=train_df, compare=test_df, target_feat="Progression")
    # sweetviz_report.show_html(filepath=(CHOSEN_DATAFRAME_OUTPUT), open_browser=True, layout='widescreen', scale=None)

    # ! 3. Compare Two datasets example_6
    # diabetes_df
    # CHOSEN_DATAFRAME_OUTPUT = 'example_6_diabetes_df_compare_2_datasets_streamlit_webapp_sweetviz.html'

    # train_df, test_df = train_test_split(diabetes_df, train_size=0.8)

    # DEBUG
    # st.write(f"diabetes_df.shape :: {diabetes_df.shape}")
    # st.write(f"train_df.shape :: {train_df.shape}")
    # st.write(f"test_df.shape :: {test_df.shape}")

    # sweetviz_report = sv.compare(source=[train_df, "Train Set"], compare=[test_df, "Validation Set"],
    #                              target_feat="Progression")
    # sweetviz_report.show_html(filepath=(
    #     CHOSEN_DATAFRAME_OUTPUT), open_browser=True, layout='widescreen', scale=None)
    
    # ! 3. Compare Two datasets example_7

    # diabetes_df
    # CHOSEN_DATAFRAME_OUTPUT = 'example_7_diabetes_df_compare_2_datasets_streamlit_webapp_sweetviz.html'

    # train_df, test_df = train_test_split(boston_df, train_size=0.8)

    # DEBUG
    # st.write(f"boston_df.shape :: {boston_df.shape}")
    # st.write(f"boston_df.shape :: {train_df.shape}")
    # st.write(f"boston_df.shape :: {test_df.shape}")

    # sweetviz_report = sv.compare_intra(source_df=boston_df, condition_series=boston_df["CHAS"].astype(
    #     bool), names=["Bounds River", "Doesn't Bounds River"])
    # sweetviz_report.show_html(filepath=(
    #     CHOSEN_DATAFRAME_OUTPUT), open_browser=True, layout='widescreen', scale=None)

    # ! 5. Analysis Directly using DataFrameReport Object example_8

    # wine_df
    # CHOSEN_DATAFRAME_OUTPUT = 'example_8_wine_df_dataframereport_streamlit_webapp_sweetviz.html'

    # train_df, test_df = train_test_split(wine_df, train_size=0.8)

    # sweetviz_report = sv.DataframeReport(source=wine_df)
    # sweetviz_report = sv.DataframeReport(
    #     source=train_df, compare=test_df, target_feature_name="Progression")

    
