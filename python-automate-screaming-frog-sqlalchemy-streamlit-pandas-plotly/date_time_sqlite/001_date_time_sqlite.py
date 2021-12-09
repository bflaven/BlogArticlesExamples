#!/usr/bin/python
# -*- coding: utf-8 -*-
"""
[env]
conda create --name crawl_screamingfrog python=3.9.7
conda info --envs
source activate crawl_screamingfrog
conda deactivate

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/python-automate-screaming-frog/date_time_sqlite/


[file]
streamlit run 001_date_time_sqlite.py

# more on infos and apps on
https://fr.acervolima.com/python-sqlite-travailler-avec-la-date-et-la-date-et-l-heure/



"""

# import datetime as dt
from datetime import date
from datetime import datetime as dt
import pandas as pd
import sqlite3
import sqlalchemy
from sqlalchemy import create_engine, Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.orm.properties import ColumnProperty
from sqlalchemy.orm.query import Query
from sqlalchemy import MetaData

import logging
import streamlit as st

URI_SQLITE_DB = "data/StudentAssignment_1.sqlite3"


st.code("version sqlalchemy :: " + sqlalchemy.__version__)

Base = declarative_base()

class Assignment(Base):
    __tablename__ = "assignment"
    StudentId = Column(Integer, primary_key=True)
    StudentName = Column(String, nullable=False)
    StudentAge = Column(Integer, nullable=False)
    SubmissionDate = Column(Integer, nullable=False, default=dt.now())
    # created_at = Column(Timestamp, server_default=current_timestamp())
    # release_date = Column(Date)

@st.cache(allow_output_mutation=True)
def get_session(path: str):
    e = create_engine(f'sqlite:///{path}')
    Session = sessionmaker(bind=e)
    session = Session()
    return session


def create_test_db(session: Session):
    """Should create a db (URI_SQLITE_DB) file with "assignment" table
    Maybe should delete a db (URI_SQLITE_DB) if rerunning the script
    """
    Base.metadata.create_all(session.bind)
    session.add(Assignment(StudentName="Bob", StudentAge=42))
    session.add(Assignment(StudentName="Robert", StudentAge=24))
    session.add(Assignment(StudentName="Prisca", StudentAge=44))
    session.add(Assignment(StudentName="John", StudentAge=32))
    session.add(Assignment(StudentName="Guido", StudentAge=28))
    session.add(Assignment(StudentName="Alvaro", StudentAge=78))
    session.commit()


def check_sqlite_table(path: str):
    """Use sqlite3 library to read a db (URI_SQLITE_DB) content. 
    Just to check table creation went well.
    """
    e = sqlite3.connect(path)
    sql = """
    SELECT * FROM assignment;
    """
    df = pd.read_sql(sql, con=e)
    st.dataframe(df)


@st.cache(hash_funcs={Session: id})
def run_orm_query(q: Query, session: Session):
    df = pd.read_sql(q.statement, session.bind)
    st.dataframe(df)


def serialize_orm_query(q: Query):
    """Build SQL statement with inlined parameters
    https://stackoverflow.com/questions/5631078/sqlalchemy-print-the-actual-query
    """
    return q.statement.compile(compile_kwargs={"literal_binds": True}).string
    
    
@st.cache(
    hash_funcs={
        Session: id,
        Query: serialize_orm_query,  # if we get a query, stringify it with inbound params
        # StrSQLCompiler: lambda _: None,  # we don't really care about the compiler
    },
    suppress_st_warning=True,
)
def run_orm_query(q: Query, session: Session):
    st.warning("CACHE MISS")
    return pd.read_sql(q.statement, session.bind)


session: Session = get_session("data/StudentAssignment_1.sqlite3")
if st.button("Create test table"):
    create_test_db(session)
    st.success("Table \"assignment\" is successfully created ")
if st.checkbox("Show sqlite test table using raw sqlite3"):
    check_sqlite_table("data/StudentAssignment_1.sqlite3")
if st.checkbox("Show sqlite test table using ORM query"):
    param = st.text_input("Input student's name to look for :")
    q: Query = session.query(Assignment.StudentId, Assignment.StudentName, Assignment.StudentAge, Assignment.SubmissionDate).filter(
        Assignment.StudentName == param)
    st.write(serialize_orm_query(q))
    df = run_orm_query(q, session)
    st.dataframe(df)

    
    
    
