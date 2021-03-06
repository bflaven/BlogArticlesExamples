-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Client :  localhost:3306
-- Version du serveur :  5.5.38
-- Version de PHP :  5.5.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `countries_capitals`
--

-- --------------------------------------------------------

--
-- Structure de la table `location_fr_en`
--

CREATE TABLE `location_fr_en` (
`id` int(11) NOT NULL,
  `iso_3166_country` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `en_country` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `fr_country` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `latitude` double(10,7) NOT NULL,
  `longitude` float(10,7) NOT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=254 ;

--
-- Contenu de la table `location_fr_en`
--

INSERT INTO `3_location` (`id`, `iso_3166_country`, `en_country`, `fr_country`, `latitude`, `longitude`) VALUES
(1, 'AF', 'Afghanistan', 'Afghanistan', 33.0000000, 65.0000000),
(2, 'AX', 'Aland Islands', 'Iles Aland', 0.0000000, 0.0000000),
(3, 'AL', 'Albania', 'Albanie', 41.0000000, 20.0000000),
(4, 'DZ', 'Algeria', 'Algérie', 28.0000000, 3.0000000),
(5, 'AS', 'American Samoa', 'Samoa Américaines', -14.3333000, -170.0000000),
(6, 'AD', 'Andorra', 'Andorre', 42.5000000, 1.5000000),
(7, 'AO', 'Angola', 'Angola', -12.5000000, 18.5000000),
(8, 'AI', 'Anguilla', 'Anguilla', 18.2500000, -63.1666985),
(9, 'AQ', 'Antarctica', 'Antarctique', -90.0000000, 0.0000000),
(10, 'AG', 'Antigua and Barbuda', 'Antigua-et-Barbuda', 17.0500000, -61.7999992),
(11, 'AR', 'Argentina', 'Argentine', -34.0000000, -64.0000000),
(12, 'AM', 'Armenia', 'Arménie', 40.0000000, 45.0000000),
(13, 'AW', 'Aruba', 'Aruba', 12.5000000, -69.9666977),
(14, 'AU', 'Australia', 'Australie', -27.0000000, 133.0000000),
(15, 'AT', 'Austria', 'Autriche', 47.3333000, 13.3332996),
(16, 'AZ', 'Azerbaijan', 'Azerbaïdjan', 40.5000000, 47.5000000),
(17, 'BS', 'Bahamas', 'Bahamas', 24.2500000, -76.0000000),
(18, 'BH', 'Bahrain', 'Bahreïn', 26.0000000, 50.5499992),
(19, 'BD', 'Bangladesh', 'Bangladesh', 24.0000000, 90.0000000),
(20, 'BB', 'Barbados', 'Barbade', 13.1667000, -59.5332985),
(21, 'BY', 'Belarus', 'Biélorussie', 53.0000000, 28.0000000),
(22, 'BE', 'Belgium', 'Belgique', 50.8333000, 4.0000000),
(23, 'BZ', 'Belize', 'Belize', 17.2500000, -88.7500000),
(24, 'BJ', 'Benin', 'Bénin', 9.5000000, 2.2500000),
(25, 'BM', 'Bermuda', 'Bermuda', 32.3333000, -64.7500000),
(26, 'BT', 'Bhutan', 'Bhoutan', 27.5000000, 90.5000000),
(27, 'BO', 'Bolivia', 'Bolivie', -17.0000000, -65.0000000),
(28, 'BQ', 'Bonaire, Saint Eustatius and Saba', 'Bonaire, Saint-Eustache et Saba', 0.0000000, 0.0000000),
(29, 'BA', 'Bosnia and Herzegovina', 'Bosnie-Herzégovine', 44.0000000, 18.0000000),
(30, 'BW', 'Botswana', 'Botswana', -22.0000000, 24.0000000),
(31, 'BV', 'Bouvet Island', 'Île Bouvet', -54.4333000, 3.4000001),
(32, 'BR', 'Brazil', 'Brésil', -10.0000000, -55.0000000),
(33, 'IO', 'British Indian Ocean Territory', 'Territoire britannique de l''océan Indien', -6.0000000, 71.5000000),
(34, 'VG', 'British Virgin Islands', 'Îles Vierges britanniques', 18.5000000, -64.5000000),
(35, 'BN', 'Brunei', 'Brunei', 4.5000000, 114.6667023),
(36, 'BG', 'Bulgaria', 'Bulgarie', 43.0000000, 25.0000000),
(37, 'BF', 'Burkina Faso', 'Burkina Faso', 13.0000000, -2.0000000),
(38, 'BI', 'Burundi', 'Burundi', -3.5000000, 30.0000000),
(39, 'KH', 'Cambodia', 'Cambodge', 13.0000000, 105.0000000),
(40, 'CM', 'Cameroon', 'Cameroun', 6.0000000, 12.0000000),
(41, 'CA', 'Canada', 'Canada', 60.0000000, -95.0000000),
(42, 'CV', 'Cape Verde', 'Cap-Vert', 16.0000000, -24.0000000),
(43, 'KY', 'Cayman Islands', 'Îles Caïmans', 19.5000000, -80.5000000),
(44, 'CF', 'Central African Republic', 'République centrafricaine', 7.0000000, 21.0000000),
(45, 'TD', 'Chad', 'Tchad', 15.0000000, 19.0000000),
(46, 'CL', 'Chile', 'Chili', -30.0000000, -71.0000000),
(47, 'CN', 'China', 'Chine', 35.0000000, 105.0000000),
(48, 'CX', 'Christmas Island', 'île de noël', -10.5000000, 105.6667023),
(49, 'CC', 'Cocos Islands', 'Îles Cocos', -12.5000000, 96.8332977),
(50, 'CO', 'Colombia', 'Colombie', 4.0000000, -72.0000000),
(51, 'KM', 'Comoros', 'Les Comores', -12.1667000, 44.2500000),
(52, 'CK', 'Cook Islands', 'Îles Cook', -21.2333000, -159.7666931),
(53, 'CR', 'Costa Rica', 'Costa Rica', 10.0000000, -84.0000000),
(54, 'HR', 'Croatia', 'Croatie', 45.1667000, 15.5000000),
(55, 'CU', 'Cuba', 'Cuba', 21.5000000, -80.0000000),
(56, 'CW', 'Curacao', 'Curacao', 0.0000000, 0.0000000),
(57, 'CY', 'Cyprus', 'Chypre', 35.0000000, 33.0000000),
(58, 'CZ', 'Czech Republic', 'République Tchèque', 49.7500000, 15.5000000),
(59, 'CD', 'Democratic Republic of the Congo', 'République démocratique du Congo', 0.0000000, 25.0000000),
(60, 'DK', 'Denmark', 'Danemark', 56.0000000, 10.0000000),
(61, 'DJ', 'Djibouti', 'Djibouti', 11.5000000, 43.0000000),
(62, 'DM', 'Dominica', 'Dominique', 15.4167000, -61.3333015),
(63, 'DO', 'Dominican Republic', 'République Dominicaine', 19.0000000, -70.6667023),
(64, 'TL', 'East Timor', 'Timor oriental', 0.0000000, 0.0000000),
(65, 'EC', 'Ecuador', 'Equateur', -2.0000000, -77.5000000),
(66, 'EG', 'Egypt', 'Egypte', 27.0000000, 30.0000000),
(67, 'SV', 'El Salvador', 'El Salvador', 13.8333000, -88.9167023),
(68, 'GQ', 'Equatorial Guinea', 'Guinée Équatoriale', 2.0000000, 10.0000000),
(69, 'ER', 'Eritrea', 'Érythrée', 15.0000000, 39.0000000),
(70, 'EE', 'Estonia', 'Estonie', 59.0000000, 26.0000000),
(71, 'ET', 'Ethiopia', 'Ethiopie', 8.0000000, 38.0000000),
(72, 'FK', 'Falkland Islands', 'Îles Malouines', -51.7500000, -59.0000000),
(73, 'FO', 'Faroe Islands', 'Îles Féroé', 62.0000000, -7.0000000),
(74, 'FJ', 'Fiji', 'Fidji', -18.0000000, 175.0000000),
(75, 'FI', 'Finland', 'Finlande', 64.0000000, 26.0000000),
(76, 'FR', 'France', 'France', 46.0000000, 2.0000000),
(77, 'GF', 'French Guiana', 'Guinée Française', 4.0000000, -53.0000000),
(78, 'PF', 'French Polynesia', 'Polynésie française', -15.0000000, -140.0000000),
(79, 'TF', 'French Southern Territories', 'Terres australes et antarctiques françaises', -43.0000000, 67.0000000),
(80, 'GA', 'Gabon', 'Gabon', -1.0000000, 11.7500000),
(81, 'GM', 'Gambia', 'Gambie', 13.4667000, -16.5667000),
(82, 'GE', 'Georgia', 'Géorgie', 42.0000000, 43.5000000),
(83, 'DE', 'Germany', 'Allemagne', 51.0000000, 9.0000000),
(84, 'GH', 'Ghana', 'Ghana', 8.0000000, -2.0000000),
(85, 'GI', 'Gibraltar', 'Gibraltar', 36.1833000, -5.3667002),
(86, 'GR', 'Greece', 'Grèce', 39.0000000, 22.0000000),
(87, 'GL', 'Greenland', 'Groenland', 72.0000000, -40.0000000),
(88, 'GD', 'Grenada', 'Grenade', 12.1167000, -61.6666985),
(89, 'GP', 'Guadeloupe', 'Guadeloupe', 16.2500000, -61.5833015),
(90, 'GU', 'Guam', 'Guam', 13.4667000, 144.7832947),
(91, 'GT', 'Guatemala', 'Guatemala', 15.5000000, -90.2500000),
(92, 'GG', 'Guernsey', 'Guernsey', 0.0000000, 0.0000000),
(93, 'GN', 'Guinea', 'Guinée', 11.0000000, -10.0000000),
(94, 'GW', 'Guinea-Bissau', 'Guinée-Bissau', 12.0000000, -15.0000000),
(95, 'GY', 'Guyana', 'Guyane', 5.0000000, -59.0000000),
(96, 'HT', 'Haiti', 'Haïti', 19.0000000, -72.4167023),
(97, 'HM', 'Heard Island and McDonald', 'Îles Heard et McDonald', -53.1000000, 72.5167007),
(98, 'HN', 'Honduras', 'Honduras', 15.0000000, -86.5000000),
(99, 'HK', 'Hong Kong', 'Hong Kong', 22.2500000, 114.1667023),
(100, 'HU', 'Hungary', 'Hongrie', 47.0000000, 20.0000000),
(101, 'IS', 'Iceland', 'Islande', 65.0000000, -18.0000000),
(102, 'IN', 'India', 'Inde', 20.0000000, 77.0000000),
(103, 'ID', 'Indonesia', 'Indonésie', -5.0000000, 120.0000000),
(104, 'IR', 'Iran', 'Iran', 32.0000000, 53.0000000),
(105, 'IQ', 'Iraq', 'Irak', 33.0000000, 44.0000000),
(106, 'IE', 'Ireland', 'Irlande', 53.0000000, -8.0000000),
(107, 'IM', 'Isle of Man', 'Île de Man', 0.0000000, 0.0000000),
(108, 'IL', 'Israel', 'Israël', 31.5000000, 34.7500000),
(109, 'IT', 'Italy', 'Italie', 42.8333000, 12.8332996),
(110, 'CI', 'Ivory Coast', 'Côte d''Ivoire', 8.0000000, -5.0000000),
(111, 'JM', 'Jamaica', 'Jamaïque', 18.2500000, -77.5000000),
(112, 'JP', 'Japan', 'Japon', 36.0000000, 138.0000000),
(113, 'JE', 'Jersey', 'Jersey', 0.0000000, 0.0000000),
(114, 'JO', 'Jordan', 'Jordanie', 31.0000000, 36.0000000),
(115, 'KZ', 'Kazakhstan', 'Kazakhstan', 48.0000000, 68.0000000),
(116, 'KE', 'Kenya', 'Kenya', 1.0000000, 38.0000000),
(117, 'KI', 'Kiribati', 'Kiribati', 1.4167000, 173.0000000),
(118, 'XK', 'Kosovo', 'Kosovo', 0.0000000, 0.0000000),
(119, 'KW', 'Kuwait', 'Koweit', 29.3375000, 47.6581001),
(120, 'KG', 'Kyrgyzstan', 'Kirghizistan', 41.0000000, 75.0000000),
(121, 'LA', 'Laos', 'Laos', 18.0000000, 105.0000000),
(122, 'LV', 'Latvia', 'Lettonie', 57.0000000, 25.0000000),
(123, 'LB', 'Lebanon', 'Liban', 33.8333000, 35.8333015),
(124, 'LS', 'Lesotho', 'Lesotho', -29.5000000, 28.5000000),
(125, 'LR', 'Liberia', 'Libéria', 6.5000000, -9.5000000),
(126, 'LY', 'Libya', 'Libye', 25.0000000, 17.0000000),
(127, 'LI', 'Liechtenstein', 'Liechtenstein', 47.1667000, 9.5333004),
(128, 'LT', 'Lithuania', 'Lituanie', 56.0000000, 24.0000000),
(129, 'LU', 'Luxembourg', 'Luxembourg', 49.7500000, 6.1666999),
(130, 'MO', 'Macao', 'Macao', 22.1667000, 113.5500031),
(131, 'MK', 'Macedonia', 'Macédoine', 41.8333000, 22.0000000),
(132, 'MG', 'Madagascar', 'Madagascar', -20.0000000, 47.0000000),
(133, 'MW', 'Malawi', 'Malawi', -13.5000000, 34.0000000),
(134, 'MY', 'Malaysia', 'Malaisie', 2.5000000, 112.5000000),
(135, 'MV', 'Maldives', 'Maldives', 3.2500000, 73.0000000),
(136, 'ML', 'Mali', 'Mali', 17.0000000, -4.0000000),
(137, 'MT', 'Malta', 'Malte', 35.8333000, 14.5832996),
(138, 'MH', 'Marshall Islands', 'Iles Marshall', 9.0000000, 168.0000000),
(139, 'MQ', 'Martinique', 'Martinique', 14.6667000, -61.0000000),
(140, 'MR', 'Mauritania', 'Mauritanie', 20.0000000, -12.0000000),
(141, 'MU', 'Mauritius', 'Ile Maurice', -20.2833000, 57.5499992),
(142, 'YT', 'Mayotte', 'Mayotte', -12.8333000, 45.1666985),
(143, 'MX', 'Mexico', 'Mexique', 23.0000000, -102.0000000),
(144, 'FM', 'Micronesia', 'Micronésie', 6.9167000, 158.2500000),
(145, 'MD', 'Moldova', 'Moldova', 47.0000000, 29.0000000),
(146, 'MC', 'Monaco', 'Monaco', 43.7333000, 7.4000001),
(147, 'MN', 'Mongolia', 'Mongolie', 46.0000000, 105.0000000),
(148, 'ME', 'Montenegro', 'Monténégro', 42.0000000, 19.0000000),
(149, 'MS', 'Montserrat', 'Montserrat', 16.7500000, -62.2000008),
(150, 'MA', 'Morocco', 'Maroc', 32.0000000, -5.0000000),
(151, 'MZ', 'Mozambique', 'Mozambique', -18.2500000, 35.0000000),
(152, 'MM', 'Myanmar', 'Myanmar', 22.0000000, 98.0000000),
(153, 'NA', 'Namibia', 'Namibie', -22.0000000, 17.0000000),
(154, 'NR', 'Nauru', 'Nauru', -0.5333000, 166.9167023),
(155, 'NP', 'Nepal', 'Népal', 28.0000000, 84.0000000),
(156, 'NL', 'Netherlands', 'Pays-Bas', 52.5000000, 5.7500000),
(157, 'AN', 'Netherlands Antilles', 'Antilles néerlandaises', 12.2500000, -68.7500000),
(158, 'NC', 'New Caledonia', 'Nouvelle-Calédonie', -21.5000000, 165.5000000),
(159, 'NZ', 'New Zealand', 'Nouvelle-Zélande', -41.0000000, 174.0000000),
(160, 'NI', 'Nicaragua', 'Nicaragua', 13.0000000, -85.0000000),
(161, 'NE', 'Niger', 'Niger', 16.0000000, 8.0000000),
(162, 'NG', 'Nigeria', 'Nigeria', 10.0000000, 8.0000000),
(163, 'NU', 'Niue', 'Niue', -19.0333000, -169.8666992),
(164, 'NF', 'Norfolk Island', 'Île Norfolk', -29.0333000, 167.9499969),
(165, 'KP', 'North Korea', 'Corée du Nord', 40.0000000, 127.0000000),
(166, 'MP', 'Northern Mariana Islands', 'Îles Mariannes du Nord', 15.2000000, 145.7500000),
(167, 'NO', 'Norway', 'Norvège', 62.0000000, 10.0000000),
(168, 'OM', 'Oman', 'Oman', 21.0000000, 57.0000000),
(169, 'PK', 'Pakistan', 'Pakistan', 30.0000000, 70.0000000),
(170, 'PW', 'Palau', 'Palau', 7.5000000, 134.5000000),
(171, 'PS', 'Palestinian Territory', 'Territoire Palestinien', 32.0000000, 35.2500000),
(172, 'PA', 'Panama', 'Panama', 9.0000000, -80.0000000),
(173, 'PG', 'Papua New Guinea', 'Papouasie Nouvelle Guinée', -6.0000000, 147.0000000),
(174, 'PY', 'Paraguay', 'Paraguay', -23.0000000, -58.0000000),
(175, 'PE', 'Peru', 'Pérou', -10.0000000, -76.0000000),
(176, 'PH', 'Philippines', 'Philippines', 13.0000000, 122.0000000),
(177, 'PN', 'Pitcairn', 'Pitcairn', 0.0000000, 0.0000000),
(178, 'PL', 'Poland', 'Pologne', 52.0000000, 20.0000000),
(179, 'PT', 'Portugal', 'Portugal', 39.5000000, -8.0000000),
(180, 'PR', 'Puerto Rico', 'Porto Rico', 18.2500000, -66.5000000),
(181, 'QA', 'Qatar', 'Qatar', 25.5000000, 51.2500000),
(182, 'CG', 'Republic of the Congo', 'République du Congo', -1.0000000, 15.0000000),
(183, 'RE', 'Reunion', 'La Réunion', -21.1000000, 55.5999985),
(184, 'RO', 'Romania', 'Roumanie', 46.0000000, 25.0000000),
(185, 'RU', 'Russia', 'Russie', 60.0000000, 100.0000000),
(186, 'RW', 'Rwanda', 'Rwanda', -2.0000000, 30.0000000),
(187, 'BL', 'Saint Barthelemy', 'Saint-Barthélemy', 0.0000000, 0.0000000),
(188, 'SH', 'Saint Helena', 'Sainte-Hélène', -15.9333000, -5.6999998),
(189, 'KN', 'Saint Kitts and Nevis', 'Saint-Christophe-et-Niévè', 17.3333000, -62.7500000),
(190, 'LC', 'Saint Lucia', 'Sainte-Lucie', 13.8833000, -61.1333008),
(191, 'MF', 'Saint Martin', 'Saint Martin', 0.0000000, 0.0000000),
(192, 'PM', 'Saint Pierre and Miquelon', 'Saint-Pierre-et-Miquelon', 46.8333000, -56.3333015),
(193, 'VC', 'Saint Vincent and the Grenadines', 'Saint-Vincent-et-les-Grenadines', 13.2500000, -61.2000008),
(194, 'WS', 'Samoa', 'Samoa', -13.5833000, -172.3332977),
(195, 'SM', 'San Marino', 'Saint Marin', 43.7667000, 12.4167004),
(196, 'ST', 'Sao Tome and Principe', 'Sao Tomé-et-Principe', 1.0000000, 7.0000000),
(197, 'SA', 'Saudi Arabia', 'Arabie Saoudite', 25.0000000, 45.0000000),
(198, 'SN', 'Senegal', 'Sénégal', 14.0000000, -14.0000000),
(199, 'RS', 'Serbia', 'Serbie', 44.0000000, 21.0000000),
(200, 'CS', 'Serbia and Montenegro', 'Serbie et Monténégro', 0.0000000, 0.0000000),
(201, 'SC', 'Seychelles', 'les Seychelles', -4.5833000, 55.6666985),
(202, 'SL', 'Sierra Leone', 'Sierra Leone', 8.5000000, -11.5000000),
(203, 'SG', 'Singapore', 'Singapour', 1.3667000, 103.8000031),
(204, 'SX', 'Sint Maarten', 'Sint Maarten', 0.0000000, 0.0000000),
(205, 'SK', 'Slovakia', 'Slovaquie', 48.6667000, 19.5000000),
(206, 'SI', 'Slovenia', 'Slovénie', 46.0000000, 15.0000000),
(207, 'SB', 'Solomon Islands', 'Les îles Salomon', -8.0000000, 159.0000000),
(208, 'SO', 'Somalia', 'Somalie', 10.0000000, 49.0000000),
(209, 'ZA', 'South Africa', 'Afrique du Sud', -29.0000000, 24.0000000),
(210, 'GS', 'South Georgia and the South Sandwich Islands', 'Géorgie du Sud-et-les Îles Sandwich du Sud', -54.5000000, -37.0000000),
(211, 'KR', 'South Korea', 'Corée du Sud', 37.0000000, 127.5000000),
(212, 'SS', 'South Sudan', 'Soudan du sud', 0.0000000, 0.0000000),
(213, 'ES', 'Spain', 'Espagne', 40.0000000, -4.0000000),
(214, 'LK', 'Sri Lanka', 'Sri Lanka', 7.0000000, 81.0000000),
(215, 'SD', 'Sudan', 'Soudan', 15.0000000, 30.0000000),
(216, 'SR', 'Suriname', 'Suriname', 4.0000000, -56.0000000),
(217, 'SJ', 'Svalbard and Jan Mayen', 'Svalbard et Jan Mayen', 78.0000000, 20.0000000),
(218, 'SZ', 'Swaziland', 'Swaziland', -26.5000000, 31.5000000),
(219, 'SE', 'Sweden', 'Suède', 62.0000000, 15.0000000),
(220, 'CH', 'Switzerland', 'Suisse', 47.0000000, 8.0000000),
(221, 'SY', 'Syria', 'Syrie', 35.0000000, 38.0000000),
(222, 'TW', 'Taiwan', 'Taïwan', 23.5000000, 121.0000000),
(223, 'TJ', 'Tajikistan', 'Tadjikistan', 39.0000000, 71.0000000),
(224, 'TZ', 'Tanzania', 'Tanzanie', -6.0000000, 35.0000000),
(225, 'TH', 'Thailand', 'Thaïlande', 15.0000000, 100.0000000),
(226, 'TG', 'Togo', 'Togo', 8.0000000, 1.1667000),
(227, 'TK', 'Tokelau', 'Tokelau', -9.0000000, -172.0000000),
(228, 'TO', 'Tonga', 'Tonga', -20.0000000, -175.0000000),
(229, 'TT', 'Trinidad and Tobago', 'Trinité-et-Tobago', 11.0000000, -61.0000000),
(230, 'TN', 'Tunisia', 'Tunisie', 34.0000000, 9.0000000),
(231, 'TR', 'Turkey', 'Turquie', 39.0000000, 35.0000000),
(232, 'TM', 'Turkmenistan', 'Turkménistan', 40.0000000, 60.0000000),
(233, 'TC', 'Turks and Caicos Islands', 'îles Turques-et-Caïques', 21.7500000, -71.5832977),
(234, 'TV', 'Tuvalu', 'Tuvalu', -8.0000000, 178.0000000),
(235, 'VI', 'U.S. Virgin Islands', 'Îles Vierges américaines', 18.3333000, -64.8332977),
(236, 'UG', 'Uganda', 'Ouganda', 1.0000000, 32.0000000),
(237, 'UA', 'Ukraine', 'Ukraine', 49.0000000, 32.0000000),
(238, 'AE', 'United Arab Emirates', 'Emirats Arabes Unis', 24.0000000, 54.0000000),
(239, 'GB', 'United Kingdom', 'Royaume-Uni', 54.0000000, -2.0000000),
(240, 'US', 'United States', 'Etats-Unis', 37.7510000, -97.8219986),
(241, 'UM', 'United States Minor Outly', 'Îles mineures éloignées des États-Unis', 19.2833000, 166.6000061),
(242, 'UY', 'Uruguay', 'Uruguay', -33.0000000, -56.0000000),
(243, 'UZ', 'Uzbekistan', 'Ouzbékistan', 41.0000000, 64.0000000),
(244, 'VU', 'Vanuatu', 'Vanuatu', -16.0000000, 167.0000000),
(245, 'VA', 'Vatican', 'Vatican', 41.9000000, 12.4499998),
(246, 'VE', 'Venezuela', 'Venezuela', 8.0000000, -66.0000000),
(247, 'VN', 'Vietnam', 'Viêt-Nam', 16.0000000, 106.0000000),
(248, 'WF', 'Wallis and Futuna', 'Wallis et Futuna', -13.3000000, -176.1999969),
(249, 'EH', 'Western Sahara', 'Sahara occidental', 24.5000000, -13.0000000),
(250, 'YE', 'Yemen', 'Yémen', 15.0000000, 48.0000000),
(251, 'ZM', 'Zambia', 'Zambie', -15.0000000, 30.0000000),
(252, 'ZW', 'Zimbabwe', 'Zimbabwe', -20.0000000, 30.0000000),
(253, 'CD', 'Congo Brazzaville', 'Congo Brazzaville', 0.0000000, 25.0000000);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `location_fr_en`
--
ALTER TABLE `location_fr_en`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `3_location`
--
ALTER TABLE `location_fr_en`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=254;