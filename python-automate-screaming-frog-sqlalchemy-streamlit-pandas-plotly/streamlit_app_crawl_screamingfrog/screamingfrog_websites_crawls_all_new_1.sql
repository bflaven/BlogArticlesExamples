PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE websites (
	websiteid INTEGER NOT NULL, 
	name VARCHAR, 
	url VARCHAR, 
	PRIMARY KEY (websiteid)
);
INSERT INTO websites VALUES(1,'Flaven Website','http://flaven.fr');
INSERT INTO websites VALUES(2,'RFI FR','https://www.rfi.fr/fr/');
INSERT INTO websites VALUES(3,'F24 EN','https://www.france24.com/en/');
INSERT INTO websites VALUES(4,'F24 ES','https://www.france24.com/es/');
INSERT INTO websites VALUES(5,'the99project from GG','http://www.the99project.net/');
INSERT INTO websites VALUES(6,'Lamapa','http://lamapa.org/');
INSERT INTO websites VALUES(7,'Joan of Arc','https://en.wikipedia.org/wiki/Joan_of_Arc');
INSERT INTO websites VALUES(8,'duckduckgo','https://duckduckgo.com/');
CREATE TABLE crawls (
	crawlid INTEGER NOT NULL, 
	websitename VARCHAR, 
	sourcefile VARCHAR, 
	date VARCHAR, 
	status_200 INTEGER, 
	status_301 INTEGER, 
	status_404 INTEGER, 
	status_403 INTEGER, 
	avg_wordcount INTEGER, 
	avg_titlecount INTEGER, 
	avg_metacount INTEGER, 
	avg_crawl_depth INTEGER, 
	avg_h1count INTEGER, 
	avg_textratio INTEGER, 
	indexability INTEGER, 
	avg_inlinks INTEGER, 
	avg_outlinks INTEGER, 
	PRIMARY KEY (crawlid)
);
INSERT INTO crawls VALUES(1,'flavenwebsite','flavenwebsite_2021_12_09_15_14_56_internal_html.csv','2021-12-09 15:17:1639059471',99,1,0,0,0,45,0,1,36,0,1,81,0);
INSERT INTO crawls VALUES(2,'the99projectfromgg','the99projectfromgg_2021_12_09_15_16_42_internal_html.csv','2021-12-09 15:17:1639059477',81,2,0,0,0,35,0,3,12,0,3,9,0);
INSERT INTO crawls VALUES(3,'lamapa','lamapa_2021_12_09_15_33_19_internal_html.csv','2021-12-09 15:33:1639060420',56,0,0,0,0,22,0,2,14,0,0,25,0);
INSERT INTO crawls VALUES(4,'rfifr','rfifr_2021_12_09_15_36_46_internal_html.csv','2021-12-09 15:37:1639060643',98,2,0,0,0,64,0,1,43,0,2,47,0);
INSERT INTO crawls VALUES(5,'lamapa','lamapa_2021_12_09_15_33_19_internal_html.csv','2021-12-09 15:49:1639061368',56,0,0,0,0,22,0,2,14,0,0,25,0);
COMMIT;
