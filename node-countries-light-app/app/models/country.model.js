/* countries.model.js */

const mongoose = require('mongoose');


const CountrySchema = mongoose.Schema({
    name: String,
    tld: String,
    cca2: String,
    capital: String,
    callingCode: Number


}, {
    timestamps: true
});

module.exports = mongoose.model('Country', CountrySchema);