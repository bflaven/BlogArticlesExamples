
/*

cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/split_class/try_3

node  utilityGetStuffForFov.js
node OneUtilityGetStuffForFov.js
node attemptOutput.js

 */

let brandLang ='RFI_RU'; 
let deviceType = 'mobile'


// file_1
const UtilityFov = require('./utilityGetStuffForFov');
const utility = new UtilityFov();

// file_2
const OneUtilityGetStuffForFov = require('./OneUtilityGetStuffForFov');
const oneUtility = new OneUtilityGetStuffForFov();

utility.getSelectionVerifier(brandLang);
utility.getDeviceType(deviceType);
oneUtility.oneGetSetInitPerBrandLang(brandLang);



