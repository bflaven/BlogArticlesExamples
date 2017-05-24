--
-- Base de données :  `demo`
--

-- --------------------------------------------------------

--
-- Structure de la table `strings_translate`
--

CREATE TABLE `strings_translate` (
  `id` int(11) NOT NULL,
  `brand` enum('F24','RFI','MCD') NOT NULL,
  `source` enum('mobile','desktop') NOT NULL,
  `language` enum('fr','en','ar','es','fa','ha','km','pt','ru','sw','sw','vi','zh') NOT NULL,
  `cat` varchar(255) NOT NULL DEFAULT '',
  `string_name` varchar(255) NOT NULL DEFAULT '',
  `string_name_model` text,
  `string_name_value` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `strings_translate`
--

INSERT INTO `strings_translate` (`id`, `brand`, `source`, `language`, `cat`, `string_name`, `string_name_model`, `string_name_value`) VALUES
(1, 'RFI', 'desktop', 'zh', '1', 'all_ecology_title', 'Tous les articles Ecologie', '所有关于生态文章'),
(2, 'F24', 'mobile', 'en', '1', 'fragment_favorite_articles', 'LIRE / VOIR', 'READ / WATCH'),
(6, 'F24', 'mobile', 'ar', '2', 'twitter_page_yesterday', 'Hier', 'اليوم'),
(5, 'F24', 'mobile', 'ar', '2', 'twitter_page_today', 'Aujourd\'hui', 'اليوم'),
(7, 'F24', 'mobile', 'ar', '2', 'twitter_page_before', 'Avant-hier', 'اليوم'),
(8, 'RFI', 'desktop', 'km', '0', 'Talent', 'Talent', 'ទេពកោសល្យ'),
(9, 'RFI', 'desktop', 'km', '0', 'Thèmes', 'Thèmes', 'ប្រធានបទ'),
(10, 'RFI', 'desktop', 'km', '0', 'Tranche d\'information', 'Tranche d\'information', 'កម្មវិធី​ព័ត៌មាន១ម៉ោង'),
(19, 'F24', 'mobile', 'en', '1', 'fragment_favorite_edition', 'MODIFIER', 'MODIFY'),
(18, 'RFI', 'desktop', 'km', '0', 'Types', 'Types', 'ប្រភេទ'),
(14, 'RFI', 'desktop', 'fr', '1', 'label_broadcast', 'Emissions', 'Shows');


--
-- Index pour les tables exportées
--

--
-- Index pour la table `strings_translate`
--
ALTER TABLE `strings_translate`
  ADD PRIMARY KEY (`id`);



--
-- AUTO_INCREMENT pour la table `strings_translate`
--
ALTER TABLE `strings_translate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;





