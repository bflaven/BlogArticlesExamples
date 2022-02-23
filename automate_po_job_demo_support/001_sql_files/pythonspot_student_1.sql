PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE student (
	id INTEGER NOT NULL, 
	username VARCHAR, 
	firstname VARCHAR, 
	lastname VARCHAR, 
	university VARCHAR, 
	PRIMARY KEY (id)
);
INSERT INTO student VALUES(1,'james','James','Boogie','MIT');
INSERT INTO student VALUES(2,'lara','Lara','Miami','UU');
INSERT INTO student VALUES(3,'eric','Eric','York','Stanford');
INSERT INTO student VALUES(4,'bruno','Bruno','Bentolila','IUOO');
INSERT INTO student VALUES(5,'prisca','Prisca','Jore','Heidelberg University');
COMMIT;
