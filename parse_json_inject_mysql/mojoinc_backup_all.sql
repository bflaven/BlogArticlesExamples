-- phpMyAdmin SQL Dump from mojoinc

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `mojoinc_backup_all`
--

-- --------------------------------------------------------

--
-- Structure de la table `mojoinc_users`
--

CREATE TABLE `mojoinc_users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `user_email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_uuid` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_clientId` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_clientId_id` int(11) NOT NULL DEFAULT '0',
  `user_clientId_brand` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Index for the exported tables
--

--
-- Index for the table `mojoinc_users`
--
ALTER TABLE `mojoinc_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_email` (`user_email`),
  ADD KEY `user_uuid` (`user_uuid`(191)),
  ADD KEY `user_clientId` (`user_clientId`(191)),
  ADD KEY `user_clientId_brand` (`user_clientId_brand`);

--
-- AUTO_INCREMENT for the exported tables
--

--
-- AUTO_INCREMENT for the table `mojoinc_users`
--
ALTER TABLE `mojoinc_users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;


