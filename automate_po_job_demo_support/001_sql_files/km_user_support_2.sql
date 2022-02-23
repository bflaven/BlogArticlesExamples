PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE user_support_mail_templates (
	id_filename INTEGER NOT NULL, 
	filename VARCHAR, 
	recipients VARCHAR, 
	mail_object VARCHAR, 
	mail_body VARCHAR, 
	mail_search_tags VARCHAR, 
	PRIMARY KEY (id_filename)
);
INSERT INTO user_support_mail_templates VALUES(0,'001_support_filename','mail_to_define','[OBJECT] 001_support_filename',replace('001_support_filename : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet. Semper viverra nam libero justo laoreet sit amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Scelerisque in dictum non consectetur a erat nam at. Feugiat vivamus at augue eget arcu. Bibendum enim facilisis gravida neque convallis a cras. Lorem sed risus ultricies tristique. Vitae suscipit tellus mauris a diam maecenas. Sodales neque sodales ut etiam. Tellus id interdum velit laoreet id donec. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu.\n\nConvallis posuere morbi leo urna molestie at elementum. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in . Est sit amet facilisis magna etiam tempor orci eu. Justo eget magna fermentum iaculis eu. Parturient montes nascetur ridiculus mus mauris vitae. Sit amet consectetur adipiscing elit duis. Aliquet eget sit amet tellus cras adipiscing enim. Sed elementum tempus egestas sed sed risus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Et molestie ac feugiat sed. Blandit aliquam etiam erat velit. Porttitor eget dolor morbi non arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Eget dolor morbi non arcu risus quis varius. Sit amet cursus sit amet dictum sit amet justo donec. Enim ut tellus elementum sagittis. Quam pellentesque nec nam aliquam sem et tortor. Est pellentesque elit ullamcorper dignissim cras. Nec ullamcorper sit amet risus nullam. Vitae auctor eu augue ut lectus arcu bibendum.\n\nAc feugiat sed lectus vestibulum mattis ullamcorper. Diam quam nulla porttitor massa id neque. A diam sollicitudin tempor id. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. In arcu cursus euismod quis viverra nibh cras pulvinar. Dignissim enim sit amet venenatis urna. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Etiam dignissim diam quis enim lobortis. Porta lorem mollis aliquam ut porttitor leo a. Nam aliquam sem et tortor. Sed id semper risus in . Nec ultrices dui sapien eget mi proin sed. Cursus metus aliquam eleifend mi in nulla. Augue mauris augue neque gravida in . Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.\n\nLacus luctus accumsan tortor posuere ac. Donec enim diam vulputate ut. Tincidunt augue interdum velit euismod in . Lectus proin nibh nisl condimentum id venenatis a. Sagittis aliquam malesuada bibendum arcu vitae. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Arcu odio ut sem nulla pharetra diam sit amet. Est pellentesque elit ullamcorper dignissim. Turpis nunc eget lorem dolor sed viverra. Neque vitae tempus quam pellentesque nec. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique senectus et netus et malesuada fames. Ac auctor augue mauris augue neque. Nibh mauris cursus mattis molestie a iaculis at. Nulla malesuada pellentesque elit eget gravida. Mauris rhoncus aenean vel elit scelerisque. Id ornare arcu odio ut sem nulla pharetra diam sit. Congue quisque egestas diam in .\n\nTristique magna sit amet purus gravida quis blandit turpis. Vitae congue eu consequat ac felis donec et odio pellentesque. Dui faucibus in ornare quam. Risus commodo viverra maecenas accumsan. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vel risus commodo viverra maecenas accumsan lacus vel. Nam libero justo laoreet sit amet cursus sit. Nec ultrices dui sapien eget mi proin sed libero. Elementum eu facilisis sed odio morbi quis commodo. Neque vitae tempus quam pellentesque nec nam aliquam. Arcu odio ut sem nulla pharetra diam sit. Leo vel fringilla est ullamcorper. Sollicitudin ac orci phasellus egestas. Duis ut diam quam nulla. Risus quis varius quam quisque id diam vel quam elementum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Nulla facilisi cras fermentum odio eu. Amet commodo nulla facilisi nullam vehicula.','\n',char(10)),'Internal, Communication, Announcement');
INSERT INTO user_support_mail_templates VALUES(1,'002_support_filename','mail_to_define','[OBJECT] 002_support_filename',replace('002_support_filename : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet. Semper viverra nam libero justo laoreet sit amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Scelerisque in dictum non consectetur a erat nam at. Feugiat vivamus at augue eget arcu. Bibendum enim facilisis gravida neque convallis a cras. Lorem sed risus ultricies tristique. Vitae suscipit tellus mauris a diam maecenas. Sodales neque sodales ut etiam. Tellus id interdum velit laoreet id donec. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu.\n\nConvallis posuere morbi leo urna molestie at elementum. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in . Est sit amet facilisis magna etiam tempor orci eu. Justo eget magna fermentum iaculis eu. Parturient montes nascetur ridiculus mus mauris vitae. Sit amet consectetur adipiscing elit duis. Aliquet eget sit amet tellus cras adipiscing enim. Sed elementum tempus egestas sed sed risus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Et molestie ac feugiat sed. Blandit aliquam etiam erat velit. Porttitor eget dolor morbi non arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Eget dolor morbi non arcu risus quis varius. Sit amet cursus sit amet dictum sit amet justo donec. Enim ut tellus elementum sagittis. Quam pellentesque nec nam aliquam sem et tortor. Est pellentesque elit ullamcorper dignissim cras. Nec ullamcorper sit amet risus nullam. Vitae auctor eu augue ut lectus arcu bibendum.\n\nAc feugiat sed lectus vestibulum mattis ullamcorper. Diam quam nulla porttitor massa id neque. A diam sollicitudin tempor id. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. In arcu cursus euismod quis viverra nibh cras pulvinar. Dignissim enim sit amet venenatis urna. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Etiam dignissim diam quis enim lobortis. Porta lorem mollis aliquam ut porttitor leo a. Nam aliquam sem et tortor. Sed id semper risus in . Nec ultrices dui sapien eget mi proin sed. Cursus metus aliquam eleifend mi in nulla. Augue mauris augue neque gravida in . Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.\n\nLacus luctus accumsan tortor posuere ac. Donec enim diam vulputate ut. Tincidunt augue interdum velit euismod in . Lectus proin nibh nisl condimentum id venenatis a. Sagittis aliquam malesuada bibendum arcu vitae. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Arcu odio ut sem nulla pharetra diam sit amet. Est pellentesque elit ullamcorper dignissim. Turpis nunc eget lorem dolor sed viverra. Neque vitae tempus quam pellentesque nec. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique senectus et netus et malesuada fames. Ac auctor augue mauris augue neque. Nibh mauris cursus mattis molestie a iaculis at. Nulla malesuada pellentesque elit eget gravida. Mauris rhoncus aenean vel elit scelerisque. Id ornare arcu odio ut sem nulla pharetra diam sit. Congue quisque egestas diam in .\n\nTristique magna sit amet purus gravida quis blandit turpis. Vitae congue eu consequat ac felis donec et odio pellentesque. Dui faucibus in ornare quam. Risus commodo viverra maecenas accumsan. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vel risus commodo viverra maecenas accumsan lacus vel. Nam libero justo laoreet sit amet cursus sit. Nec ultrices dui sapien eget mi proin sed libero. Elementum eu facilisis sed odio morbi quis commodo. Neque vitae tempus quam pellentesque nec nam aliquam. Arcu odio ut sem nulla pharetra diam sit. Leo vel fringilla est ullamcorper. Sollicitudin ac orci phasellus egestas. Duis ut diam quam nulla. Risus quis varius quam quisque id diam vel quam elementum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Nulla facilisi cras fermentum odio eu. Amet commodo nulla facilisi nullam vehicula.','\n',char(10)),'External, Support, Users, Account, Creation, External, Access, Activation');
INSERT INTO user_support_mail_templates VALUES(2,'003_support_filename','mail_to_define','[OBJECT] 003_support_filename',replace('003_support_filename : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet. Semper viverra nam libero justo laoreet sit amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Scelerisque in dictum non consectetur a erat nam at. Feugiat vivamus at augue eget arcu. Bibendum enim facilisis gravida neque convallis a cras. Lorem sed risus ultricies tristique. Vitae suscipit tellus mauris a diam maecenas. Sodales neque sodales ut etiam. Tellus id interdum velit laoreet id donec. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu.\n\nConvallis posuere morbi leo urna molestie at elementum. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in . Est sit amet facilisis magna etiam tempor orci eu. Justo eget magna fermentum iaculis eu. Parturient montes nascetur ridiculus mus mauris vitae. Sit amet consectetur adipiscing elit duis. Aliquet eget sit amet tellus cras adipiscing enim. Sed elementum tempus egestas sed sed risus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Et molestie ac feugiat sed. Blandit aliquam etiam erat velit. Porttitor eget dolor morbi non arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Eget dolor morbi non arcu risus quis varius. Sit amet cursus sit amet dictum sit amet justo donec. Enim ut tellus elementum sagittis. Quam pellentesque nec nam aliquam sem et tortor. Est pellentesque elit ullamcorper dignissim cras. Nec ullamcorper sit amet risus nullam. Vitae auctor eu augue ut lectus arcu bibendum.\n\nAc feugiat sed lectus vestibulum mattis ullamcorper. Diam quam nulla porttitor massa id neque. A diam sollicitudin tempor id. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. In arcu cursus euismod quis viverra nibh cras pulvinar. Dignissim enim sit amet venenatis urna. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Etiam dignissim diam quis enim lobortis. Porta lorem mollis aliquam ut porttitor leo a. Nam aliquam sem et tortor. Sed id semper risus in . Nec ultrices dui sapien eget mi proin sed. Cursus metus aliquam eleifend mi in nulla. Augue mauris augue neque gravida in . Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.\n\nLacus luctus accumsan tortor posuere ac. Donec enim diam vulputate ut. Tincidunt augue interdum velit euismod in . Lectus proin nibh nisl condimentum id venenatis a. Sagittis aliquam malesuada bibendum arcu vitae. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Arcu odio ut sem nulla pharetra diam sit amet. Est pellentesque elit ullamcorper dignissim. Turpis nunc eget lorem dolor sed viverra. Neque vitae tempus quam pellentesque nec. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique senectus et netus et malesuada fames. Ac auctor augue mauris augue neque. Nibh mauris cursus mattis molestie a iaculis at. Nulla malesuada pellentesque elit eget gravida. Mauris rhoncus aenean vel elit scelerisque. Id ornare arcu odio ut sem nulla pharetra diam sit. Congue quisque egestas diam in .\n\nTristique magna sit amet purus gravida quis blandit turpis. Vitae congue eu consequat ac felis donec et odio pellentesque. Dui faucibus in ornare quam. Risus commodo viverra maecenas accumsan. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vel risus commodo viverra maecenas accumsan lacus vel. Nam libero justo laoreet sit amet cursus sit. Nec ultrices dui sapien eget mi proin sed libero. Elementum eu facilisis sed odio morbi quis commodo. Neque vitae tempus quam pellentesque nec nam aliquam. Arcu odio ut sem nulla pharetra diam sit. Leo vel fringilla est ullamcorper. Sollicitudin ac orci phasellus egestas. Duis ut diam quam nulla. Risus quis varius quam quisque id diam vel quam elementum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Nulla facilisi cras fermentum odio eu. Amet commodo nulla facilisi nullam vehicula.','\n',char(10)),'Internal, Communication, Announcement');
INSERT INTO user_support_mail_templates VALUES(3,'004_support_filename','mail_to_define','[OBJECT] 004_support_filename',replace('004_support_filename : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet. Semper viverra nam libero justo laoreet sit amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Scelerisque in dictum non consectetur a erat nam at. Feugiat vivamus at augue eget arcu. Bibendum enim facilisis gravida neque convallis a cras. Lorem sed risus ultricies tristique. Vitae suscipit tellus mauris a diam maecenas. Sodales neque sodales ut etiam. Tellus id interdum velit laoreet id donec. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu.\n\nConvallis posuere morbi leo urna molestie at elementum. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in . Est sit amet facilisis magna etiam tempor orci eu. Justo eget magna fermentum iaculis eu. Parturient montes nascetur ridiculus mus mauris vitae. Sit amet consectetur adipiscing elit duis. Aliquet eget sit amet tellus cras adipiscing enim. Sed elementum tempus egestas sed sed risus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Et molestie ac feugiat sed. Blandit aliquam etiam erat velit. Porttitor eget dolor morbi non arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Eget dolor morbi non arcu risus quis varius. Sit amet cursus sit amet dictum sit amet justo donec. Enim ut tellus elementum sagittis. Quam pellentesque nec nam aliquam sem et tortor. Est pellentesque elit ullamcorper dignissim cras. Nec ullamcorper sit amet risus nullam. Vitae auctor eu augue ut lectus arcu bibendum.\n\nAc feugiat sed lectus vestibulum mattis ullamcorper. Diam quam nulla porttitor massa id neque. A diam sollicitudin tempor id. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. In arcu cursus euismod quis viverra nibh cras pulvinar. Dignissim enim sit amet venenatis urna. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Etiam dignissim diam quis enim lobortis. Porta lorem mollis aliquam ut porttitor leo a. Nam aliquam sem et tortor. Sed id semper risus in . Nec ultrices dui sapien eget mi proin sed. Cursus metus aliquam eleifend mi in nulla. Augue mauris augue neque gravida in . Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.\n\nLacus luctus accumsan tortor posuere ac. Donec enim diam vulputate ut. Tincidunt augue interdum velit euismod in . Lectus proin nibh nisl condimentum id venenatis a. Sagittis aliquam malesuada bibendum arcu vitae. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Arcu odio ut sem nulla pharetra diam sit amet. Est pellentesque elit ullamcorper dignissim. Turpis nunc eget lorem dolor sed viverra. Neque vitae tempus quam pellentesque nec. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique senectus et netus et malesuada fames. Ac auctor augue mauris augue neque. Nibh mauris cursus mattis molestie a iaculis at. Nulla malesuada pellentesque elit eget gravida. Mauris rhoncus aenean vel elit scelerisque. Id ornare arcu odio ut sem nulla pharetra diam sit. Congue quisque egestas diam in .\n\nTristique magna sit amet purus gravida quis blandit turpis. Vitae congue eu consequat ac felis donec et odio pellentesque. Dui faucibus in ornare quam. Risus commodo viverra maecenas accumsan. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vel risus commodo viverra maecenas accumsan lacus vel. Nam libero justo laoreet sit amet cursus sit. Nec ultrices dui sapien eget mi proin sed libero. Elementum eu facilisis sed odio morbi quis commodo. Neque vitae tempus quam pellentesque nec nam aliquam. Arcu odio ut sem nulla pharetra diam sit. Leo vel fringilla est ullamcorper. Sollicitudin ac orci phasellus egestas. Duis ut diam quam nulla. Risus quis varius quam quisque id diam vel quam elementum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Nulla facilisi cras fermentum odio eu. Amet commodo nulla facilisi nullam vehicula.','\n',char(10)),'External, Support, Users, Account, Creation, External, Access, Activation');
INSERT INTO user_support_mail_templates VALUES(4,'005_support_filename','mail_to_define','[OBJECT] 005_support_filename',replace('005_support_filename : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet. Semper viverra nam libero justo laoreet sit amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Scelerisque in dictum non consectetur a erat nam at. Feugiat vivamus at augue eget arcu. Bibendum enim facilisis gravida neque convallis a cras. Lorem sed risus ultricies tristique. Vitae suscipit tellus mauris a diam maecenas. Sodales neque sodales ut etiam. Tellus id interdum velit laoreet id donec. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu.\n\nConvallis posuere morbi leo urna molestie at elementum. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in . Est sit amet facilisis magna etiam tempor orci eu. Justo eget magna fermentum iaculis eu. Parturient montes nascetur ridiculus mus mauris vitae. Sit amet consectetur adipiscing elit duis. Aliquet eget sit amet tellus cras adipiscing enim. Sed elementum tempus egestas sed sed risus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Et molestie ac feugiat sed. Blandit aliquam etiam erat velit. Porttitor eget dolor morbi non arcu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Eget dolor morbi non arcu risus quis varius. Sit amet cursus sit amet dictum sit amet justo donec. Enim ut tellus elementum sagittis. Quam pellentesque nec nam aliquam sem et tortor. Est pellentesque elit ullamcorper dignissim cras. Nec ullamcorper sit amet risus nullam. Vitae auctor eu augue ut lectus arcu bibendum.\n\nAc feugiat sed lectus vestibulum mattis ullamcorper. Diam quam nulla porttitor massa id neque. A diam sollicitudin tempor id. Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus. In arcu cursus euismod quis viverra nibh cras pulvinar. Dignissim enim sit amet venenatis urna. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Etiam dignissim diam quis enim lobortis. Porta lorem mollis aliquam ut porttitor leo a. Nam aliquam sem et tortor. Sed id semper risus in . Nec ultrices dui sapien eget mi proin sed. Cursus metus aliquam eleifend mi in nulla. Augue mauris augue neque gravida in . Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.\n\nLacus luctus accumsan tortor posuere ac. Donec enim diam vulputate ut. Tincidunt augue interdum velit euismod in . Lectus proin nibh nisl condimentum id venenatis a. Sagittis aliquam malesuada bibendum arcu vitae. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Arcu odio ut sem nulla pharetra diam sit amet. Est pellentesque elit ullamcorper dignissim. Turpis nunc eget lorem dolor sed viverra. Neque vitae tempus quam pellentesque nec. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique senectus et netus et malesuada fames. Ac auctor augue mauris augue neque. Nibh mauris cursus mattis molestie a iaculis at. Nulla malesuada pellentesque elit eget gravida. Mauris rhoncus aenean vel elit scelerisque. Id ornare arcu odio ut sem nulla pharetra diam sit. Congue quisque egestas diam in .\n\nTristique magna sit amet purus gravida quis blandit turpis. Vitae congue eu consequat ac felis donec et odio pellentesque. Dui faucibus in ornare quam. Risus commodo viverra maecenas accumsan. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vel risus commodo viverra maecenas accumsan lacus vel. Nam libero justo laoreet sit amet cursus sit. Nec ultrices dui sapien eget mi proin sed libero. Elementum eu facilisis sed odio morbi quis commodo. Neque vitae tempus quam pellentesque nec nam aliquam. Arcu odio ut sem nulla pharetra diam sit. Leo vel fringilla est ullamcorper. Sollicitudin ac orci phasellus egestas. Duis ut diam quam nulla. Risus quis varius quam quisque id diam vel quam elementum. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Nulla facilisi cras fermentum odio eu. Amet commodo nulla facilisi nullam vehicula.','\n',char(10)),'External, Support, Users, Account, Creation, External, Access, Activation');
COMMIT;
