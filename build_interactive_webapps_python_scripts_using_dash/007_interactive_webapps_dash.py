#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/build_interactive_webapps_python_scripts_using_dash

[file]
python 007_interactive_webapps_dash.py




# more on infos and apps on
https://www.datacamp.com/community/tutorials/learn-build-dash-python


"""

import dash
import dash_core_components as dcc
import dash_html_components as html

app = dash.Dash()

app.layout = html.Div([   
            
            
            html.Label('Multi-Select Dropdown'),
            dcc.Dropdown(
            options=[
                {'label': 'New York City', 'value': 'NYC'},
                {'label': u'Montréal', 'value': 'MTL'},
                {'label': 'San Francisco', 'value': 'SF'}
            ],
            value=['MTL', 'SF'],
            multi=True
            ),
            
    html.Label('Radio Items'),
    dcc.RadioItems(
        options=[
            {'label': 'New York City', 'value': 'NYC'},
            {'label': u'Montréal', 'value': 'MTL'},
            {'label': 'San Francisco', 'value': 'SF'}
        ],
        value='MTL'
            )
            
])

if __name__ == '__main__':
    app.run_server()
    
    
