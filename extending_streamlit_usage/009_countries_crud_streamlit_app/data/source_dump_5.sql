PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE countries (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
tld TEXT NOT NULL UNIQUE,
cca2 TEXT NOT NULL UNIQUE,
capital TEXT NOT NULL UNIQUE,
callingCode INTEGER
);
INSERT INTO countries VALUES(21,'Afghanistan','.af','AF','Kabul',93);
INSERT INTO countries VALUES(22,'Italy','.it','IT','Rome',39);
INSERT INTO countries VALUES(23,'Malaysia','.my','MY','Kuala Lumpur',60);
INSERT INTO countries VALUES(24,'Mauritania','.mr','MR','Nouakchott',222);
INSERT INTO countries VALUES(25,'Tunisia','.tn','TN','Tunis',216);
INSERT INTO countries VALUES(26,'Tanzania','.tz','TZ','Dodoma',255);
INSERT INTO countries VALUES(27,'Seychelles','.sc','SC','Victoria',248);
INSERT INTO countries VALUES(28,'Norway','.no','NO','Oslo',47);
INSERT INTO countries VALUES(29,'Nepal','.np','NP','Kathmandu',977);
INSERT INTO countries VALUES(30,'Colombia','.co','CO','Bogota',57);
INSERT INTO countries VALUES(31,'Peru','.pe','PE','Lima',456);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('countries',31);
CREATE INDEX country_id ON countries (id);
COMMIT;