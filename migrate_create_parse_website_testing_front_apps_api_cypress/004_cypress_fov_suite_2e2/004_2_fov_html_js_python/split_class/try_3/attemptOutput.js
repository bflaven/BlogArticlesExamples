
/*

cd /Users/brunoflaven/Documents/02_copy/_cypress_fov_suite_2e2/_html_js_python/split_class/try_2/

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



