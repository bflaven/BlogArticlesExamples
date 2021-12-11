#!/usr/bin/python
# -*- coding: utf-8 -*-
"""
[env]
conda create --name automate_screaming_frog python=3.9.7
conda info --envs
source activate automate_screaming_frog
conda deactivate

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python-automate-screaming-frog-sqlalchemy-streamlit-pandas-plotly/sqlalchemy_guide_database/

[file]
python sqlalchemy_guide_database.py
    
# more on infos and apps on
https://j2logo.com/python/sqlalchemy-tutorial-de-python-sqlalchemy-guia-de-inicio/

"""


import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Ingredientes(Base):

    __tablename__ = "ingredientes"

    id = Column(Integer, primary_key=True)
    
    # name
    nombre = Column(String, nullable=False)

    # video
    video = Column(String, nullable=False)
    
    
    # price
    precio = Column(Float)

# I use .sqlite3 as extension because i can edit through Visual Code Studio editor
if __name__ == "__main__":
    # engine = create_engine( 'sqlite:///sqlalchemy_data/streamlit_sqlalchemy_guia_database_example.sqlite3')
   
    engine = create_engine( 'sqlite:///sqlalchemy_data/streamlit_sqlalchemy_guia_database_example_new.sqlite3')
    
    # this line create the empty tables
    Base.metadata.create_all(engine)
    
    


