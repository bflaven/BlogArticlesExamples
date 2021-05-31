#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/build_interactive_webapps_python_scripts_using_dash

[file]
python 001b_plotly_interactive_webapps_dash.py




# more on infos and apps on
https://dash.plotly.com/layout


"""

# Run this app with `python app.py` and
# visit http://127.0.0.1:8050/ in your web browser.

import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import pandas as pd


external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

# assume you have a "long-form" data frame
# see https://plotly.com/python/px-arguments/ for more options
"""
United States 1022,795,706
Germany 428,444,474
Soviet Union 440,357,325
Great Britain 263,295,293
France 212,241,263
Italy 206,178,193
China 224,167,155
Australia 147,163,187
Sweden 145,170,179
Hungary 175,147,169

"""
df = pd.DataFrame({
    "Medal": ["Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze", "Gold", "Silver", "Bronze"],
    "Amount": [1022, 795, 706, 428, 444, 474, 440, 357, 325, 263, 295, 293, 212, 241, 263, 206, 178, 193, 224, 167, 155, 147, 163, 187, 145, 170, 179, 175, 147, 169],
    "Country": ["United States", "United States", "United States", "Germany", "Germany", "Germany", "Soviet Union", "Soviet Union", "Soviet Union", "Great Britain", "Great Britain", "Great Britain", "France", "France", "France", "Italy", "Italy", "Italy", "China", "China", "China", "Australia", "Australia", "Australia", "Sweden", "Sweden", "Sweden", "Hungary", "Hungary", "Hungary"]
})

print("\n--- // OUTPUT_DATA")
print(df)
print("--- // OUTPUT_DATA \n")


fig = px.bar(df, x="Medal", y="Amount", color="Country", barmode="group")

app.layout = html.Div(children=[
    html.H1(children='Hello Dash, Streamlit competitor'),

    html.Div(children='''
        Dash: A web application framework for Python. Streamlit competitor
        All-Time Olympic Games Medal Tally (Summer Olympics)
    '''),

    dcc.Graph(
        id='example-graph',
        figure=fig
    )
])

if __name__ == '__main__':
    app.run_server(debug=False)
