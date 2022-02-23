PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE templates (
	id_filename INTEGER NOT NULL, 
	filename VARCHAR, 
	recipients VARCHAR, 
	mail_object VARCHAR, 
	mail_body VARCHAR, 
	mail_search_tags VARCHAR, 
	PRIMARY KEY (id_filename)
);
INSERT INTO templates VALUES(1,'filename_1','recipients_1','mail_object_1','mail_body_1','mail_search_tags_1_a, mail_search_tags_1_b, mail_search_tags_1_c');
INSERT INTO templates VALUES(2,'filename_2','recipients_2','mail_object_2','mail_body_2','mail_search_tags_2_a, mail_search_tags_2_b, mail_search_tags_2_c');
INSERT INTO templates VALUES(3,'filename_3','recipients_3','mail_object_3','mail_body_3','mail_search_tags_3_a, mail_search_tags_3_b, mail_search_tags_3_c');
COMMIT;
