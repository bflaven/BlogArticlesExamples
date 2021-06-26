#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/


[file]
python sqlite_try_5_update_table.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://www.tutorialspoint.com/python_sqlite/
https://www.sqlitetutorial.net/sqlite-python/update/


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


def update_country(conn, task):
    """
    update name, tld, cca2, capital, callingCode
    :param conn:
    :param country:
    :return: country id
    """
    # id, name, tld, cca2, capital, callingCode
    sql = ''' UPDATE countries
              SET name = ? ,
                  tld = ? ,
                  cca2 = ?,
                  capital = ?,
                  callingCode = ?
              WHERE id = ?'''
    cur = conn.cursor()
    cur.execute(sql, task)
    conn.commit()


def main():
    
    database = r"data/source.db"

    # create a database connection
    conn = create_connection(database)
    with conn:
        update_country(conn, ('Nepal', '.np', 'NP', 'Kathmandu', 977, 9))
        print("SUCCESS :: update executed with success in countries table.")


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
