#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
[env]
# you have created a env with all the required packages
conda create --name streamlit_spacy_1 python=3.9.7
conda info --envs
source activate streamlit_spacy_1
conda deactivate


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/using_bert_streamlit/examples_eda_2/


[file]
streamlit run 003_all_streamlit_webapp_for_data_science.py

# installation required
streamlit_pandas_profiling
pip install streamlit-embedcode
pip install streamlit-lottie
pip install streamlit-pandas-profiling

https://geekyturtles.com/blogs/exploratory-data-analysis-using-pandas-profiling/
https://www.kaggle.com/sootersaalu/amazon-top-50-bestselling-books-2009-2019

+ LOTTIE FILES
https://assets9.lottiefiles.com/private_files/lf30_imyUMa.json
https://assets9.lottiefiles.com/private_files/lf30_TYULVk.json
https://assets9.lottiefiles.com/private_files/lf30_5KCvlo.json
https://assets9.lottiefiles.com/private_files/lf30_erzifhq5.json
https://assets9.lottiefiles.com/private_files/lf30_hzafnofa.json
https://assets9.lottiefiles.com/private_files/lf30_h5OASV.json


"""

# additional requirements
from itertools import accumulate
from datetime import datetime
from datetime import time
import re
import urllib.request

from numpy.lib.utils import info

# personal configuration
import config_values.values_conf as conf

# from dash
from unicodedata import lookup
import pandas as pd
import os
import plotly.express as px
gapminder = px.data.gapminder()

# from streamlit
import streamlit as st
from streamlit_lottie import st_lottie
import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from pandas_profiling import ProfileReport
from streamlit_pandas_profiling import st_profile_report

### 1. VALUES ###
SOURCE_PATH = conf.SOURCE_PATH
TITLE_APP = conf.TITLE_APP
LABEL_EXPANDER = conf.LABEL_EXPANDER
APP_BASELINE = conf.APP_BASELINE


### 2. APPEARANCE ###
# Use the full page instead of a narrow central column
# st.beta_set_page_config(layout="wide")
st.set_page_config(page_title=None, page_icon=None,
                initial_sidebar_state="auto", layout="wide")

### 3. FUNCTIONS ###
def detectVersion():
        st.markdown('* * *')
        st.markdown('**VERSIONS**')
        st.write("streamlit ::", st.__version__)
        st.write("panda ::", pd.__version__)
        st.write("seaborn :: ", sns.__version__)
        
def greatExpender(text):
    with st.expander(LABEL_EXPANDER):
        st.markdown(f"{text}")



@st.cache
def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()


def ShowLottie(lottie_name, s, w, h):
    # lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_h5OASV.json'
    
    if lottie_name == "penguin":
        # st.write('penguin')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_lntyk83o.json'
    
    elif lottie_name == "dash":
        # st.write('dash')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_imyUMa.json'
        
    elif lottie_name == "gmail":
        # st.write('gmail')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_TYULVk.json'
    
    elif lottie_name == "marriot":
        # st.write('marriot')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_TYULVk.json'
    

    elif lottie_name == "shake":
        # st.write('shake')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_erzifhq5.json'
    
    elif lottie_name == "pirate":
        # st.write('pirate')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_hzafnofa.json'

    elif lottie_name == "light":
        # st.write('light')
        lottie_lot = 'https://assets9.lottiefiles.com/private_files/lf30_h5OASV.json'
    

    lottie_icon = load_lottieurl(lottie_lot)
    st_lottie(lottie_icon, speed=1.5, width=400, height=200)



### 4. APP ###
def main():
    

    
    ShowLottie('light', 1.5, 400, 200)
    

    st.title(TITLE_APP)
    st.markdown(APP_BASELINE)

    ###  CASE_1 ###
    showCase1 = st.checkbox('CASE_1', help="Help message CASE_1")
    greatExpender('Info on CASE_1')
    if showCase1:
        series = pd.read_csv(
            'data/amazon_top_50_bestselling_books_with_categories.csv')
        st.markdown('series.shape :: {} '.format(series.shape))
        st.write(series.head())

    ##  CASE_2 ###
    showCase2 = st.checkbox('CASE_2', help="Help message CASE_2")
    greatExpender('Info on CASE_2')
    if showCase2:
            
            pd.options.display.max_columns = None

            ## using plotly.express
            fig = px.scatter(data_frame=gapminder,
                            x='gdpPercap',
                            y='lifeExp',
                            color='continent',
                            animation_frame='year',
                            log_x=True,
                            hover_name='country',
                            title='Life Expectancy and GDP per capita. 1952 - 2007',
                            labels={'gdpPercap': 'GDP per Capita',
                                    'lifeExp': 'Life Expectancy'},
                            size='pop',
                            size_max=90,
                            facet_col='continent',
                            range_y=[20, 100],
                            height=600,
                            width=1100)
            st.write(fig)

    ##  CASE_3_A ###
    showCase3a = st.checkbox('CASE_3_A', help="Help message CASE_3_A")
    greatExpender('Info on CASE_3_A')
    if showCase3a:
        fileListing = os.listdir('data/')
        ##  DEBUG
        st.write(fileListing)
        files = st.sidebar.selectbox('File', (fileListing))

        ###  Creates DataFrame.
        df_files = pd.DataFrame(fileListing)

        ###  add file filter to sidebar, then filter, get the source
        ###  Print the data
        # st.write(df_files)
        # files = st.sidebar.multiselect('Files', df_files[0].unique())
    ##  CASE_3_B ###
    showCase3b = st.checkbox('CASE_3_B', help="Help message CASE_3_B")
    greatExpender('Info on CASE_3_B')
    if showCase3b:
        fileListing = os.listdir('data/')
        df_files = pd.DataFrame(fileListing)
        ###  add file filter to sidebar, then filter, get the source
        ###  Print the data
        st.write(df_files)
        files = st.sidebar.multiselect('Files', df_files[0].unique())
        
        
        

    ###  CASE_4 ###
    showCase4 = st.checkbox('CASE_4', help="Help message CASE_4")
    greatExpender('Info on CASE_4')
    if showCase4:
        series = pd.read_csv('data/PovStatsSeries.csv')
        st.markdown(series.shape)
        st.write(series.head())
        st.markdown('series.shape :: {} '.format(series.shape))
        st.write(series.head())

    ###  CASE_5 ###
    showCase5 = st.checkbox('CASE_5', help="Help message CASE_5")
    greatExpender('Info on CASE_5')
    if showCase5:
        series = pd.read_csv('data/PovStatsSeries.csv')
        st.write(series['Topic'].value_counts())
        st.write(series['Short definition'].notna().apply(['sum', 'mean']))
        fig = px.histogram(x=series['Long definition'].str.len(),
                    title='Indicator <b>Long definition</b> lenghts (characters)')
        st.write(fig)

        st.write(series['Unit of measure'].value_counts(dropna=False))

    ###  CASE_6 ###
    showCase6 = st.checkbox('CASE_6', help="Help message CASE_6")
    greatExpender('Info on CASE_6')
    if showCase6:
        series = pd.read_csv('data/PovStatsSeries.csv')
        st.write((series
        .groupby('Topic')
        ['Limitations and exceptions']
        .agg(['count', pd.Series.nunique])
        .style.set_caption('Limitations and Exceptions')))

    ###  CASE_7 ###
    showCase7 = st.checkbox('CASE_7', help="Help message CASE_5")
    greatExpender('Info on CASE_7')
    if showCase7:
        country = pd.read_csv('data/PovStatsCountry.csv', na_values='', keep_default_na=False)
        print(country.shape)
        st.markdown(country.shape)
        st.markdown('country.shape :: {} '.format(country.shape))
        st.markdown('country.head() :: {} '.format(country.head()))

        st.write(country.head())
        st.write(country.head(10))
        st.write(country.head(50))


        st.write(country[country['Region'].isna()]['Short Name'])
        st.write(country['Region'].value_counts(dropna=False).to_frame())


    ###  CASE_8 ###
    showCase8 = st.checkbox('CASE_8', help="Help message CASE_8")
    greatExpender('Info on CASE_8')
    if showCase8:
        country = pd.read_csv('data/PovStatsCountry.csv', na_values='', keep_default_na=False)
        country['is_country'] = country['Region'].notna()
        st.write(country[['Short Name', 'Region', 'is_country']].sample(10))

    ###  CASE_9 ###
    showCase9 = st.checkbox('CASE_9', help="Help message CASE_9")
    greatExpender('Info on CASE_9')
    if showCase9:
        country = pd.read_csv('data/PovStatsCountry.csv', na_values='', keep_default_na=False)
        income_group_counts = country['Income Group'].value_counts(
            dropna=False)
        st.write(income_group_counts)
        fig = px.bar(y=income_group_counts,
                     x=income_group_counts.index.astype(str),
                     title='Number of countries per income group')
        st.write(fig)

    ###  CASE_9_A ###
    showCase9a = st.checkbox('CASE_9_A', help="Help message CASE_9_A")
    greatExpender('Info on CASE_9_A')
    if showCase9a:
        country = pd.read_csv('data/PovStatsCountry.csv',
                              na_values='', keep_default_na=False)
        st.write(country[country['Region'].isna()]['Short Name'])
        




    ###  CASE_9_B ###
    showCase9b = st.checkbox('CASE_9_B', help="Help message CASE_9_B")
    greatExpender('Info on CASE_9_B')
    if showCase9b:
        country = pd.read_csv('data/PovStatsCountry.csv',
                              na_values='', keep_default_na=False)
        country['is_country'] = country['Region'].notna()
        country_codes = country[country['is_country']
                                ]['2-alpha code'].dropna().str.lower().tolist()
        st.markdown(country_codes)

        def flag(letters):
            if pd.isna(letters) or (letters.lower() not in country_codes):
                return ''
            L0 = lookup(f'REGIONAL INDICATOR SYMBOL LETTER {letters[0]}')
            L1 = lookup(f'REGIONAL INDICATOR SYMBOL LETTER {letters[1]}')
        ## return L0 + L1
        ## not in use
        ## lookup('REGIONAL INDICATOR SYMBOL LETTER A')

        st.write(*[flag(c) for c in country_codes])
        country['flag'] = [flag(code) for code in country['2-alpha code']]
        st.markdown(country['flag'])
        st.write(country['flag'])
        
    ###  CASE_10 ###
    showCase10 = st.checkbox('CASE_10', help="Help message CASE_10")
    greatExpender('Info on CASE_10')
    if showCase10:

        country_series = pd.read_csv('data/PovStatsCountry-Series.csv')
        st.markdown(country_series.shape)
        st.write(country_series.head())

    ###  CASE_11 ###
    showCase11 = st.checkbox('CASE_11', help="Help message CASE_11")
    greatExpender('Info on CASE_11')
    if showCase11:
        footnote = pd.read_csv('data/PovStatsFootNote.csv')
        footnote = footnote.drop('Unnamed: 4', axis=1)
        footnote['Year'] = footnote['Year'].str[2:].astype(int)
        footnote.columns = ['Country Code', 'Series Code', 'year', 'footnote']
        st.write(footnote)

    ###  CASE_12 ###
    showCase12 = st.checkbox('CASE_12', help="Help message CASE_12")
    greatExpender('Info on CASE_12')
    if showCase12:
        data = pd.read_csv('data/PovStatsData.csv')
        data = data.drop('Unnamed: 50', axis=1)
        st.markdown(data.shape)
        st.write(data.sample(3))

    ###  CASE_13 ###
    showCase13 = st.checkbox('CASE_13', help="Help message CASE_13")
    greatExpender('Info on CASE_13')
    if showCase13:
        df = pd.DataFrame({
            'country': ['country_A', 'country_B'],
            'indicator': ['indicator 1', 'indicator 1'],
            '2015': [100, 10],
            '2020': [120, 15]
        })
        df.style.set_caption('<b>Wide format</b>')
        st.write(df)

    ###  CASE_13_A ###
    showCase13a = st.checkbox('CASE_13_A', help="Help message CASE_13_A")
    greatExpender('Info on CASE_13_A')
    if showCase13a:
        df = pd.DataFrame({
            'country': ['country_A', 'country_B'],
            'indicator': ['indicator 1', 'indicator 1'],
            '2015': [100, 10],
            '2020': [120, 15]
        })
        df.style.set_caption('<b>Wide format</b>')
        st.write(df)
        st.markdown("*melted*")
        melted = df.melt(id_vars=['country', 'indicator'],
                        value_vars=['2015', '2020'], var_name='year')
        melted.style.set_caption('<b>Long (tidy) format</b>')
        st.write(melted)

    ###  CASE_13_B ###
    showCase13b = st.checkbox('CASE_13_B', help="Help message CASE_13_B")
    greatExpender('Info on CASE_13_B')
    if showCase13b:
        
        df = pd.DataFrame({
            'country': ['country_A', 'country_B'],
            'indicator': ['indicator 1', 'indicator 1'],
            '2015': [100, 10],
            '2020': [120, 15]
        })
        melted = df.melt(id_vars=['country', 'indicator'],
                         value_vars=['2015', '2020'], var_name='year')

        fig = (melted
        .pivot(index=['year', 'indicator'],
                columns='country', values='value')
        .reset_index()
        .style.set_caption('<b>Pivoted (wide) format</b>'))
        st.write(fig)

    ###  CASE_14 ###
    showCase14 = st.checkbox('CASE_14', help="Help message CASE_14")
    greatExpender('Info on CASE_14')
    if showCase14:

        ## the data
        data = pd.read_csv('data/PovStatsData.csv')
        data = data.drop('Unnamed: 50', axis=1)
        # st.write(data.shape)
        # st.write(data.sample(3))

        id_vars = ['Country Name', 'Country Code', 'Indicator Name', 'Indicator Code']
        data_melt = pd.melt(data, id_vars=id_vars, var_name='year').dropna(subset=['value'])
        data_melt['year'] = data_melt['year'].astype(int)

        st.write(data_melt.shape)
        st.write(data_melt.sample(10))

        data_pivot = data_melt.pivot(index=['Country Name', 'Country Code', 'year'],columns='Indicator Name', values='value').reset_index()
        st.write(data_pivot.shape)
        st.write(data_pivot.sample(5))
        data_pivot[['Country Code', 'year']].duplicated().any()

    ###  CASE_15 example ###
    showCase15 = st.checkbox('CASE_15', help="Help message CASE_15")
    greatExpender('Info on CASE_15')
    if showCase15:

        df = pd.DataFrame({
            'country': ['country_A', 'country_B'],
            'indicator': ['indicator 1', 'indicator 1'],
            '2015': [100, 10],
            '2020': [120, 15]
        })
        df.style.set_caption('<b>Wide format</b>')


        melted = df.melt(id_vars=['country', 'indicator'],
                        value_vars=['2015', '2020'], var_name='year')

        left = melted
        left.style.set_caption('df: "left"')


        right = pd.DataFrame({
            'country': ['country_A', 'country_B'],
            'continent': ['Asia', 'Europe'],
            'group': ['low income', 'high income']
        })
        right.style.set_caption('df: "right"')

        st.write(pd.merge(left=left, right=right, left_on='country', right_on='country', how='left').style.set_caption('df: merged'))

    ###  CASE_16 example ###
    showCase16 = st.checkbox('CASE_16', help="Help message CASE_16")
    greatExpender('Info on CASE_16')
    if showCase16:
        
        country = pd.read_csv('data/PovStatsCountry.csv', na_values='', keep_default_na=False)

        country['is_country'] = country['Region'].notna()
        country_codes = country[country['is_country']]['2-alpha code'].dropna().str.lower().tolist()


        def flag(letters):
            if pd.isna(letters) or (letters.lower() not in country_codes):
                return ''
            L0 = lookup(f'REGIONAL INDICATOR SYMBOL LETTER {letters[0]}')
            L1 = lookup(f'REGIONAL INDICATOR SYMBOL LETTER {letters[1]}')
            return L0 + L1

        # not in use
        # lookup('REGIONAL INDICATOR SYMBOL LETTER A')
        # st.write(*[flag(c) for c in country_codes])
        country['flag'] = [flag(code) for code in country['2-alpha code']]
        # st.markdown(country['flag'])
        # st.write(country['flag'])



        # the data
        data = pd.read_csv('data/PovStatsData.csv')
        data = data.drop('Unnamed: 50', axis=1)
        id_vars = ['Country Name', 'Country Code', 'Indicator Name', 'Indicator Code']
        data_melt = pd.melt(data, id_vars=id_vars, var_name='year').dropna(subset=['value'])
        data_melt['year'] = data_melt['year'].astype(int)

        data_pivot = data_melt.pivot(index=['Country Name', 'Country Code', 'year'],columns='Indicator Name', values='value').reset_index()
        # st.write(data_pivot.shape)
        # st.write(data_pivot.sample(5))


        data_pivot[['Country Code', 'year']].duplicated().any()

        poverty = pd.merge(data_pivot, country, left_on='Country Code',
                        right_on='Country Code', how='left')


        # st.write(poverty.head(2))

        year = 2015
        indicator = 'Income share held by lowest 10%'
        grouper = 'Region'

        df = (poverty[poverty['year'].eq(year)]
            .sort_values(indicator)
            .dropna(subset=[indicator, grouper]))

        figureAll = px.scatter(df,
                x=indicator,
                y='Country Name',
                color=grouper,
                symbol=grouper,
                facet_row=grouper,
                log_x=True,
                hover_name=df['Short Name'] + ' ' + df['flag'],
                size=[1] * len(df),
                template='ggplot2',
                title=' '.join([indicator, 'by', grouper, str(year)]),
                height=1500, width=1300)

        st.plotly_chart(figureAll)


    ###  CASE_17 example ###
    showCase17 = st.checkbox('CASE_17', help="Help message CASE_17")
    greatExpender('Info on CASE_17')
    if showCase17:
        
        poverty_data = pd.read_csv('data/PovStatsData.csv')


        poverty = pd.read_csv('data/poverty.csv', low_memory=False)


        gini = 'GINI index (World Bank estimate)'

        regions = ['East Asia & Pacific', 'Europe & Central Asia',
                'Fragile and conflict affected situations', 'High income',
                'IDA countries classified as fragile situations', 'IDA total',
                'Latin America & Caribbean', 'Low & middle income', 'Low income',
                'Lower middle income', 'Middle East & North Africa',
                'Middle income', 'South Asia', 'Sub-Saharan Africa',
                'Upper middle income', 'World']

        population_df = poverty_data[~poverty_data['Country Name'].isin(
            regions) & (poverty_data['Indicator Name'] == 'Population, total')]

        income_share_df = poverty.filter(
            regex='Country Name|^year$|Income share.*?20').dropna()

        income_share_df = income_share_df.rename(columns={
            'Income share held by lowest 20%': '1 Income share held by lowest 20%',
            'Income share held by second 20%': '2 Income share held by second 20%',
            'Income share held by third 20%': '3 Income share held by third 20%',
            'Income share held by fourth 20%': '4 Income share held by fourth 20%',
            'Income share held by highest 20%': '5 Income share held by highest 20%'
        }).sort_index(axis=1)

        income_share_df.columns = [re.sub('\d Income share held by ', '', col).title()
                                for col in income_share_df.columns]

        income_share_cols = income_share_df.columns[:-2]

        indicator = 'GINI index (World Bank estimate)'

        # SELECT A YEAR
        year = st.slider('Move the slider to pick up a year :', 1974, 2018, 1998, 1,
                        help="By default the slider is set on the year: 1998")
        df = poverty[poverty['is_country'] & poverty['year'].eq(year)]


        # SELECT A COUNTRY
        columns = ['Country Name', 'Country Code']
        poverty_data_reduced = poverty_data[columns]
        poverty_data_dropped_rows = poverty_data_reduced[poverty_data_reduced['Country Code'].str.contains(
            'EAS|FCS|ECS|HIC|DFS|IDA|LCN|LMY|LIC|LMC|MEA|MIC|SAS|SSF|UMC|WLD') == False]
        COUNTRIES = poverty_data_dropped_rows['Country Name'].unique()

        COUNTRIES_SELECTED = st.multiselect(
            'Choose one or more countries', COUNTRIES, help="This dropwdown menu show a list of 169 countries extracted from the PovStatsData.csv file")
        COUNTRIES_SELECTED_LENGTH = (len(COUNTRIES_SELECTED))


        # GENERATE COLOR LIST
        # an arithmetic sequence of reason 5 and first term 5
        locations_selection_color_starter = 5  # first term 5
        locations_selection_color_reason = 5  # reason 5
        maximum = locations_selection_color_reason*COUNTRIES_SELECTED_LENGTH


        def ColorMap():
            locations_selection_list = []
            for n in range(COUNTRIES_SELECTED_LENGTH):
                locations_selection_list.append(locations_selection_color_starter + n *
                                                locations_selection_color_reason)
            return locations_selection_list


        def ShowMap(locations, color):
            fig = px.choropleth(
                df,
                locations=COUNTRIES_SELECTED,
                color=ColorMap(),
                locationmode='country names',
                width=1024,
                height=768
            )
            st.write(fig)


        if not COUNTRIES_SELECTED:
            st.info("Please select at least one country")
        else:
            ShowMap(COUNTRIES_SELECTED, ColorMap())

    
    ###  CASE_18 example ###
    showCase18 = st.checkbox('CASE_18', help="Help message CASE_18")
    greatExpender('Info on CASE_18')
    if showCase18:
        poverty_data = pd.read_csv('data/PovStatsData.csv')


        poverty = pd.read_csv('data/poverty.csv', low_memory=False)


        gini = 'GINI index (World Bank estimate)'

        regions = ['East Asia & Pacific', 'Europe & Central Asia',
                'Fragile and conflict affected situations', 'High income',
                'IDA countries classified as fragile situations', 'IDA total',
                'Latin America & Caribbean', 'Low & middle income', 'Low income',
                'Lower middle income', 'Middle East & North Africa',
                'Middle income', 'South Asia', 'Sub-Saharan Africa',
                'Upper middle income', 'World']

        population_df = poverty_data[~poverty_data['Country Name'].isin(
            regions) & (poverty_data['Indicator Name'] == 'Population, total')]

        income_share_df = poverty.filter(
            regex='Country Name|^year$|Income share.*?20').dropna()

        income_share_df = income_share_df.rename(columns={
            'Income share held by lowest 20%': '1 Income share held by lowest 20%',
            'Income share held by second 20%': '2 Income share held by second 20%',
            'Income share held by third 20%': '3 Income share held by third 20%',
            'Income share held by fourth 20%': '4 Income share held by fourth 20%',
            'Income share held by highest 20%': '5 Income share held by highest 20%'
        }).sort_index(axis=1)

        income_share_df.columns = [re.sub('\d Income share held by ', '', col).title()
                                for col in income_share_df.columns]

        income_share_cols = income_share_df.columns[:-2]
        indicator = 'GINI index (World Bank estimate)'

        # HACK
        # st.write(poverty)
        # 'is_country' is one of the columns
        # st.code(poverty.columns)
        # st.write(poverty[poverty['is_country']])

        fig = px.choropleth(poverty[poverty['is_country']],
                            color_continuous_scale='cividis',
                            locations='Country Code',
                            color=indicator,
                            width=1024,
                            height=768,
                            animation_frame='year'
                            )

        # extend the layouts
        # fig.layout.geo.showframe = False
        fig.layout.geo.showframe = True
        fig.layout.geo.showcountries = True
        fig.layout.geo.projection.type = 'natural earth'
        fig.layout.geo.lataxis.range = [-53, 76]
        fig.layout.geo.lonaxis.range = [-137, 168]
        fig.layout.geo.landcolor = 'white'

        # fig.layout.geo.bgcolor = '#E5ECF6'
        # fig.layout.paper_bgcolor = '#E5ECF6'

        # https://www.color-hex.com/color/d7d0cb
        fig.layout.geo.bgcolor = '#d7d0cb'
        fig.layout.paper_bgcolor = '#d7d0cb'

        # fig.layout.geo.countrycolor = 'gray'
        # fig.layout.geo.coastlinecolor = 'gray'
        fig.layout.geo.countrycolor = '#e9cbd9'
        fig.layout.geo.coastlinecolor = '#e9cbd9'

        # fig.show()
        st.write(fig)

    
    
    ############  DEPOT ############
    # print("\n--- result output ---")
    # print(output)
    # print("\n--- result output features ---")
    # print(features)
    # print("\n--- result feature uniques ---")
    # print(uniques)

    # @st.cache
    # def random_data():
    # 	return random.sample(range(100), 50), random.sample(range(100), 50)


    # st.subheader("Plotly interactive scatterplot")
    # x, y = random_data()
    # fig = px.scatter(x=x, y=y, title="My fancy plot")
    # v = st_scatterplot(fig)
    # st.write(v)


    # series['Topic'].value_counts()
    # series['Short definition'].notna().apply(['sum', 'mean'])



    # col1, col2 = st.columns(2)

    # with col1:
    #     st.write('Trees by Width')
    #     fig_1, ax_1 = plt.subplots()
    #     ax_1 = sns.histplot(trees_df['dbh'], color=graph_color)
    #     plt.xlabel('Tree Width')
    #     st.pyplot(fig_1)

    # with col2:
    #     st.write('Trees by Age')
    #     fig_2, ax_2 = plt.subplots()
    #     ax_2 = sns.histplot(trees_df['age'], color=graph_color)
    #     plt.xlabel('Age (Days)')
    #     st.pyplot(fig_2)
        
        
    # st.header("Simple Header")
    # st.subheader("Another sub header")
    # st.text("For a simple text")
    # st.markdown("#### A Markdown ")
    # st.success("Successful")
    # st.info("This is an info alert ")
    # st.warning("This is a warning ")
    # st.error("This shows an error ")


# below
if __name__ == '__main__':
    main()
    
    # indicators
    detectVersion()
