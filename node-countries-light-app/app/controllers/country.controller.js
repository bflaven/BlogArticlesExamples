/* country.controller.js */

const Country = require('../models/country.model.js');

// Create and Save a new Country
exports.create = (req, res) => {
    // Validate request
    if(!req.body.capital) {
        return res.status(400).send({
            message: "Each Country must have a capital"
        });
    }

    // Create a Country
    const country = new Country({
        name: req.body.name || "Untitled Country, missing name", 
        capital: req.body.capital,
        tld: req.body.tld,
        cca2: req.body.cca2,
        callingCode: req.body.callingCode
    });

    // Save Country in the database
    country.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Country."
        });
    });
};

// Retrieve and return all countries from the database.
exports.findAll = (req, res) => {
    Country.find()
    .then(countries => {
        res.send(countries);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving countries."
        });
    });
};

// Find a single country with a countryId
exports.findOne = (req, res) => {
    Country.findById(req.params.countryId)
    .then(country => {
        if(!country) {
            return res.status(404).send({
                message: "Country not found with id " + req.params.countryId
            });            
        }
        res.send(country);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Country not found with id " + req.params.countryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving country with id " + req.params.countryId
        });
    });
};

// Update a country identified by the countryId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.capital) {
        return res.status(400).send({
            message: "Country capital can not be empty"
        });
    }

    // Find a country and update it with the request body
    Country.findByIdAndUpdate(req.params.countryId, {
        
        name: req.body.name || "Untitled Country",
        capital: req.body.capital,
        tld: req.body.tld,
        cca2: req.body.cca2,
        callingCode: req.body.callingCode

    }, {new: true})
    .then(country => {
        if(!country) {
            return res.status(404).send({
                message: "Country not found with id " + req.params.countryId
            });
        }
        res.send(country);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Country not found with id " + req.params.countryId
            });                
        }
        return res.status(500).send({
            message: "Error updating Country with id " + req.params.countryId
        });
    });
};

// Delete a country with the specified countryId in the request
exports.delete = (req, res) => {
    Country.findByIdAndRemove(req.params.countryId)
    .then(country => {
        if(!country) {
            return res.status(404).send({
                message: "Country not found with id " + req.params.countryId
            });
        }
        res.send({message: "Country deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Country not found with id " + req.params.countryId
            });                
        }
        return res.status(500).send({
            message: "Could not delete country with id " + req.params.countryId
        });
    });
};
