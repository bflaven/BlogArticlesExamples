PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE countries (
                                    id INTEGER PRIMARY KEY,
                                    name TEXT NOT NULL,
                                    tld TEXT NOT NULL UNIQUE,
                                    cca2 TEXT NOT NULL UNIQUE,
                                    capital TEXT NOT NULL UNIQUE,
                                    callingCode INTEGER,
                                    FOREIGN KEY (id) REFERENCES countries (id)
                                );
INSERT INTO countries VALUES(1,'Afghanistan','.af','AF','Kabul',93);
INSERT INTO countries VALUES(2,'Italy','.it','IT','Rome',39);
INSERT INTO countries VALUES(3,'Malaysia','.my','MY','Kuala Lumpur',60);
INSERT INTO countries VALUES(4,'Mauritania','.mr','MR','Nouakchott',222);
INSERT INTO countries VALUES(5,'Tunisia','.tn','TN','Tunis',216);
INSERT INTO countries VALUES(6,'Tanzania','.tz','TZ','Dodoma',255);
INSERT INTO countries VALUES(7,'Seychelles','.sc','SC','Victoria',248);
INSERT INTO countries VALUES(8,'Norway','.no','NO','Oslo',47);
INSERT INTO countries VALUES(9,'Nepal','.np','NP','Kathmandu',977);
INSERT INTO countries VALUES(10,'Colombia','.co','CO','Bogot',57);
INSERT INTO countries VALUES(11,'Peru','.pe','PE','Lima',604);
DELETE FROM sqlite_sequence;
COMMIT;
CREATE TABLE countries (
                                    id INTEGER PRIMARY KEY,
                                    name TEXT NOT NULL,
                                    tld TEXT NOT NULL UNIQUE,
                                    cca2 TEXT NOT NULL UNIQUE,
                                    capital TEXT NOT NULL UNIQUE,
                                    callingCode INTEGER,
                                    FOREIGN KEY (id) REFERENCES countries (id)
                                );
11
1|Afghanistan|.af|AF|Kabul|93
2|Italy|.it|IT|Rome|39
3|Malaysia|.my|MY|Kuala Lumpur|60
4|Mauritania|.mr|MR|Nouakchott|222
5|Tunisia|.tn|TN|Tunis|216
6|Tanzania|.tz|TZ|Dodoma|255
7|Seychelles|.sc|SC|Victoria|248
8|Norway|.no|NO|Oslo|47
9|Nepal|.np|NP|Kathmandu|977
10|Colombia|.co|CO|Bogot|57
11|Peru|.pe|PE|Lima|604
