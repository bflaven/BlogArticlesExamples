/*! E2E-FOV-CYPRESS */
/* 
* ***********************************************
*  Filename ::: debug.js
*  Description :: All elements to debug feature in FOV
*  Goal :: some debug functions called in the tests
* 
*  For more comprehensive examples of custom
*  commands please read more here:
*  https://on.cypress.io/custom-commands
*  ***********************************************
* 
*  Thanks to Anthony for the tip :);
*  
*/

/*
* CAUTION :: somme import needs a relative URL to be changed
*/

import {globalValues} from '../../fixtures/allValues';

let brandLang = globalValues.BRAND_LANG;
let deviceType = globalValues.DEVICE_TYPE;


const {fake} = require('faker');
const faker = require("faker");
import Chance from '../chance.min.js';

const chance = new Chance();


import {
    uniqueStringCode,
    generateRandomNum,
    randomAlphaCode,
    filePathImage,
    // Cropper
    filePathImageCropper,
    // Delete image
    filePathImageHeavyMeta,
    doRandomString,
    doRandomImageInsert,
    doRandomContentInsert,
    doRandomImageInsertSmall,
    doRandomImageInsertCk,
    doRandomImageInsertContent,
    doBroadcastDateInput,
    doRandomTime,
    doRandomBroadcastDateInput
} from '../utils';

import {
    utilsVariablesNewId,
    makeTodo,
    getFovLogoCss,
    // Class
    UtilityFov,
    fovInstance,
    getSetInitPerBrandLangValue,
    userDevice
} from '../utilsVariables';



export class  UtilityGetStuffForFovF24En {
  
  ShowMeLang(brandLang) {
    cy.log(brandLang)
  }


  
}


