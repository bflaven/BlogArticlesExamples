-- Manage President of the United States (abbreviated as POTUS)
-- username
-- password
-- address
-- salt
-- key

CREATE TABLE `tbl_potus` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `address` varchar(30) NOT NULL,
  `salt` varchar(200) NOT NULL,
  `key` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Index pour la table `tbl_user_1`
--
ALTER TABLE `tbl_potus`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tbl_potus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;




