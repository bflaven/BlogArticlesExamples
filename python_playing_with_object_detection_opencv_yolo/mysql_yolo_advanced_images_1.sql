DROP TABLE IF EXISTS `yolo_advanced_images`;

CREATE TABLE `yolo_advanced_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `yolo_advanced_images` WRITE;

INSERT INTO `yolo_advanced_images` (`id`, `file`, `keywords`)
VALUES
	(NULL,'image1.jpg', 'keyword_1_img_1'),
	(NULL,'image1.jpg', 'keyword_2_img_1'),
	(NULL,'image2.jpg', 'keyword_1_img_2'),
	(NULL,'image3.jpg', 'keyword_1_img_3' );






