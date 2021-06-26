#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/extending_streamlit_usage/

[file]
python sqlite_try_7_delete_table.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://www.tutorialspoint.com/python_sqlite/
https://www.sqlitetutorial.net/sqlite-python/delete/



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


def delete_task(conn, id):
    """
    Delete a country by country id
    :param conn:  Connection to the SQLite database
    :param id: id of country
    :return:
    """
    sql = 'DELETE FROM countries WHERE id=?'
    cur = conn.cursor()
    cur.execute(sql, (id,))
    conn.commit()


def delete_all_tasks(conn):
    """
    Delete all rows in the tasks table
    :param conn: Connection to the SQLite database
    :return:
    """
    sql = 'DELETE FROM countries'
    cur = conn.cursor()
    cur.execute(sql)
    conn.commit()

def main():
    
    database = r"data/source.db"

    # create a database connection
    conn = create_connection(database)
    with conn:
        
        # delete_task(conn, 2);
        # print("SUCCESS :: delete executed with success in countries table.")
        
        # CAUTION
        # delete_all_tasks(conn);        
        # print("SUCCESS :: empty table executed with success in countries table.")


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


