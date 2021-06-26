#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/


[file]
python sqlite_try_4_insert_table.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://www.tutorialspoint.com/python_sqlite/
https://www.sqlitetutorial.net/sqlite-python/insert/


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
    except Error as e:
        print(e)

    return conn


# --- new insert
# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Colombia', '.co', 'CO', 'Bogota', 57)

def create_country(conn, country):
    """
    Create a new country into the countries table
    :param conn:
    :param country:
    :return: country id
    """
    sql = ''' INSERT INTO countries(id, name, tld, cca2, capital, callingCode)
              VALUES(NULL,?,?,?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, country)
    conn.commit()
    return cur.lastrowid


def main():
    database = r"data/source.db"

    # create a database connection
    conn = create_connection(database)
    with conn:

        # create a new country
        # country = ('Colombia', '.co', 'CO', 'Bogota', 57)
        # country = ('Afghanistan', '.af', 'AF', 'Kabul', 93)
        # country = ('Italy', '.it', 'IT', 'Rome', 39)
        # country = ('France', '.fr', 'FR', 'Paris', 33)
        # country = ('Malaysia', '.my', 'MY', 'Kuala Lumpur', 60)
        # country = ('Mauritania', '.mr', 'MR', 'Nouakchott', 222)
        # country = ('Tunisia', '.tn', 'TN', 'Tunis', 216)
        # country = ('Tanzania', '.tz', 'TZ', 'Dodoma', 255)
        # country = ('Seychelles', '.sc', 'SC', 'Victoria', 248)
        # country = ('Norway', '.no', 'NO', 'Oslo', 47)
        # country = ('Nepal', '.np', 'NP', 'Kathmandu', 977)
        country = ('Angola','.ag','AG','Luanda',789)

        country_id = create_country(conn, country)
        print("SUCCESS :: new insertion executed with success in countries table.")

# INSERT INTO countries VALUES('tata','.ta','TA','Tata City',123);
if __name__ == '__main__':
    main()
    
    
# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Afghanistan', '.af', 'AF', 'Kabul', 93)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Italy', '.it', 'IT', 'Rome', 39)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'France', '.fr', 'FR', 'Paris', 33)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Malaysia', '.my', 'MY', 'Kuala Lumpur', 60)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Mauritania', '.mr', 'MR', 'Nouakchott', 222)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Tunisia', '.tn', 'TN', 'Tunis', 216)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Tanzania', '.tz', 'TZ', 'Dodoma', 255)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Seychelles', '.sc', 'SC', 'Victoria', 248)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Norway', '.no', 'NO', 'Oslo', 47)

# INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES(NULL, 'Nepal', '.np', 'NP', 'Kathmandu', 977)

