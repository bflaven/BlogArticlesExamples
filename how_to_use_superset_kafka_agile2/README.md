# how_to_use_superset_kafka_agile2

**Some elements on superset, kafka and agile2**




## 1. Superset with Docker
Superset is the most intuitive tool that I found to improve visualisation. Here is a quick way to install and manage Superset with Docker.

```bash
# go to path
cd /Users/brunoflaven/Documents/01_work/blog_articles/how_to_use_superset/


# command to open docker
open -a docker

# clone the dir
git clone https://github.com/apache/superset.git superset


# get into the dir
cd superset


# get the superset stuff 
docker compose -f docker-compose-non-dev.yml pull

# start the superset stuff 
docker compose -f docker-compose-non-dev.yml up

# start using Superset
# http://localhost:8088
# username: admin
# password: admin
```

## 2. Connecting Superset to Databases

You need to have some databases e.g. <code>mariadb</code>, <code>mongodb</code>, <code>mysql</code>, <code>postgresql</code> installed on your machine to leverage on a database. To be sure to connect Superset to your local database, you need to use the hostname <code>docker.for.mac.host.internal</code> instead of <code>localhost</code>.


On mac, the best way to do so: install databases, it is to use homebrew. Here are the commands  to install databases.

```bash

# list services for database
brew services list


# classical commands before install
brew update
brew upgrade
brew doctor
```


To Install Homebrew if you haven't already: https://brew.sh/
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/main/install.sh)"

# Update the Homebrew formulae:
brew update
```

### 2.1 MARIADB

```bash
# Managing the mariadb database

# mariadb
brew search mariadb
brew install mariadb
brew services start mariadb
brew services stop mariadb

# connect to mariadb (no password)
mysql
mysql -u brunoflaven 

# create a root user with all privileges
CREATE USER 'root'@'hostname' IDENTIFIED BY 'root';
# CREATE USER 'root'@'%' IDENTIFIED BY 'root';
SELECT USER,is_role,default_role FROM mysql.user;
GRANT ALL PRIVILEGES ON *.* TO 'root'@localhost IDENTIFIED BY 'root';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'root'@localhost;

# connection infos
# select mysql
# add port 3306
# add host docker.for.mac.host.internal or 127.0.0.1
# db_name : mydatabase_try_mariadb
# user: root
# pwd: root



# useful commands
# create databases
CREATE DATABASE try_mariadb;
USE try_mariadb;
CREATE TABLE testtable
(
 id int not null primary key,
 name varchar(20) not null,
 lastupdate timestamp not null
 );

# insert
INSERT INTO testtable
 (id, name, lastupdate)
 values (1,'Sample name','2022-09-22 18:53');

INSERT INTO testtable
 (id, name, lastupdate)
 values (2,'Sample name 2','2022-09-22 18:54');

# update
UPDATE testtable set name = 'updated name' where id=1;

# delete one record with the id equal to 4
DELETE FROM testtable where id = 4;

# select all content from the table testtable 
SELECT * FROM testtable;

# drop
DROP TABLE testtable;

# empty
TRUNCATE testtable;



```

### 2.2 POSTGRES


```bash

# install and start postgresql with homebrew 
brew search postgresql
brew install postgresql
brew services start postgresql
brew services stop postgresql

# connect to postgres
psql postgres

# way_1 to connect to postgresql
# in the console
CREATEUSER -s postgres
# in the postgres client
ALTER USER postgres WITH PASSWORD 'password';

# way_2 to connect to postgresql

# in the postgres client
CREATE ROLE root WITH LOGIN PASSWORD 'root';
ALTER ROLE root CREATEDB;

# connect to postgres in a terminal
psql postgres

# your username should be listed
postgres=# \du

# let's validate it
postgres=# \q;

# and then:
psql -U brunoflaven postgres;
psql -U root postgres;

# to quit
postgres=# \q;

# list all databases
postgres=# \list;
postgres=# \l;

# connect to a certain database
postgres=# \c; <db name>

# examples with real postgres databases
postgres=# \c postgres;
postgres=# \c mydatabase_try_postgresql;
postgres=# \c template1;

# list all tables in the current database using your search_path
postgres=# \dt;


# In postgres, in the console, give a complete creation tables and and insert datas for a database named "mydatabase_try_postgresql"


# connect to the newly created database
\c mydatabase_try_postgresql

# Create 'users' table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

# Create 'orders' table
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    order_date DATE,
    total_amount DECIMAL(10, 2) NOT NULL
);




# configure postgresql db in superset
# Not working localhost or 127.0.0.1 on Mac
# Working docker.for.mac.host.internal or 127.0.0.1 on Mac


# select postgresql
# add port 5432
# add host docker.for.mac.host.internal
# db_name : mydatabase_try_postgresql
# user: postgres
# pwd: password


# createdb mydatabase_try_postgresql
# dropdb mydatabase_try_postgresql
```


**Docker reminder**
```bash
# Lists containers (and tells you which images they are spun from)
docker ps -a                

# Lists images 
docker images               

# Removes a stopped container
docker rm <container_id>    

# Forces the removal of a running container (uses SIGKILL)
docker rm -f <container_id> 

# Removes an image
# Will fail if there is a running instance of that image i.e. container
docker rmi <image_id>       


# Forces removal of image even if it is referenced in multiple repositories, 
# i.e. same image id given multiple names/tags 
# Will still fail if there is a docker container referencing image
docker rmi -f <image_id>    


# command for docker
docker info
docker container prune -a
docker image prune
docker volume prune
docker network prune
docker system prune
docker system prune -a
```


### 3. Collecting data: Using kafka, a corner stone
Using  kafka with Homebrew. Again, if you need to install homebrew, type in the console, the following command.


```bash

# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


# To install kafka with Homebrew
brew install kafka



# To list the services from Homebrew
brew services list



# If you've installed Kafka and Zookeeper using Homebrew on your macOS system, you can use the following commands to interact with Kafka and gain an understanding of its general principles.

# 1. Start Zookeeper:
# Zookeeper is a prerequisite for Kafka, and it manages distributed configurations and synchronization between nodes. Open a terminal and start Zookeeper:


brew services start zookeeper


# 2. Start Kafka Server:
# Now, start the Kafka server using Homebrew:


brew services start kafka


# This command will start the Kafka server as a background service.

# 3. Create a Topic:
# Kafka organizes data into topics. Create a Kafka topic to publish and subscribe messages:


kafka-topics --create --topic brunotopic1 --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1


# Replace `brunotopic1` with the desired topic name.

# 4. List Topics:
# List the existing Kafka topics:


kafka-topics --list --bootstrap-server localhost:9092


# 5. Produce Messages:

# Produce some messages to the topic:


kafka-console-producer --topic brunotopic1 --bootstrap-server localhost:9092


# This command opens a console where you can type messages. Press `Ctrl + D` to exit.

# 6. Consume Messages:

# Open a new terminal and consume messages from the topic:


kafka-console-consumer --topic brunotopic1 --bootstrap-server localhost:9092 --from-beginning


# This command subscribes to the topic and prints incoming messages.

# 7. Describe a Topic:

# Describe the properties of a Kafka topic:


kafka-topics --describe --topic brunotopic1 --bootstrap-server localhost:9092


# 8. Kafka Commands Documentation:
# Explore additional Kafka commands and options by checking the official documentation:


kafka-topics --help
kafka-console-producer --help
kafka-console-consumer --help


# 9. Stop Kafka:
# When you're done, you can stop the Kafka server:


brew services stop kafka
brew services stop zookeeper
```
