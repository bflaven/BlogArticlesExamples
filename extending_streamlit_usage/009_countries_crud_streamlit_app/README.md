## 009_countries_crud_streamlit_app
**Build a Countries Crud Streamlit App**

### OBJECTIVE
It is to create a CRUD countries manager with Streamlit so this usecase give the main concepts to create a CRUD web application for any kind of content. It is a POC that is a proof concept that Streamlit can be used far beyond only ML or Data science application. You can make the best of it!

```bash
cd /your-path/countries/
```



### HOW-TO
The idea is to create the database in SQLite, inspired from MySQL

- file :: source.db
- table :: countries

### HOW-TO SQLITE3 IN MAC CONSOLE
**All command are suposed to be in the console so you should have at the beginning always sqlite> to prove that you are in sqlite3**

- to get into SQLITE3, just type the command sqlite3 in the console
```bash
sqlite3
```
- to open a db in the console with in SQLite
```bash
.open /your-path/source.db
```
- to create a table in SQLite
```sql
CREATE TABLE countries (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
tld TEXT NOT NULL UNIQUE,
cca2 TEXT NOT NULL UNIQUE,
capital TEXT NOT NULL UNIQUE,
callingCode INTEGER
);
CREATE INDEX countrie_id ON countries (id);
```
- to create a table in python for SQLite
```python
sql_create_countries_table = """CREATE TABLE IF NOT EXISTS countries (
                                    id INTEGER PRIMARY KEY AUTOINCREMENT,
									name TEXT NOT NULL,
									tld TEXT NOT NULL UNIQUE,
									cca2 TEXT NOT NULL UNIQUE,
									capital TEXT NOT NULL UNIQUE,
									callingCode INTEGER,
                                    FOREIGN KEY (countrie_id) REFERENCES countries (id)
                                );"""
```

- to show the tables in SQLite
```bash
.tables
```

- to show about the db in SQLite
```bash
.dbinfo
```

- to show the tables with a table named [table_name] in SQLite
```bash
# .schema [table_name]
.schema countries
```

- to drop/delete the table with a table named [table_name] in SQLite
```bash
# DROP TABLE [table_name];
DROP TABLE  countries;
```
- to empty the content from table [table_name] in SQLite
```bash
# DELETE FROM table_name;
DELETE FROM countries;
VACUUM;
```

- to show the tables with a table named [table_name] in SQLite
```bash
SELECT * FROM countries;
SELECT COUNT(*) FROM countries;
```

- to import a dump .sql in SQLite
```bash
.read source_dump_5.sql
```

- to insert, update in SQLite

```sql
--- INSERT INTO table (column1,column2 ,..) VALUES( value1,	value2 ,...);
--- UPDATE table SET column_1 = new_value_1, column_2 = new_value_2 WHERE search_condition ORDER column_or_expression LIMIT row_count OFFSET offset;
--- DELETE FROM table WHERE search_condition;

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Afghanistan','.af','AF','Kabul',93);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Italy','.it','IT','Rome',39);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'France','.fr','FR','Rome',33);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Malaysia','.my','MY','Kuala Lumpur',60);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Mauritania','.mr','MR','Nouakchott',222);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Tunisia','.tn','TN','Tunis',216);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Tanzania','.tz','TZ','Dodoma',255);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Seychelles','.sc','SC','Victoria',248);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Norway','.no','NO','Oslo',47);

INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Nepal','.np','NP','Kathmandu',977);

--- new insert
INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Colombia','.co','CO','Bogotá',57);

--- new insert
INSERT INTO countries (id,name,tld,cca2,capital,callingCode) VALUES (NULL,'Peru','.pe','PE','Lima',604);
```

Source : [Country ISO List List of Countries with Calling Code & ISO](https://www.textcompare.org/country/)


**For SQLite to to dump a db**

```bash
.output /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/009_countries_crud_streamlit_app/countries/source_dump_5.sql
.dump
```




**For SQLite to get some help**
```bash
.help

# .archive ...             Manage SQL archives
# .auth ON|OFF             Show authorizer callbacks
# .backup ?DB? FILE        Backup DB (default "main") to FILE
# .bail on|off             Stop after hitting an error.  Default OFF
# .binary on|off           Turn binary output on or off.  Default OFF
# .cd DIRECTORY            Change the working directory to DIRECTORY
# .changes on|off          Show number of rows changed by SQL
# .check GLOB              Fail if output since .testcase does not match
# .clone NEWDB             Clone data into NEWDB from the existing database
# .databases               List names and files of attached databases
# .dbconfig ?op? ?val?     List or change sqlite3_db_config() options
# .dbinfo ?DB?             Show status information about the database
# .dump ?TABLE?            Render database content as SQL
# .echo on|off             Turn command echo on or off
# .eqp on|off|full|...     Enable or disable automatic EXPLAIN QUERY PLAN
# .excel                   Display the output of next command in spreadsheet
# .exit ?CODE?             Exit this program with return-code CODE
# .expert                  EXPERIMENTAL. Suggest indexes for queries
# .explain ?on|off|auto?   Change the EXPLAIN formatting mode.  Default: auto
# .filectrl CMD ...        Run various sqlite3_file_control() operations
# .fullschema ?--indent?   Show schema and the content of sqlite_stat tables
# .headers on|off          Turn display of headers on or off
# .help ?-all? ?PATTERN?   Show help text for PATTERN
# .import FILE TABLE       Import data from FILE into TABLE
# .imposter INDEX TABLE    Create imposter table TABLE on index INDEX
# .indexes ?TABLE?         Show names of indexes
# .limit ?LIMIT? ?VAL?     Display or change the value of an SQLITE_LIMIT
# .lint OPTIONS            Report potential schema issues.
# .load FILE ?ENTRY?       Load an extension library
# .log FILE|off            Turn logging on or off.  FILE can be stderr/stdout
# .mode MODE ?TABLE?       Set output mode
# .nullvalue STRING        Use STRING in place of NULL values
# .once ?OPTIONS? ?FILE?   Output for the next SQL command only to FILE
# .open ?OPTIONS? ?FILE?   Close existing database and reopen FILE
# .output ?FILE?           Send output to FILE or stdout if FILE is omitted
# .parameter CMD ...       Manage SQL parameter bindings
# .print STRING...         Print literal STRING
# .progress N              Invoke progress handler after every N opcodes
# .prompt MAIN CONTINUE    Replace the standard prompts
# .quit                    Exit this program
# .read FILE               Read input from FILE
# .recover                 Recover as much data as possible from corrupt db.
# .restore ?DB? FILE       Restore content of DB (default "main") from FILE
# .save FILE               Write in-memory database into FILE
# .scanstats on|off        Turn sqlite3_stmt_scanstatus() metrics on or off
# .schema ?PATTERN?        Show the CREATE statements matching PATTERN
# .selftest ?OPTIONS?      Run tests defined in the SELFTEST table
# .separator COL ?ROW?     Change the column and row separators
# .sha3sum ...             Compute a SHA3 hash of database content
# .shell CMD ARGS...       Run CMD ARGS... in a system shell
# .show                    Show the current values for various settings
# .stats ?on|off?          Show stats or turn stats on or off
# .system CMD ARGS...      Run CMD ARGS... in a system shell
# .tables ?TABLE?          List names of tables matching LIKE pattern TABLE
# .testcase NAME           Begin redirecting output to 'testcase-out.txt'
# .testctrl CMD ...        Run various sqlite3_test_control() operations
# .timeout MS              Try opening locked tables for MS milliseconds
# .timer on|off            Turn SQL timer on or off
# .trace ?OPTIONS?         Output each SQL statement as it is run
# .vfsinfo ?AUX?           Information about the top-level VFS
# .vfslist                 List all available VFSes
# .vfsname ?AUX?           Print the name of the VFS stack
# .width NUM1 NUM2 ...     Set column widths for "column" mode
```

**For SQLite**
```sql
--- TABLE SQLite

--- EMPLOYEE
CREATE TABLE EMPLOYEE(
    FIRST_NAME CHAR(20) NOT NULL,
    LAST_NAME CHAR(20),
    AGE INT,
    SEX CHAR(1),
    INCOME FLOAT
);

--- company
CREATE TABLE company(
	com_id text(4),
	com_name text(15));
CREATE INDEX com_id_index ON company (com_id);
```

```sql
--- countries
CREATE TABLE countries (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
tld TEXT NOT NULL UNIQUE,
cca2 TEXT NOT NULL UNIQUE,
capital TEXT NOT NULL UNIQUE,
callingCode INTEGER
);
CREATE INDEX id_index ON countries (id);
```

```sql
CREATE TABLE contacts (
	contact_id INTEGER PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	phone TEXT NOT NULL UNIQUE
);
```
**For MySQL**
```sql
--- TABLE MySQL
--- node_countries_dump_1.sql
DROP TABLE IF EXISTS `node_countries`;
 
CREATE TABLE `node_countries` (
`id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
`tld` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
`cca2` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
`capital` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
`callingCode` INT(3) NOT NULL DEFAULT '0',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

```sql
INSERT INTO `node_countries` (`id`, `name`, `tld`, `cca2`, `capital`, `callingCode`)
VALUES
(NULL,'Afghanistan','.af','AF','Kabul',93),
(NULL,'Italy','.it','IT','Rome',39),
(NULL,'France','.fr','FR','Rome',33),
(NULL,'Malaysia','.my','MY','Kuala Lumpur',60),
(NULL,'Mauritania','.mr','MR','Nouakchott',222),
(NULL,'Tunisia','.tn','TN','Tunis',216),
(NULL,'Tanzania','.tz','TZ','Dodoma',255),
(NULL,'Seychelles','.sc','SC','Victoria',248),
(NULL,'Norway','.no','NO','Oslo',47),
(NULL,'Nepal','.np','NP','Kathmandu',977);
```


```python
# MORE EXPLANATIONS
text="It is to create a CRUD countries manager" 
print(text,[0:2])
```
[A Guide to the Newer Python String Format Techniques](https://realpython.com/python-formatted-output/#the-python-string-format-method)
https://realpython.com/python-formatted-output/#the-python-string-format-method


[SQLite Python](https://www.sqlitetutorial.net/sqlite-python/)

