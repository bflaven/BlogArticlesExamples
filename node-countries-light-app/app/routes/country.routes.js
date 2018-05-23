/* country.routes.js */

module.exports = (app) => {
    const countries = require('../controllers/country.controller.js');

    
    // Create a new Country

    /**
    * @api {post} /countries Register a new country
    * @apiGroup Countries
    * @apiParam {String} countries.name Country name
    * @apiParam {String} countries.tld Country tld
    * @apiParam {String} countries.cca2 Country cca2
    * @apiParam {String} countries.capital Country capital
    * @apiParam {Number} countries.callingCode Country callingCode
    * @apiParamExample {json} Input
    *    {
    *   "name": "Tunisia",
    *   "tld": ".tn",
    *   "cca2": "TN",
    *   "capital": "Tunis",
    *   "callingCode": "216"
    * }
    * @apiSuccess {Number} countries.id Country id
    * @apiSuccess {String} countries.name Country name
    * @apiSuccess {String} countries.tld Country tld
    * @apiSuccess {String} countries.cca2 Country cca2
    * @apiSuccess {String} countries.capital Country capital
    * @apiSuccess {Number} countries.callingCode Country callingCode
    * @apiSuccess {Date} countries.createdAt Update's date
    * @apiSuccess {Date} countries.updatedAt Register's date
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *   "_id": "5b041ac6e3333f03fee37042",
    *   "name": "Tunisia",
    *   "capital": "Tunis",
    *   "tld": ".tn",
    *   "cca2": "TN",
    *   "callingCode": 216,
    *   "createdAt": "2018-05-22T13:27:34.919Z",
    *   "updatedAt": "2018-05-22T13:27:34.919Z",
    *   "__v": 0
    * }
    * @apiErrorExample {json} Register error
    *    HTTP/1.1 500 Internal Server Error
 */
    app.post('/countries', countries.create);

    


    // List all countries
    /**
    * @api {get} /countries List all countries
    * @apiGroup Countries
    * @apiSuccess {Object[]} list of Countries
    * @apiSuccess {Number} countries.id Country id
    * @apiSuccess {String} countries.name Country name
    * @apiSuccess {String} countries.tld Country tld
    * @apiSuccess {String} countries.cca2 Country cca2
    * @apiSuccess {String} countries.capital Country capital
    * @apiSuccess {Number} countries.callingCode Country callingCode
    * @apiSuccess {Date} countries.createdAt Update's date
    * @apiSuccess {Date} countries.updatedAt Register's date
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *         [{
    *            "_id": "5afd93b26ba7060f07aefdf1",
    *            "name": "Mauritania",
    *            "capital": "Nouakchott",
    *            "tld": ".mr",
    *            "cca2": "MR",
    *            "callingCode": 222,
    *            "createdAt": "2018-05-17T14:37:38.200Z",
    *            "updatedAt": "2018-05-17T14:37:38.200Z",
    *            "__v": 0
    *            },
    *            {
    *            "_id": "5afd93c06ba7060f07aefdf2",
    *            "name": "Afghanistan",
    *            "capital": "Kabul",
    *            "tld": ".af",
    *            "cca2": "AF",
    *            "callingCode": 93,
    *            "createdAt": "2018-05-17T14:37:52.337Z",
    *            "updatedAt": "2018-05-17T14:37:52.337Z",
    *            "__v": 0
    *        }]
    * @apiErrorExample {json} List error
    *    HTTP/1.1 500 Internal Server Error
    */
    app.get('/countries', countries.findAll);

    // Find a single country
    /**
    * @api {get} /countries Find a single country
    * @apiGroup Countries
    * @apiSuccess {Object[]} list of Countries
    * @apiSuccess {Number} countries.id Country id countryId
    * @apiSuccess {String} countries.name Country name
    * @apiSuccess {String} countries.tld Country tld
    * @apiSuccess {String} countries.cca2 Country cca2
    * @apiSuccess {String} countries.capital Country capital
    * @apiSuccess {Number} countries.callingCode Country callingCode
    * @apiSuccess {Date} countries.createdAt Update's date
    * @apiSuccess {Date} countries.updatedAt Register's date
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *       [{
    *            "_id": "5afd93d46ba7060f07aefdf5",
    *            "name": "Malaysia",
    *            "capital": "Kuala Lumpur",
    *            "tld": ".my",
    *            "cca2": "MY",
    *            "callingCode": 60,
    *            "createdAt": "2018-05-17T14:38:12.921Z",
    *            "updatedAt": "2018-05-17T14:38:12.921Z",
    *            "__v": 0
    *        }]
    * @apiErrorExample {json} List error
    *    HTTP/1.1 500 Internal Server Error
    */
    app.get('/countries/:countryId', countries.findOne);


    // Update a Country
    /**
    * @api {put} /countries/:countryId Update a Country
    * @apiGroup Countries
    * @apiParam {String} countries.name Country name
    * @apiParam {String} countries.tld Country tld
    * @apiParam {String} countries.cca2 Country cca2
    * @apiParam {String} countries.capital Country capital
    * @apiParam {Number} countries.callingCode Country callingCode
    * @apiParamExample {json} Input
    *        {
    *       "name": "Italy",
    *       "tld": ".it",
    *       "cca2": "IT",
    *       "capital": "Rome",
    *       "callingCode": "39"
    *   }
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 Content

    * {
    * "_id": "5afd93c76ba7060f07aefdf3",
    * "name": "Italy",
    * "capital": "Rome",
    * "tld": ".it",
    * "cca2": "IT",
    * "callingCode": 39,
    * "createdAt": "2018-05-17T14:37:59.303Z",
    * "updatedAt": "2018-05-22T13:39:07.608Z",
    * "__v": 0
    * }


    * @apiErrorExample {json} Update error
    *    HTTP/1.1 500 Internal Server Error
    */
    app.put('/countries/:countryId', countries.update);

    // Delete a Country
        /**
     * @api {delete} /countries/:countryId Remove a Country
     * @apiGroup Countries
     * @apiParam {countryId} _id The country id eg 5afd93b26ba7060f07aefdf1
     * @apiSuccessExample {json} Success
     * {
     *  "message": "Country deleted successfully!"
     * }
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 500 Internal Server Error
     */
    app.delete('/countries/:countryId', countries.delete);
}

