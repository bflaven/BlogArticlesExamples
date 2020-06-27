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