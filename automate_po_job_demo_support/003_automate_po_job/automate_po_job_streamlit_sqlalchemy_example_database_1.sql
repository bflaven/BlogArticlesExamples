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