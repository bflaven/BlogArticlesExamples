import sqlite3
conn = sqlite3.connect('data/source.db')
c = conn.cursor()
def create_table():	
	c.execute('CREATE TABLE IF NOT EXISTS countries(id INTEGER PRIMARY KEY, name TEXT NOT NULL, tld TEXT NOT NULL UNIQUE, cca2 TEXT NOT NULL UNIQUE, capital TEXT NOT NULL UNIQUE, callingCode INTEGER)')

def create_index():
    c.execute('CREATE INDEX country_id ON countries(id)')
    
    

def add_data(name, tld, cca2, capital, callingCode):
    c.execute('INSERT INTO countries(id, name, tld, cca2, capital, callingCode) VALUES (NULL, ?, ?, ?, ?, ?)',
              (name, tld, cca2, capital, callingCode))
    conn.commit()


def view_all_countries():
	c.execute('SELECT * FROM countries')
	data = c.fetchall()
	# for row in data:
		# print(row)
	return data


def view_all_names():
	c.execute('SELECT DISTINCT name FROM countries')
	data = c.fetchall()
	# for row in data:
	# 	print(row)
	return data


def get_single_country(name):
	c.execute('SELECT * FROM countries WHERE name="{}"'.format(name))
	data = c.fetchall()
	return data

# name
def get_country_by_name(name):
	c.execute('SELECT * FROM countries WHERE name="{}"'.format(name))
	data = c.fetchall()
	return data

	
# capital
def get_country_by_capital(capital):
    c.execute('SELECT * FROM countries WHERE capital="{}"'.format(capital))
    # c.execute('SELECT * FROM countries WHERE capital LIKE "{}"'.format(capital))
    data = c.fetchall()
    return data

# tld
def get_country_by_tld(tld):
	c.execute('SELECT * FROM countries WHERE tld="{}"'.format(tld))
	data = c.fetchall()
	return data
 
# cca2
def get_country_by_cca2(cca2):
	c.execute("SELECT * FROM countries WHERE cca2 like '%{}%'".format(cca2))
	data = c.fetchall()
	return data

# capital
def edit_country_capital(capital, new_capital):
	c.execute('UPDATE countries SET capital ="{}" WHERE capital="{}"'.format(
		new_capital, capital))
	conn.commit()
	data = c.fetchall()
	return data

# callingcode
def get_country_by_callingcode(callingcode):
	c.execute(
		"SELECT * FROM countries WHERE callingcode like '%{}%'".format(callingcode))
	data = c.fetchall()
	return data


def edit_blog_tld(tld, new_tld):
	c.execute('UPDATE countries SET tld ="{}" WHERE tld="{}"'.format(new_tld, tld
		))
	conn.commit()
	data = c.fetchall()
	return data


def edit_country_name(name, new_name):
	c.execute('UPDATE countries SET name="{}" WHERE name="{}"'.format(new_name, name
		))
	conn.commit()
	data = c.fetchall()
	return data


def delete_data(name):
	c.execute('DELETE FROM countries WHERE name="{}"'.format(name))
	conn.commit()


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
