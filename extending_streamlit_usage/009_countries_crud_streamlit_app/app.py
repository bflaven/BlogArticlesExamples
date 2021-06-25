#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/009_countries_crud_streamlit_app/



[file]
streamlit run app.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://github.com/Jcharis/

"""
import streamlit as st
import pandas as pd

# # NLP pkgs
# import spacy
# from spacy import displacy
# nlp = spacy.load('en')

# Database Functions check db_wrapper.py
from db_wrapper import *

from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator

import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')



# Reading Time
def readingTime(mytext):
	total_words = len([ token for token in mytext.split(" ")])
	estimatedTime = total_words/200.0
	return estimatedTime

def analyze_text(text):
	return nlp(text)
# id, name, tld, cca2, capital, callingCode
# Layout Templates
title_temp ="""
	<div style="background-color:#cccccc;padding:10px;border-radius:10px;margin:10px;">
	<p style="text-align:center">id => {}<p>
	<p style="text-align:center">name => {}</p>
	<p style="text-align:center">capital => {}</p>
    <p style="text-align:center">tld => {}</p>
	<p style="text-align:center">cca2 => {}</p>
	</div>
	"""
 
head_message_temp = """
	<div style="background-color:#cccccc;padding:10px;border-radius:10px;margin:10px;">
	<p style="text-align:center">id => {}<p>
	<p style="text-align:center">name => {}</p>
	<p style="text-align:center">tld => {}</p>
	</div>
	"""

full_message_temp = """
	<div style="background-color:silver;overflow-x: auto; padding:10px;border-radius:5px;margin:10px;">
		<p style="text-align:justify;color:black;padding:10px">capital => {}</p>
	</div>
	"""
 
def main():
	"""A Simple CRUD Blog App"""
	html_temp = """
		<div style="background-color:{};padding:1px;border-radius:10px">
		<h1 style="color:{};text-align:center;">Crud Countries App</h1>
		</div>
		"""
	st.markdown(html_temp.format('#cccccc','#000000'),unsafe_allow_html=True)
		
	menu = ["Home", "View Country", "Add Country", "Search", "Manage Country"]
	choice = st.sidebar.selectbox("Menu", menu)

	if choice == "Home":
		st.subheader("Home")
        
		result = view_all_countries()

		# debug in console
		# print(result)
		# values :: id, name, tld, cca2, capital, callingCode
		for i in result:
			st.write(title_temp.format(i[0], i[1], i[4], i[2], i[3]), unsafe_allow_html=True)
   
			
	elif choice == "View Country":
		st.subheader("View Country")

		all_countries = [i[0] for i in view_all_names()]
		countrylist = st.sidebar.selectbox("Countries", all_countries)
		country_result = get_country_by_name(countrylist)
		for i in country_result:
			st.markdown(head_message_temp.format(i[0], i[1], i[2]), unsafe_allow_html=True)
			st.markdown(full_message_temp.format(i[4]), unsafe_allow_html=True)
  
	elif choice == "Add Country":
		st.subheader("Add Your Country")
		# create_table()
		# create_index()
		country_name = st.text_input(
		"Enter Country Name", help="Enter Country Name e.g Afghanistan")
		country_tld = st.text_input(
		"Enter Country tld", max_chars=10, help="Enter Country Name e.g .af")
		country_cca2 = st.text_input(
		"Enter Country cca2", max_chars=10, help="Enter Country cca2 e.g AF")
		country_capital = st.text_area(
		"Enter Country Capital", height=100, help="Enter Country Capital e.g Kabul")
		country_callingcode = st.number_input(
		"Enter Country Calling Code", min_value=1, max_value=1000, help="Enter Country Capital e.g 93")
		if st.button("Add"):
		# add_data(blog_author,blog_title,blog_article,blog_post_date)
			add_data(country_name, country_tld, country_cca2,
			country_capital, country_callingcode)
			st.success("Country ::'{}' Saved".format(country_name))
	
    # values :: id, name, tld, cca2, capital, callingCode
	elif choice == "Search":
		st.subheader("Search Countries")
		search_term = st.text_input("Enter Term")
		search_choice = st.radio("Field to Search", ("name", "capital"))
		if st.button('Search'):
			if search_choice == "name":
				country_result = get_country_by_name(search_term)
			elif search_choice == "capital":
				country_result = get_country_by_capital(search_term)
			
			# Preview Articles
			for i in country_result:
				# st.text("Reading Time:{} minutes".format(readingTime(str(i[2]))))
				# st.write(article_temp.format(i[1],i[0],i[3],i[2]),unsafe_allow_html=True)
				st.markdown(head_message_temp.format(i[0], i[1], i[2]), unsafe_allow_html=True)
				st.markdown(full_message_temp.format(i[4]), unsafe_allow_html=True)
  
		
			
	elif choice == "Manage Country":
		st.subheader("Manage Country")
		result = view_all_countries()
		clean_db = pd.DataFrame(result, columns=["ID","NAME", "TLD", "CCA2", "CAPITAL", "CALLINGCODE"])
		st.dataframe(clean_db)
		unique_list = [i[0] for i in view_all_names()]
		delete_by_name =  st.selectbox("Select Name",unique_list)
		if st.button("Delete"):
			delete_data(delete_by_name)
			st.warning("Deleted: '{}'".format(delete_by_name))
			
if __name__ == '__main__':
	main()

# DEPOT
# MODEL
# st.text_input(value="", max_chars=None, key=None, type="default", help=None)
