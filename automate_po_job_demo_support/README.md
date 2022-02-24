# automate_po_job_demo_support


**A post on how-to work with efficiency on customer support with the help of Streamlit, Sqlalchemy and keyBert. To answer as quick as possible to your consumer feedback!**

**Objective: My first concern was "How can I optimize the support that I currently made as a PO?". I build an application to store a mailing support templates' system.**

**Two preliminary remarks that precise application's scope and purpose:**

**1.  First:** the application does not to send any email because the added value for this POC is in the ability to connect the 2 projects not to handle security, network, environment, deployment issues. Feel free to modify it and do this evolution if necessary. Security, network, environment, deployment issues are complexities far beyond this POC.

**2.  Second:** again for security reason, I cannot release the real templates that I have gathered for my own usage. Instead I have populated generic template, feel free to modify and adapt to our own use.


**The project leverages on these libraries.**

- [Streamlit: https://streamlit.io/](https://streamlit.io/)
- [SQLAlchemy: https://www.sqlalchemy.org/](https://www.sqlalchemy.org/)




## 1. Create an environment with Conda
**I am using Anaconda to manage the python environment**

Check the official website at [Anaconda: https://www.anaconda.com/](https://www.anaconda.com/)




```bash
# Conda Environment
conda create --name automate_po_job python=3.9.7
conda info --envs
source activate automate_po_job
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

```


## 2. Install the required modules in Python

**You can either install manually all the modules or use the requirements files `automate_po_job_streamlit_sqlalchemy_1.txt` and `bert_flair_1.txt` to install all the modules.**

```bash

# install
pip install streamlit
pip install watchdog
pip install sqlalchemy



# to export requirements
pip freeze > automate_po_job_streamlit_sqlalchemy_1.txt


# to install
pip install -r automate_po_job_streamlit_sqlalchemy_1.txt


# update conda if needed by running
conda update -n base -c defaults conda



```


## 3. details for each directory
**Here is a quick presentation for each directory inside the project. Some directories are just POC to understand for instance how sqlalchemy works, you have always a set of commands as reminder because I keep forgetting how-to make things, especially working with database.**



### 3.1 Details for `001_sql_files`
The idea is to give the way you can create a dump for each slqlite database used in the project. Check the official website at [SQLite](https://sqlite.org/index.html)






**How to make dump with SQLite**
```bash

# go to the directory where you want the dumps
cd /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/001_sql_files


# dump_1 :: km_user_support_2.sql

# connect to sqlite
sqlite3

# connect to a specific DB
.open /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/sqlalchemy_data/km_user_support_2.sqlite3


# make a dump
.output /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/001_sql_files/km_user_support_2.sql
.dump


# dump_2 ::km_user_support_pythonspot_1.sql

# connect to sqlite
sqlite3

# connect to a specific DB
.open /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/sqlalchemy_data/km_user_support_pythonspot_1.sqlite3

# make a dump
.output /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/001_sql_files/km_user_support_pythonspot_1.sql
.dump


# dump_3 :: km_user_support_pythonspot_2.sql

# connect to sqlite
sqlite3

# connect to a specific DB
.open /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/sqlalchemy_data/km_user_support_pythonspot_2.sqlite3

# make a dump
.output /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/001_sql_files/km_user_support_pythonspot_2.sql
.dump


# dump_4 ::pythonspot_student_1.sql

# connect to sqlite
sqlite3

# connect to a specific DB
.open /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/sqlalchemy_data/pythonspot_student_1.sqlite3

# make a dump
.output /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/001_sql_files/pythonspot_student_1.sql
.dump

```


**Quick SQLite's database description for the Streamlit application**

```sql

--dbName:  km_user_support
--tableName: user_support_mail_templates

--fieldsTableName:
--### id
--### filename
--### recipients
--### mail_object
--### mail_body
--### mail_search_tags

-- SQLite model command
--# Create empty tables
db.execute("""
CREATE TABLE IF NOT EXISTS "articles" (
"id" INTEGER,
"title" TEXT UNIQUE,
"publication" TEXT,
PRIMARY KEY("id" AUTOINCREMENT))
""")
```

**Other SQLite's commands to create table in database**
```sql
--SQLite command_1
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE user_support_mail_templates (
    id_filename INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    filename VARCHAR,
    recipients VARCHAR,
    mail_object TEXT UNIQUE,
    mail_body TEXT,
    mail_search_tags VARCHAR
);
COMMIT;

--SQLite command_2
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE "user_support_mail_templates" (
    "id_filename" INTEGER NOT NULL,
    "filename" VARCHAR,
    "recipients" VARCHAR,
    "mail_object" TEXT UNIQUE,
    "mail_body" TEXT,
    "mail_search_tags" VARCHAR, 
    PRIMARY KEY("id_filename", AUTOINCREMENT)
);
COMMIT;
```

**Set of useful SQLite commands to play with the SQLite databases**

```bash
# connect to sqlite
sqlite3

# connect to a specific DB
.open /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/sqlalchemy_data/km_user_support_2.sqlite3

.open /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/sqlalchemy_data/km_user_support_pythonspot_1.sqlite3

.open /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/sqlalchemy_data/km_user_support_pythonspot_2.sqlite3


.open /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/sqlalchemy_data/pythonspot_student_1.sqlite3

# to show the tables in SQLite
.tables

# to show about the db in SQLite
.dbinfo

# to show the tables with a table named [table_name] in SQLite
.schema user_support_mail_templates

# few queries in SQLite
SELECT * FROM user_support_mail_templates;
SELECT COUNT(*) FROM user_support_mail_templates;

SELECT * FROM student;
SELECT COUNT(*) FROM student;

SELECT * FROM templates;
SELECT COUNT(*) FROM templates;

# Now, table is truncated completely and nothing will be the output from SELECT statement.
DELETE FROM user_support_mail_templates;
VACUUM;

DELETE FROM student;
VACUUM;

DELETE FROM templates;
VACUUM;

# make a dump
.output /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/001_sql_files/good_km_user_support_2.sql
.dump

# read and import a dump
.read /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/001_sql_files/km_user_support_2.sql

# drop table
DROP TABLE user_support_mail_templates;

# exit
.exit

```
    
### 3.2 Details for `002_pythonspot`
This directory presents a POC on how-to use SQLite with ORM SQLAlchemy. It is based on a post "ORM with SqlAlchemy" ["ORM with SqlAlchemy"](https://pythonspot.com/orm-with-sqlalchemy/)

For more information, you can also check the official website: [SQLAlchemy: - https://www.sqlalchemy.org/](https://www.sqlalchemy.org/)


```bash
cd  /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/002_pythonspot/

### create database and insert data (case_1)
pythonspot_dummy.py

### query the database
pythonspot_query_data.py

### directory containing the values for Streamlit config and path to the database
config_values


### wrapper to query the database
schema_pythonspot_tabledef.py
```



### 3.3 Details for `003_automate_po_job`

This directory presents a POC on how-to use SQLite with ORM SQLAlchemy for the Streamlit application. For more information, you can also check the official website: [SQLAlchemy: - https://www.sqlalchemy.org/](https://www.sqlalchemy.org/)


```bash
cd /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/003_automate_po_job/

### create database and insert data (case_1)
automate_po_job_dummy_1.py

### create database and insert data (case_2)
automate_po_job_dummy_2.py

### create database and insert data (case_3)
automate_po_job_dummy_3.py

### create database and insert data (case_4)
automate_po_job_dummy_4.py

### create database and insert data (case_5)
automate_po_job_dummy_5.py

### create database and insert data (case_6)
automate_po_job_dummy_6.py

### db schema in sql format
automate_po_job_streamlit_sqlalchemy_example_database_1.sql

### directory containing the values for Streamlit config and path to the database
config_values

### wrapper to query the database
db_scheme_support_mail.py 
```




### 3.4 Details for `004_automate_po_job_streamlit_sqlalchemy_example_database`

This directory presents a POC on how-to use Streamlit, SQLite with ORM SQLAlchemy for the mailling template system as a Streamlit application. 

For more information, you can also check the official websites: 
- [SQLAlchemy: - https://www.sqlalchemy.org/](https://www.sqlalchemy.org/)
- [Streamlit: https://streamlit.io/](https://streamlit.io/)

```bash
# go to the directory
cd /Users/brunoflaven/Documents/01_work/blog_articles/automate_po_job_demo_support/004_automate_po_job_streamlit_sqlalchemy_example_database/

# SQLALCHEMY ONLY
### create database
001_automate_po_job_streamlit_sqlalchemy_example_database.py

### create database and insert data (case_1)
002_automate_po_job_streamlit_sqlalchemy_example_database.py

### create database and insert data (case_2)
003_automate_po_job_streamlit_sqlalchemy_example_database.py

### create database and insert data (case_3)
004_automate_po_job_streamlit_sqlalchemy_example_database.py

### create database and insert data (case_4)
009_automate_po_job_streamlit_sqlalchemy_example_database.py

# STREAMLIT and SQLALCHEMY

010_automate_po_job_streamlit_sqlalchemy_example_database.py
011_automate_po_job_streamlit_sqlalchemy_example_database.py

### most adavanced usage: "Send", "Create", "Update", "Search"
012_automate_po_job_streamlit_sqlalchemy_example_database.py


### directory containing the values for streamlit config and path to the database
config_values

### wrapper to query the database
db_scheme_support_mail.py 
```


## 4. Directory tree for `automate_po_job_demo_support`
**The project's structure with some indications for each file in comment.**



```bash
.
├── 001_sql_files # some sqlite3 db schema
│   ├── km_user_support_2.sql
│   ├── km_user_support_pythonspot_1.sql
│   ├── km_user_support_pythonspot_2.sql
│   └── pythonspot_student_1.sql
├── 001_streamlit_clear_value_text_input.py # another file
├── 002_pythonspot # an example with sqlalchemy 
│   ├── config_values
│   │   └── values_conf.py
│   ├── pythonspot_dummy.py
│   ├── pythonspot_query_data.py
│   └── schema_pythonspot_tabledef.py
├── 003_automate_po_job # another example with sqlalchemy 
│   ├── automate_po_job_dummy_1.py
│   ├── automate_po_job_dummy_2.py
│   ├── automate_po_job_dummy_3.py
│   ├── automate_po_job_dummy_4.py
│   ├── automate_po_job_dummy_5.py
│   ├── automate_po_job_dummy_6.py
│   ├── automate_po_job_streamlit_sqlalchemy_example_database_1.sql
│   ├── config_values
│   │   └── values_conf.py
│   └── db_scheme_support_mail.py
├── 004_automate_po_job_streamlit_sqlalchemy_example_database # the app with sqlalchemy and streamlit
│   ├── 001_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 002_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 003_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 004_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 009_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 010_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 011_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 012_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── config_values
│   │   └── values_conf.py
│   └── db_scheme_support_mail.py
├── README.md
├── automate_po_job_streamlit_sqlalchemy_1.txt # the requirements
└── sqlalchemy_data # the db
    ├── km_user_support_2.sqlite3
    ├── km_user_support_pythonspot_1.sqlite3
    ├── km_user_support_pythonspot_2.sqlite3
    └── pythonspot_student_1.sqlite3
```  
