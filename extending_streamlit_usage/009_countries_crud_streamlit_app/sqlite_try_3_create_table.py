#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/


[file]
python sqlite_try_3_create_table.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://www.tutorialspoint.com/python_sqlite/

"""

import sqlite3
from sqlite3 import Error


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return conn


def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)


def main():
    database = r"data/source.db"

    


    sql_create_countries_table = """CREATE TABLE IF NOT EXISTS countries (
                                    id INTEGER PRIMARY KEY,
                                    name TEXT NOT NULL,
                                    tld TEXT NOT NULL UNIQUE,
                                    cca2 TEXT NOT NULL UNIQUE,
                                    capital TEXT NOT NULL UNIQUE,
                                    callingCode INTEGER,
                                    FOREIGN KEY (id) REFERENCES countries (id)
                                );"""

    # create a database connection
    conn = create_connection(database)

    # create tables
    if conn is not None:
        # create countries table
        create_table(conn, sql_create_countries_table)
        print("SUCCESS :: sql_create_countries_table has been been executed with success.")

    else:
        print("ERROR :: cannot create the database connection.")


if __name__ == '__main__':
    main()

