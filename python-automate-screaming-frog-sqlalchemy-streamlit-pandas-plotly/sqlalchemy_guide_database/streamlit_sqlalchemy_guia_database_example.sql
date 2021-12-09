PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE ingredientes (
	id INTEGER NOT NULL, 
	nombre VARCHAR NOT NULL, 
	precio FLOAT, 
	PRIMARY KEY (id)
);
INSERT INTO ingredientes VALUES(1,'Rice',7.0);
INSERT INTO ingredientes VALUES(2,'Arroz',90.0);
INSERT INTO ingredientes VALUES(3,'Naranja',78.000000000000000001);
INSERT INTO ingredientes VALUES(4,'Peach',123.0);
COMMIT;
