
(**
 * This file is part of the book package: "Learning and Building E2E test automation with Cypress & OKR 
 * Introduction to a "testing" framework Cypress. Usecase with WordPress."
 * (c) Bruno Flaven <info@flaven.fr>
 * 
 * Check the book at https://www.amazon.com/dp/B0BP216HCW/
 *
 * @package E2E-CYPRESS-APPS
 * @subpackage APPS
 * @since Cypress 12.10.0, Node v18.12.1  
 *)

set MY_PATH to "open -a 'Terminal' /Users/brunoflaven/Documents/01_work/blog_articles/migrate_create_parse_website_testing_front_cypress/_done_launcher_suite_cypress"

(**
* 
* Set your own path if needed
*  
 *)
--- set MY_PATH to "open -a 'Terminal' /Users/[username]/Cypress-Apps"

set CMD_1 to "pwd"
set CMD_2 to "node --version"
set CMD_3 to "npm --version"
set CMD_4 to "npm run cy:open:chrome"


-- set THEME to "Ocean"
set THEME to "Homebrew"

--- say "Launch the testing suite" using "Ralph"

tell application "Terminal"
	do shell script MY_PATH
	set current settings of window 1 to settings set THEME
	do script CMD_1 in window 1
	do script CMD_2 in window 1
	do script CMD_3 in window 1
	delay 1 -- pause for a second	
	do script CMD_4 in window 1
	delay 1 -- pause for a second
end tell


