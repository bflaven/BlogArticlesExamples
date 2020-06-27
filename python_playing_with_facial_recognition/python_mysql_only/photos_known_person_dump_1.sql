DROP TABLE IF EXISTS `known_persons`;
CREATE TABLE `known_persons` (
  `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `file` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
 
INSERT INTO known_persons VALUES (NULL, 'file_1');
INSERT INTO known_persons VALUES (NULL, 'file_2');



