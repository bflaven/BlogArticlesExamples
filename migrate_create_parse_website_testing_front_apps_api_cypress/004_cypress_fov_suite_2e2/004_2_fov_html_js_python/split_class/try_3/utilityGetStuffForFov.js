




class UtilityFov {
  // private class features
  #brandLang;
  #deviceType;

    constructor(brandLang, deviceType) {
        
      this.#brandLang = brandLang;
      this.#deviceType = deviceType;

    }//EOC
  
  getSelectionVerifier(brandLang) {
    // implementation
    console.log('UtilityFov :: getSelectionVerifier :: '+brandLang)

  }

  getDeviceType(deviceType) {
    // implementation
    console.log('UtilityFov :: getDeviceType:: '+deviceType)

  }
}

module.exports = UtilityFov;
