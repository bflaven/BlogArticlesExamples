#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/


[file]
python sqlite_try_6_select_table.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://www.tutorialspoint.com/python_sqlite/
https://www.sqlitetutorial.net/sqlite-python/sqlite-python-select/



"""

import sqlite3
from sqlite3 import Error


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by the db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)

    return conn


def select_all_countries(conn):
    """
    Query all rows in the countries table
    :param conn: the Connection object
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT * FROM countries")

    rows = cur.fetchall()

    for row in rows:
        print(row)


def select_country_by_callingcode(conn, callingcode):
    """
    Query countries by callingcode
    :param conn: the Connection object
    :param callingcode:
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT * FROM countries WHERE callingCode=?", (callingcode,))

    rows = cur.fetchall()

    for row in rows:
        print(row)


def main():
    # database = r"/Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/009_countries_crud_streamlit_app/countries/source.db"
    database = r"data/source.db"

    # create a database connection
    conn = create_connection(database)
    with conn:
        print("\n --- 1. Query country by callingcode:")
        # select_country_by_callingcode(conn, 93)
        select_country_by_callingcode(conn, 977)
        
        print("\n --- 2. Query all countries")
        select_all_countries(conn)


if __name__ == '__main__':
    main()

# id, name, tld, cca2, capital, callingCode
# 1|Afghanistan|.af|AF|Kabul|93
# 2|Italy|.it|IT|Rome|39
# 3|France|.fr|FR|Paris|33
# 4|Malaysia|.my|MY|Kuala Lumpur|60
# 5|Mauritania|.mr|MR|Nouakchott|222
# 6|Tunisia|.tn|TN|Tunis|216
# 7|Tanzania|.tz|TZ|Dodoma|255
# 8|Seychelles|.sc|SC|Victoria|248
# 9|Norway|.no|NO|Oslo|47
# 10|Nepal|.np|NP|Kathmandu|977
