#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# you have created a env with all the required packages
source activate streamlit_spacy_1


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/using_bert_streamlit/examples_eda_2/


[file]
streamlit run 004_all_streamlit_webapp_for_data_science.py


"""
# personal configuration
import config_values.values_conf as conf



# from dash
from streamlit_pandas_profiling import st_profile_report
from pandas_profiling import ProfileReport
import seaborn as sns
import matplotlib.pyplot as plt
import requests
from streamlit_lottie import st_lottie
import streamlit as st
from unicodedata import lookup
import pandas as pd
import numpy as np
import os
import plotly.express as px
gapminder = px.data.gapminder()


### 1. VALUES ###
SOURCE_PATH = conf.SOURCE_PATH
TITLE_APP = conf.TITLE_APP
LABEL_EXPANDER = conf.LABEL_EXPANDER
APP_BASELINE = conf.APP_BASELINE
BOOK_DATA_URL = conf.BOOK_DATA_URL

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


def debug_wireframe(msg):
    st.code(f'{msg}')
    # st.write(f'**{msg}**')



### 4. APP ###
def main(): 	 
 
	st.title('Goodreads Reading Habits Analysis')
	st.markdown('*A Web App by Tyler Richards at tylerjrichards.com*')

	'''
		Hey there! Welcome to Tyler's Goodreads Analysis App. This app
		analyzes (and never stores!)
		the books you've read using the popular service Goodreads,
		including looking at the distribution
		of the age and length of books you've read. Give it a go by
		uploading your data below!
		'''
	###  CASE_1 example ###
	showCase1 = st.checkbox('CASE_1', help="Help message CASE_1")
	greatExpender('Info on CASE_1')
	if showCase1:
		# books_df = pd.read_csv('data/goodreads_history.csv')
		books_df = pd.read_csv(BOOK_DATA_URL)

		st.write('Analyzing your Goodreads history')
		# st.write(books_df.head())

		# print the list of all the column headers
		st.write("The column headers :")
		# st.write(list(books_df.columns.values))
		# st.write((books_df.columns.values))
		st.code((books_df.columns.values))
		# https://www.geeksforgeeks.org/get-list-of-column-headers-from-a-pandas-dataframe/

		# ['Book Id' 'Title' 'Author' 'Author l-f' 'Additional Authors' 'ISBN', 'ISBN13' 'My Rating' 'Average Rating' 'Publisher' 'Binding', 'Number of Pages' 'Year Published' 'Original Publication Year', 'Date Read' 'Date Added' 'Bookshelves' 'Bookshelves with positions', 'Exclusive Shelf' 'My Review' 'Spoiler' 'Private Notes' 'Read Count', 'Recommended For' 'Recommended By' 'Owned Copies', 'Original Purchase Date' 'Original Purchase Location' 'Condition', 'Condition Description' 'BCID']

		'''
			- How many books do I read each year?
			- How long does it take for me to finish a book that I have started?
			- How long are the books that I have read?
			- How old are the books that I have read?
			- How do I rate books compared to other Goodreads users?
			'''

		#year finished
		books_df['Year Finished'] = pd.to_datetime(books_df['Date Read']).dt.year
		books_per_year = books_df.groupby('Year Finished')[
                    'Book Id'].count().reset_index()
		books_per_year.columns = ['Year Finished', 'Count']
		fig_year_finished = px.bar(
                    books_per_year, x='Year Finished', y='Count', title='Books Finished per Year')

		#time difference
		books_df['days_to_finish'] = (pd.to_datetime(
                    books_df['Date Read']) - pd.to_datetime(books_df['Date Added'])).dt.days
		books_finished_filtered = books_df[(books_df['Exclusive Shelf'] == 'read') & (
                    books_df['days_to_finish'] >= 0)]
		fig_days_finished = px.histogram(books_finished_filtered, x='days_to_finish',
                                   title='Time Between Date Added And Date Finished', labels={'days_to_finish': 'days'})

		#num pages
		fig_num_pages = px.histogram(
                    books_df, x='Number of Pages', title='Book Length Histogram')

		#publication year
		books_publication_year = books_df.groupby('Original Publication Year')[
                    'Book Id'].count().reset_index()
		books_publication_year.columns = ['Year Published', 'Count']

		fig_year_published = px.bar(
                    books_publication_year, x='Year Published', y='Count', title='Book Age Plot')
		fig_year_published.update_xaxes(range=[1850, 2021])

		#rating
		books_rated = books_df[books_df['My Rating'] != 0]
		fig_my_rating = px.histogram(
                    books_rated, x='My Rating', title='User Rating')

		fig_avg_rating = px.histogram(
                    books_rated, x='Average Rating', title='Average Goodreads Rating')
		avg_difference = np.round(
                    np.mean(books_rated['My Rating'] - books_rated['Average Rating']), 2)

		if avg_difference >= 0:
				sign = 'higher'
		else:
				sign = 'lower'

		st.subheader('Your Analysis Results:')
		books_finished = books_df[books_df['Exclusive Shelf'] == 'read']
		u_books = len(books_finished['Book Id'].unique())
		u_authors = len(books_finished['Author'].unique())
		mode_author = books_finished['Author'].mode()[0]

		st.write(
				f'It looks like you have finished {u_books} books with a total of {u_authors} unique authors. Your most read author is {mode_author}!')

		st.write(f'Your app results can be found below, we have analyzed everything from your book length distribution to how you rate books. Take a look around, all the graphs are interactive!')

		row1_col1, row1_col2 = st.columns(2)
		row2_col1, row2_col2 = st.columns(2)
		row3_col1, row3_col2 = st.columns(2)

		with row1_col1:
			mode_year_finished = int(books_df['Year Finished'].mode()[0])
			st.plotly_chart(fig_year_finished)
			st.write(
					f'You finished the most books in {mode_year_finished}. Awesome job!')

		with row1_col2:
			st.plotly_chart(fig_days_finished)
			mean_days_to_finish = int(books_finished_filtered['days_to_finish'].mean())
			st.write(f'It took you an average of {mean_days_to_finish} days between when the book was added to Goodreads and when you finished the book. This is not a perfect metric, as you may have added this book to a to-read list!')

		with row2_col1:
			st.plotly_chart(fig_num_pages)
			avg_pages = int(books_df['Number of Pages'].mean())
			st.write(
				f'Your books are an average of {avg_pages} pages long, check out the distribution above!')

		with row2_col2:
			st.plotly_chart(fig_year_published)
			st.write('This chart is zoomed into the period of 1850-2021, but is interactive so try zooming in/out on interesting periods!')

		with row3_col1:
			st.plotly_chart(fig_my_rating)
			avg_my_rating = round(books_rated['My Rating'].mean(), 2)
			st.write(
					f'You rate books an average of {avg_my_rating} stars on Goodreads.')

		with row3_col2:
			st.plotly_chart(fig_avg_rating)
			st.write(
				f"You rate books {sign} than the average Goodreads user by {abs(avg_difference)}!")

			# goodreads_file = st.file_uploader('Please Import Your Goodreads Data')
			# if goodreads_file is None:
			#     books_df = pd.read_csv('streamlit_goodreads_book/goodreads_history.csv')
			#     st.write("Analyzing Tyler's Goodreads history")
			# else:
			#     books_df = pd.read_csv(goodreads_file)
			#     st.write('Analyzing your Goodreads history')
			#     st.write(books_df.head())
	
 	###  CASE_2 example ###
	showCase2 = st.checkbox('CASE_2', help="Help message CASE_2")
	greatExpender('Info on CASE_2')
	if showCase2:
		books_df = pd.read_csv(BOOK_DATA_URL)
		books_df['Year Finished'] = pd.to_datetime(books_df['Date Read']).dt.year
		# preparing data

		# year_simplify = pd.to_datetime(books_df['Date Read']).dt.year
		# books_df['Year Finished'] = year_simplify

		# you choose the column 'Date Read' that exists and you call it Year Finished


		# st.write(year_simplify)

		books_per_year = books_df.groupby('Year Finished')[
		'Book Id'].count().reset_index()
		# st.write(books_per_year)

		books_per_year.columns = ['Year Finished', 'Count']
		# st.write(books_per_year.columns)


		fig_year_finished = px.bar(
		books_per_year, x='Year Finished', y='Count', title='Books Finished per Year')

		st.write((books_df['Year Finished']))
		st.write((books_df['Year Finished'][0]))
		st.write((books_df['Year Finished'].mode()[0]))

		mode_year_finished = int(books_df['Year Finished'].mode()[0])
		st.plotly_chart(fig_year_finished)
		st.write(f'You finished the most books in {mode_year_finished}. Awesome job!')
   	
    ###  CASE_3 example ###
	showCase3 = st.checkbox('CASE_3', help="Help message CASE_3")
	greatExpender('Info on CASE_3')
	if showCase3:
		# st.write('CASE_3')
		## required
		books_df = pd.read_csv(BOOK_DATA_URL)
		# st.write('Analyzing your Goodreads history')
		# st.write(books_df.head())

		## print the list of all the column headers
		# st.write("The column headers :")
		# st.write(list(books_df.columns.values))
		# st.write((books_df.columns.values))
		# st.code((books_df.columns.values))
		## https://www.geeksforgeeks.org/get-list-of-column-headers-from-a-pandas-dataframe/

		## FIGURE_1
		# books_df['Year Finished'] = pd.to_datetime(books_df['Date Read']).dt.year
		# books_per_year = books_df.groupby('Year Finished')['Book Id'].count().reset_index()
		# books_per_year.columns = ['Year Finished', 'Count']

		## show me
		# fig_year_finished = px.bar(books_per_year, x='Year Finished',
		#                            y='Count', title='Books Finished per Year')

		# st.plotly_chart(fig_year_finished)


		## FIGURE_2 (V1)
		## split into 2 variables and make the difference, then convert to date and add to a column
		# date_read = (pd.to_datetime(books_df['Date Read']))
		# date_added = (pd.to_datetime(books_df['Date Added']))

		# books_df['days_to_finish']=(date_read - date_added).dt.days
		# ## debug
		# st.write(books_df['days_to_finish'])
		# ## show me
		# fig_days_finished = px.histogram(books_df, x='days_to_finish')
		# st.plotly_chart(fig_days_finished)

		## FIGURE_2 (V2)
		# books_df['days_to_finish'] = (pd.to_datetime(books_df['Date Read']) - pd.to_datetime(books_df['Date Added'])).dt.days
		# books_finished_filtered = books_df[(books_df['Exclusive Shelf'] == 'read') & (books_df['days_to_finish'] >= 0)]
		# fig_days_finished = px.histogram(books_finished_filtered, x='days_to_finish', title='Time Between Date Added And Date Finished', labels={'days_to_finish':'days'})
		# st.plotly_chart(fig_days_finished)

		## FIGURE_2
		# fig_num_pages = px.histogram(books_df, x='Number of Pages', title='Book Length Histogram')
		# st.plotly_chart(fig_num_pages)

		## CHECK
		# st.write('Assumption check')
		# st.write(len(books_df[books_df['Original Publication Year'] > books_df['Year Published']]))


		

		

		

		# FIGURE_6

		books_rated = books_df[books_df['My Rating'] != 0]
		fig_avg_rating = px.histogram(
			books_rated, x='Average Rating', title='Average Goodreads Rating')

		st.plotly_chart(fig_avg_rating)

		avg_difference = np.round(
			np.mean(books_rated['My Rating'] - books_rated['Average Rating']), 2)

		if avg_difference >= 0:
			sign = 'higher'
		else:
			sign = 'lower'

		# conclusion
		st.write(
			f"You rate books {sign} than the average Goodreads user by {abs(avg_difference)}!")

    ###  CASE_4 example ###
	showCase4 = st.checkbox('CASE_4', help="Help message CASE_4")
	greatExpender('Info on CASE_4')
	if showCase4:
		st.write('CASE_4')
		# FIGURE_3
  		## required
		books_df = pd.read_csv(BOOK_DATA_URL)
		# books_publication_year = books_df.groupby('Original Publication Year')[
		#     'Book Id'].count().reset_index()
		# books_publication_year.columns = ['Year Published', 'Count']

		# fig_year_published = px.bar(books_publication_year, x='Year Published', y='Count', title='Book Age Plot')
		# st.plotly_chart(fig_year_published)
    
    ###  CASE_5 example ###
	showCase5 = st.checkbox('CASE_5', help="Help message CASE_5")
	greatExpender('Info on CASE_5')
	if showCase5:
		st.write('CASE_5')
  		## required
		books_df = pd.read_csv(BOOK_DATA_URL)
		## FIGURE_4
		books_publication_year = books_df.groupby('Original Publication Year')['Book Id'].count().reset_index()
		books_publication_year.columns = ['Year Published', 'Count']
		st.write(books_df.sort_values(by='Original Publication Year').head(10))

		fig_year_published = px.bar(books_publication_year, x='Year Published', y='Count', title='Book Age Plot')
		fig_year_published.update_xaxes(range=[1850, 2021])

		## https://plotly.com/python/reference/layout/xaxis/
		## https://plotly.com/python/reference/layout/yaxis/

		st.plotly_chart(fig_year_published)
		st.write('This chart is zoomed into the period of 1850 - 2021, but is interactive so try zooming in /out on interesting periods!')
  	
   	###  CASE_6 example ###
	showCase6 = st.checkbox('CASE_6', help="Help message CASE_6")
	greatExpender('Info on CASE_6')
	if showCase6:
		st.write('CASE_6')
  		## required
		books_df = pd.read_csv(BOOK_DATA_URL)
		## FIGURE_5
		books_rated = books_df[books_df['My Rating'] != 0]
		fig_my_rating = px.histogram(books_rated, x='My Rating', title='User Rating')
		st.plotly_chart(fig_my_rating)

		fig_avg_rating = px.histogram(books_rated, x='Average Rating', title='Average Goodreads Rating')
		st.plotly_chart(fig_avg_rating)

 	###  CASE_7 example ###
	showCase7 = st.checkbox('CASE_7', help="Help message CASE_7")
	greatExpender('Info on CASE_7')
	if showCase7:
		st.write('CASE_7')
		## required
		books_df = pd.read_csv(BOOK_DATA_URL)
		books_finished = books_df[books_df['Exclusive Shelf'] == 'read']

		u_books = len(books_finished['Book Id'].unique())
		u_authors = len(books_finished['Author'].unique())
		mode_author = books_finished['Author'].mode()[0]

		st.write(
		f'It looks like you have finished **{u_books}** books with a total of **{u_authors}** unique authors. Your most read author is **{mode_author}**!')

		st.write(f'Your app results can be found below, we have analyzed everything from your book length distribution to how you rate books. Take a look around, all the graphs are interactive!')


		row1_col1, row1_col2 = st.columns(2)
		row1_col1, row1_col2 = st.columns(2)
		row2_col1, row2_col2 = st.columns(2)
		row3_col1, row3_col2 = st.columns(2)

		with row1_col1:
			debug_wireframe("row1_col1")

		with row1_col2:
			debug_wireframe("row1_col2")

		with row2_col1:
			st.code("row2_col1")

		with row2_col2:
			st.code("row2_col2")

		with row3_col1:
			st.code("row3_col1")

		with row3_col2:
			st.code("row3_col2")
 	
  	

if __name__ == '__main__':
    main()

    # indicators
    detectVersion()
