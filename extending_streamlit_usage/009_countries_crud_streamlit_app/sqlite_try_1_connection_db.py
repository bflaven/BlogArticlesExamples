#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/009_countries_crud_streamlit_app/

[file]
python sqlite_try_1_connection_db.py



# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://www.tutorialspoint.com/python_sqlite/

"""

import sqlite3
conn = sqlite3.connect('data/source.db')

print("\n--- connected to source.db")
print("SUCCESS :: Connection established")
