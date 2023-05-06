
/*

cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/split_class/try_2

node  utilityGetStuffForFov.js
node OneUtilityGetStuffForFov.js
node attemptOutput.js

 */

const UtilityFov = require('./utilityGetStuffForFov');
const OneUtilityGetStuffForFov = require('./OneUtilityGetStuffForFov');

const utility = new UtilityFov();
utility.getSelectionVerifier(); // calls the getSelectionVerifier method

const oneUtility = new OneUtilityGetStuffForFov();
oneUtility.getSelectionVerifier(); // calls the getSelectionVerifier method inherited from UtilityFov
oneUtility.oneGetSetInitPerBrandLang(); // calls the oneGetSetInitPerBrandLang method defined in OneUtilityGetStuffForFov




