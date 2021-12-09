#!/usr/bin/python
# -*- coding: utf-8 -*-
"""
[env]
conda create --name automate_screaming_frog python=3.9.7
conda info --envs
source activate automate_screaming_frog
conda deactivate

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python-automate-screaming-frog-sqlalchemy-streamlit-pandas-plotly/streamlit_app_crawl_screamingfrog/

[file]
streamlit run streamlit_app_crawl_screamingfrog.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/
Source: https://www.tutorialspoint.com/python_sqlite/

[textual wrireframe]

https://github.com/bingblackbean/streamlit_pycaret/blob/master/main.py
https://github.com/Desmondchoo42/PDF-Manipulation-Streamlit

"""
# require in this file
import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
# require in this file
from os.path import isfile, join
import glob
# import datetime as dt
from datetime import date
from datetime import datetime as dt

import time
import sqlite3

# Database using sqlalchemy
import sqlalchemy as db
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, Column, String, Integer, Float
import pandas as pd
# it imports the table that you need
from streamlit_sqlalchemy_example_database import Websites, Crawls

# graphics
import matplotlib.pyplot as plt
import plotly.express as px

# Check values_conf.py for credentials file
import config_values.values_conf as conf


# I use .sqlite3 as extension because i can edit through Visual Code Studio editor
# use the same db file and path for database file
engine = create_engine(
    'sqlite:///sqlalchemy_data/screamingfrog_websites_crawls_all_new_1.sqlite3', connect_args={'check_same_thread': False}, echo=False)

# examples to connect to db
# conn = sqlite3.connect('db_name.db', check_same_thread=False)
# engine = create_engine('sqlite:///db_name.sqlite', connect_args={'check_same_thread': False}, echo=True)

# connect to database
Session = sessionmaker(bind=engine)
se = Session()
 

        
def choosing_asset():
    results = se.query(Websites).all()
    with results as item:
        data = list(item)
        option = st.selectbox('Select your asset', data)
        id = option[0]
        return(id)

def detectVersion():
        st.sidebar.markdown('* * *')
        st.sidebar.markdown('**VERSIONS**')
        st.sidebar.write("streamlit ::", st.__version__)
        st.sidebar.write("panda ::", pd.__version__)
        st.sidebar.write("numpy :: ", np.__version__)
        st.sidebar.write("sqlalchemy :: ", db.__version__)



def main():
        """ A simple attempt for screamingfrog crawls"""
        
        ### 1. values ###
        PATH_TO_APP = conf.PATH_TO_APP
        PATH_TO_FILE_SEOSPIDERCONFIG = conf.PATH_TO_FILE_SEOSPIDERCONFIG
        PATH_TO_EXPORT = conf.PATH_TO_EXPORT
        PATH_TO_DESTINATION = conf.PATH_TO_DESTINATION
        
        ### 2. INTRO ###
        st.title('Attempt streamlit app to manage crawl with screamingfrog')
        # st.write('enable some libraries :: streamlit, pandas, numpy, matplotlib | SEO oriented app and automation')
        st.info('enable some libraries :: streamlit, pandas, numpy, matplotlib | SEO oriented app and automation')
        
        
        # st.write(f"PATH_TO_APP {PATH_TO_APP}")
        # st.write(
        #     f"PATH_TO_FILE_SEOSPIDERCONFIG {PATH_TO_FILE_SEOSPIDERCONFIG}")
        # st.write(f"PATH_TO_EXPORT {PATH_TO_EXPORT}")
        # st.write(f"PATH_TO_DESTINATION {PATH_TO_DESTINATION}")
        
        ### 3. APP DESIGN ###
        # USELESS, remove Rename section but still in code if needed
        # menu = ["General", "Crawl", "Rename", "Parse & Insert", "Analyze"]
        
        menu = ["General", "Crawl", "Parse & Insert", "Analyze"]
        choice = st.sidebar.selectbox("Menu", menu)

        if choice == "General":
            st.subheader("General")
            
            name = st.text_input('Enter an name\'s website', 
                     '', 
                     placeholder='John Doe\'s Blog',
                     help='Type here a name\'s website')


            url = st.text_input('Enter the url',
                    '',
                    placeholder='John Doe\'s Blog url',
                    help='Type here the url\'s website')

            submit = st.button('Insert into DB')

            if submit and url:
                try:
                    entry = Websites(name=name, url=url)
                    se.add(entry)
                    se.commit()
                    se.close()
                    st.success("The data added to the database")
                except Exception as e:
                    st.error(f"some error occurred: {e}")
                    
            if st.checkbox("View data"):
                results = se.query(Websites).all()
                
                for item in results:
                    st.markdown("### "+item.name+"")
                    st.write(f"url: {item.url}")
    
    
    
        elif choice == "Crawl":
            st.subheader("Crawl")
        

            num_results = se.query(Websites).count()
            st.info(f"Websites's number in database: {num_results}")
            
            
            if (num_results) > 0:
                st.markdown("**Please select a website to crawl below:**")

                # TRY_3
                results = se.query(Websites).all()
                websites = [item.name for item in results]
                websiteids = ([item.websiteid for item in results])
                urls = ([item.url for item in results])
                options = list(range(len(websites)))
                
                
                def format_func(option):
                    return websites[option]
                
                website_name = st.selectbox(
                    'Select your website', options, format_func=format_func, help='Select a website for the crawl')
                                
                url = urls[website_name]
                name = websites[website_name].replace(" ", "").lower()
                
                # st.code(f"{websites}")
                # st.code(f"{name}")
                
                # command to launch the crawl
                # PATH_TO_APP = '/Applications/Screaming\ Frog\ SEO\ Spider.app/Contents/MacOS/ScreamingFrogSEOSpiderLauncher'
                
                # PATH_TO_FILE_SEOSPIDERCONFIG = '/Users/brunoflaven/Documents/01_work/blog_articles/python-automate-screaming-frog/seo_spider_config_3.seospiderconfig'
                
                # PATH_TO_EXPORT = '/Users/brunoflaven/Documents/01_work/blog_articles/python-automate-screaming-frog/reports/'
                
                # PATH_TO_DESTINATION = '/Users/brunoflaven/Documents/01_work/blog_articles/python-automate-screaming-frog/archives/'
            
                froggy_command = '' + PATH_TO_APP + ' --crawl ' + url + ' --headless --save-crawl --output-folder "' + PATH_TO_EXPORT + \
                    '" --export-tabs "Internal:HTML" --overwrite --config "' + \
                        PATH_TO_FILE_SEOSPIDERCONFIG+'"'
                st.text_area('ScreamingFrog Command Output',
                             f'''{froggy_command}''',
                             height=100,
                             help='Cut and Paste the ScreamingFrog command'
                             )
                
                st.warning('Do not forget to close this window or change the window application after launching the crawl because if you restart Streamlit. The app will reload with the checkbox checked value and then re-run the crawl.')

                if st.checkbox('Launch the crawl', help='It will launch the crawl'):
                    os.system('' + PATH_TO_APP + ' --crawl ' + url + ' --headless --save-crawl --output-folder "' + PATH_TO_EXPORT + '" --export-tabs "Internal:HTML" --overwrite --config "' + PATH_TO_FILE_SEOSPIDERCONFIG+'"')
                    #10 minutes (600 seconds)
                    # 2 minutes (120 seconds)
                    # time.sleep(45)
                    
                    # add some text
                    # st.spinner(text="In progress...")
                    # create progress bar
                    my_bar = st.progress(0)
                    # progress bar continues to complete from 0 to 100
                    for percent_complete in range(100):
                        time.sleep(0.5)
                    my_bar.progress(percent_complete + 1)
                    st.success(f'=== Crawl Finished for :: {name} === ')
                    # for debug in console
                    print("\n=== Crawl Finished for :: " + name + " === ")
                    print("\n")  
                    # show me the balloon and then go away
                    # st.balloons()
                    
                    # get date and format it
                    today = dt.now()
                    getdate = today.strftime('%Y_%m_%d_%H_%M_%S')
                    getdate = getdate+'_'
                    
                    underscore_ending = '_'
                    file_ls = [file for file in os.listdir(PATH_TO_EXPORT)
                               if file.endswith(
                        ".csv") or file.endswith(".seospider") if isfile(join(PATH_TO_EXPORT, file))]
                    if len(file_ls) == 0:
                        st.error(
                            f"The directory {PATH_TO_EXPORT} is empty")
                    else:
                        for file_selected in file_ls:
                        # st.write(file_selected)
                            underscore_ending = '_'
                            new_name = f'{name.lower()}{underscore_ending}{getdate}{file_selected}'
                            # st.code(f'new_name :: {new_name}')
                            # st.write(f'{PATH_TO_EXPORT}{file_selected}'' => 'f'{PATH_TO_EXPORT}{new_name}')
                            
                            # st.info('This is a purely informational message')
                            # st.success('This is a success message!')
                            # st.warning('This is a warning')
                            # st.error('This is an error')
                            # st.balloons()
                            # st.spinner(text="In progress...")



                            # DO THE JOB renaming
                            os.rename(f'''{PATH_TO_EXPORT}{file_selected}''',
                                    f'''{PATH_TO_DESTINATION}{new_name}''')
            
                            st.success(
                                f'=== In {PATH_TO_DESTINATION} === ')
                            st.success(
                                f'=== File name :: {new_name} === ')
                            
                            
            else:
                st.write('There are no websites to crawl, please add some addresses...')
        
        # USELESS BUT REMAININ CODE FOR FURTHER USAGE
        # elif choice == "Rename":

        #     # get date and format it
        #     today = dt.now()
        #     getdate = today.strftime('%Y_%m_%d_%H_%M_%S')
        #     getdate = getdate+'_'

        #     # DEBUG
        #     # st.code(getdate)

        #     st.write("Enter following details for SOURCE and DESTINATION")
        #     source_path = st.text_input("Enter your source file location")
        #     st.caption(PATH_TO_EXPORT)

        #     destination_path = st.text_input("Enter your destination file location")
        #     st.caption(PATH_TO_DESTINATION)

        #     if source_path and destination_path:
        #         st.markdown('** Files list selection**')
        #         file_ls = [file for file in os.listdir(source_path) if file.endswith(
        #             ".csv") or file.endswith(".seospider") if isfile(join(source_path, file))]
        #         if len(file_ls) == 0:
        #             st.write(f"The given path {source_path} is an empty")
        #         else:
        #             file_selected = st.radio(
        #                 'Select your files', file_ls)
        #             st.write(f'command for {file_selected}')
        #             # DO THE JOB
        #             os.rename(f'''{source_path}{file_selected}''',
        #                     f'''{destination_path}{getdate}{file_selected}''')
        #             st.success(f'DONE for {file_selected}')
        #     else:
        #         st.warning("First enter the above details")




        elif choice == "Parse & Insert":
            st.subheader("Parse & Insert")
            st.write("Insert in database sqlite")
            st.write("Enter following details for SOURCE")
            # SCREEN
            destination_path = st.text_input("Enter your destination file location")
            st.caption(PATH_TO_DESTINATION)

            if destination_path:
                st.markdown('** Files list selection**')
                file_ls = [file for file in os.listdir(destination_path) if file.endswith(
                    ".csv") if isfile(join(destination_path, file))]
                if len(file_ls) == 0:
                    st.write(f"The given path {destination_path} is an empty")
                else:
                    file_selected = st.radio(
                        'Select your files', file_ls)
                    launch_insert = st.checkbox('I agree to launch the insert in DB')
                    if launch_insert:
                        st.write(f'command for {file_selected}')
                        # DO THE JOB
                        sign = "_"

                        # calculate length of the word
                        length_file_selected_names = len(file_selected)
                        found_underscore = file_selected.find(sign)

                        name = (file_selected[0:found_underscore])
                        # debug
                        # st.write(f'length_file_selected_names :: {length_file_selected_names}')
                        # st.write(f'found_underscore :: {found_underscore}')
                        # st.write(f'name :: {file_selected[0:found_underscore]}')
                        st.code(f'name :: {file_selected[0:found_underscore]}')


                        filename = (destination_path+file_selected)
                        # parsing
                        # OUTPUT_3 Load a csv
                        df = pd.read_csv(filename)

                        df.columns = df.columns.str.replace('Status Code', 'StatusCode')
                        df.columns = df.columns.str.replace('Word Count', 'WordCount')
                        df.columns = df.columns.str.replace(
                            'Title 1 Length', 'TitleOneLength')
                        df.columns = df.columns.str.replace('Crawl Depth', 'CrawlDepth')

                        # CHANGE
                        df = df.replace(np.nan, '0', regex=True)

                        # st.write(df)
                        avg_word_count = str(round(df['WordCount'].mean()))
                        avg_title_length = str(round(df['TitleOneLength'].mean()))
                        avg_crawl_depth = str(round(df['CrawlDepth'].mean()))
                        avg_h1_count = str(round(df['H1-1 Length'].mean()))
                        avg_text_ratio = str(round(df['Text Ratio'].mean()))
                        avg_metacount = str(round(df['Meta Description 1 Length'].mean()))
                        avg_inlinks = str(round(df['Unique Inlinks'].mean()))
                        avg_outlinks = str(round(df['Unique External Outlinks'].mean()))

                        indexability = str(
                            df[df.Indexability == "Non-Indexable"].count()['Indexability'])

                        status_200 = str(df[df.StatusCode == 200].count()['StatusCode'])
                        status_404 = str(df[df.StatusCode == 404].count()['StatusCode'])
                        status_403 = str(df[df.StatusCode == 403].count()['StatusCode'])
                        status_301 = str(df[df.StatusCode == 301].count()['StatusCode'])

                        addsql = status_200 + "', '" + status_301 + "', '" + status_404 + "', '" + status_403 + "', '" + avg_word_count + "', '" + avg_title_length + "', '" + \
                            avg_metacount + "', '" + avg_crawl_depth + "', '" + avg_h1_count + "', '" + \
                            avg_text_ratio + "', '" + indexability + \
                            "', '" + avg_inlinks + "', '" + avg_outlinks

                        st.code(addsql)

                        # crawlid = Column(Integer, primary_key=True)
                        # websiteid = Column(Integer)
                        # date = Column(String)
                        # websitename = Column(String)
                        # sourcefile = Column(String)
                        # status_200 = Column(Integer)
                        # status_301 = Column(Integer)
                        # status_404 = Column(Integer)
                        # status_403 = Column(Integer)
                        # avg_wordcount = Column(Integer)
                        # avg_titlecount = Column(Integer)
                        # avg_metacount = Column(Integer)
                        # avg_crawl_depth = Column(Integer)
                        # avg_h1count = Column(Integer)
                        # avg_textratio = Column(Integer)
                        # indexability = Column(Integer)
                        # avg_inlinks  = Column(Integer)
                        # avg_outlinks = Column(Integer)

                        # get date and format it
                        today = dt.now()
                        # getdate = today.strftime('%Y_%m_%d_%H_%M_%S')
                        # getdate = today.strftime('%y-%M-%d %H:%m:%s')
                        getdate = today.strftime('%Y-%m-%d %H:%M:%s')

                        entry = Crawls(
                            date=getdate,
                            websitename=name,
                            sourcefile=file_selected,
                            status_200=status_200,
                            status_301=status_301,
                            status_404=status_404,
                            status_403=status_403,
                            avg_wordcount=avg_word_count,
                            avg_titlecount=avg_title_length,
                            avg_metacount=avg_metacount,
                            avg_crawl_depth=avg_crawl_depth,
                            avg_h1count=avg_h1_count,
                            avg_textratio=avg_text_ratio,
                            indexability=indexability,
                            avg_inlinks=avg_inlinks,
                            avg_outlinks=avg_outlinks
                        )
                        # st.code(entry)
                        se.add(entry)
                        se.commit()
                        se.close()
                        st.success('Crawl added to database')

            else:
                st.warning("First enter the above details")
            
            
            
        elif choice == "Analyze":
            
            # use in analyse
            connection = engine.raw_connection()

 
            st.subheader("Analyze")
            # SCREEN
            all_crawls = pd.read_sql_query('SELECT * FROM crawls', connection)
            all_websites = pd.read_sql_query('SELECT * FROM websites;', connection)


            sql_query_websites_details = """SELECT websiteid, name, url from websites order by websiteid"""
            all_websites_details = pd.read_sql_query(
                sql_query_websites_details, connection)

            sql_query_crawls_details = """SELECT * FROM crawls order by crawlid"""
            all_crawls_details = pd.read_sql_query(
                sql_query_crawls_details, connection)

            st.write("Total number of Crawls: ", all_crawls.shape[0])
            st.write("Total number of Websites: ", all_websites.shape[0])

            if st.checkbox("View data for all websites details"):
                st.markdown('**It shows all websites details:**')
                st.write(all_websites_details)


            if st.checkbox("View data for all crawls details"):
                st.markdown('**It shows all crawls details:**')
                st.write(all_crawls_details)


            # QUERIES
            all_avg_h1count = pd.read_sql_query(
                'SELECT avg_h1count, websitename, date FROM crawls;', connection)
            all_avg_titlecount = pd.read_sql_query(
                'SELECT avg_titlecount, websitename, date FROM crawls;', connection)


            def plot_value_counts_over_time(df, col, color):
                data = df[col].value_counts()
                data = pd.DataFrame(data)
                fig, ax = plt.subplots(figsize=(15, 8))
                ax.bar(data.index.values,
                    data[col],
                    color=color)

                fsize = 16
                plt.xlabel("Time", fontsize=fsize)
                plt.ylabel("Count of avg tag h1 length", fontsize=fsize)
                plt.title("avg h1 count over Time", fontsize=fsize)

                st.write(fig)



            def plot_bar_over_variable(df, col, parameter, color):
                data = df[col].value_counts()
                # st.write(data)
                data = pd.DataFrame(data).head(20)
                # st.write(data)

                fig, ax = plt.subplots(figsize=(15, 8))
                ax.bar(data.index.values,
                    data[col],
                    color=color)

                fsize = 16
                plt.xlabel("{}".format(col), fontsize=fsize)
                plt.ylabel("Count of {}".format(parameter), fontsize=fsize)
                plt.title("{} Counts by {}".format(
                    parameter, col), fontsize=fsize)
                st.write(fig)

            def plot_pie_over_variable(df, col, websitenames):
                data = df[col].value_counts()
                data = pd.DataFrame(data)
                fig, ax = plt.subplots(figsize=(4, 4))
                ax.pie(data[col], autopct='%1.1f%%',
                       shadow=False, startangle=90)
                fsize = 5
                plt.xlabel("{}".format(col), fontsize=fsize)
                plt.title("{} by {}".format(websitenames, col), fontsize=fsize)
                st.write(fig)



            plot_value_counts_over_time(
                    all_avg_h1count, 'websitename', 'green')

            plot_bar_over_variable(
                all_crawls, 'avg_titlecount', 'avg_titlecount', 'blue')

            websitenames = all_crawls["websitename"]
            plot_pie_over_variable(all_crawls, 'avg_inlinks', websitenames)

if __name__ == '__main__':
    main()
    detectVersion()
