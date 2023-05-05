
/*

cd /Users/brunoflaven/Documents/02_copy/_cypress_fov_suite_2e2/_html_js_python/split_class/try_2/

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




