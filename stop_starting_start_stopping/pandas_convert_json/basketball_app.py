#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/stop_starting_start_stopping/pandas_convert_json/


[file]
streamlit run basketball_app.py

[source]
- 001. https://github.com/fedpre/web_app_streamlit
https://github.com/oramirezperera/eda_basketball/blob/main/basketball_app.py




"""


import streamlit as st
import pandas as pd
import base64
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

st.title('NBA Player Stats Explorer')

st.markdown("""
This app do a WebScraping of NBA player stats data
* **Python Libraries:** base64, streamlit, pandas, seaborn, numpy, matplotlib
* **Data Source:** [Basketball-reference](https://www.basketball-reference.com/)
""")

# Sidebar of the app
st.sidebar.header('User Input Features')
selected_year = st.sidebar.selectbox('Year', list(reversed(range(1950,2021))))

# Web Scraping of the NBA player stats
@st.cache # This makes a cache from the data that we are scraping
def load_data(year):
    url = "https://www.basketball-reference.com/leagues/NBA_" + str(year) + "_per_game.html"
    html = pd.read_html(url, header=0) # Because all the data from the players is in a table we can use the read_html from pandas
    df = html[0] # Creates the data frame
    raw = df.drop(df[df.Age == 'Age'].index) # Deletes repeating headers in content
    raw = raw.fillna(0)
    player_stats = df.drop(['Rk'], axis=1)
    return player_stats
player_stats = load_data(selected_year)

# Side bar Team selection
sorted_unique_team = sorted(player_stats.Tm.unique())
selected_team = st.sidebar.multiselect('Team', sorted_unique_team, sorted_unique_team)

# Side bar Position selection
unique_pos = ['C', 'PF', 'SF', 'PG', 'SG']
selected_pos = st.sidebar.multiselect('Position', unique_pos, unique_pos)

# Filtering data
df_selected_team = player_stats[(player_stats.Tm.isin(selected_team)) & (player_stats.Pos.isin(selected_pos))]

st.header('Display Player Stats of selected Team(s)')
st.write('Data dimension: ' + str(df_selected_team.shape[0]) + 'rows and ' + str(df_selected_team.shape[1]) + ' columns')
st.dataframe(df_selected_team)

# To download NBA Players data
def file_downlowad(df):
    csv = df.to_csv(index=False)
    b64 = base64.b64encode(csv.encode()).decode() # strings to bits conversion
    href = f'<a href="data:file/csv;base64,{b64}" download=player_stats.csv> Download CSV File</a>'
    return href

st.markdown(file_downlowad(df_selected_team), unsafe_allow_html=True)

# Heatmap
if st.button('Intercorrelation Heatmap'):
    st.header('Intercorrelation Matrix Heatmap')
    df_selected_team.to_csv('output.csv', index=False)
    df = pd.read_csv('output.csv')

    corr = df.corr()
    mask = np.zeros_like(corr)
    mask[np.triu_indices_from(mask)] = True
    with sns.axes_style("white"):
        f, ax = plt.subplots(figsize=(7, 5))
        ax = sns.heatmap(corr, mask=mask, vmax=1, square=True)
    st.pyplot(f)

if st.button('Barchart for triples'):
    st.header('Barchart teams and triples')
    df_selected_team.to_csv('output.csv', index=False)
    df = pd.read_csv('output.csv')



    with sns.axes_style("white"):
        f, ax = plt.subplots(figsize=(15, 5))
        ax = sns.barplot(x='Tm', y='3P', data=df)
    
    st.pyplot(f)
    
