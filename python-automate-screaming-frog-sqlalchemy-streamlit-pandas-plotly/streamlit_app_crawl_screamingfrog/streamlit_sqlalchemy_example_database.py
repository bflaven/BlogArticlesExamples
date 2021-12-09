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
python streamlit_sqlalchemy_example_database.py
    
# more on infos and apps on
https://discuss.streamlit.io/t/how-to-use-st-cache-with-sqlalchemy-orm-objects/3329/5

https://www.sqlalchemy.org/


https://www.tutorialspoint.com/sqlalchemy/index.htm
https://www.youtube.com/watch?v=lIHGGcnCmFA

https://towardsdatascience.com/sqlalchemy-python-tutorial-79a577141a91

https://github.com/digipodium/streamlit_sqlalchemy_example

CREATE TABLE websites(
    websiteid INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(255),
    url varchar(255)
);
CREATE TABLE crawls(
    crawlid INTEGER PRIMARY KEY AUTOINCREMENT,
    websiteid int(255),
    websitename varchar(255)
    sourcefile varchar(255)
    date varchar(255),
    status_200 int(255),
    status_301 int(255),
    status_404 int(255),
    status_403 int(255),
    avg_wordcount int(255),
    avg_titlecount int(255),
    avg_metacount int(255),
    avg_crawl_depth int(255),
    avg_h1count int(255),
    avg_textratio int(255),
    indexability int(255),
    avg_inlinks int(255),
    avg_outlinks int(255)
);


"""


import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Websites(Base):

    __tablename__ = "websites"

    websiteid = Column(Integer, primary_key=True)
    name = Column(String)
    url = Column(String)
    
 
class Crawls(Base):

    __tablename__ = "crawls"

    crawlid = Column(Integer, primary_key=True)
    websitename = Column(String)
    sourcefile = Column(String)
    date = Column(String)
    status_200 = Column(Integer)
    status_301 = Column(Integer)
    status_404 = Column(Integer)
    status_403 = Column(Integer)
    avg_wordcount = Column(Integer)
    avg_titlecount = Column(Integer)
    avg_metacount = Column(Integer)
    avg_crawl_depth = Column(Integer)
    avg_h1count = Column(Integer)
    avg_textratio = Column(Integer)
    indexability = Column(Integer)
    avg_inlinks  = Column(Integer)
    avg_outlinks = Column(Integer)
    
    
 
if __name__ == "__main__":
    engine = create_engine(
        'sqlite:///data/screamingfrog_websites_crawls_all_new_1.sqlite3')
    Base.metadata.create_all(engine)

# DEBUG
# print('DB DONE')
