/**
 * Postman node_countries_light_app
 * Script file : test_the_api.js
 * Version : 1.0
 * Description: Test the Country Light App made with Node
 * Collection : node_countries_light_app.postman_collection.json
*/



var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:3000');


describe('CHECK HOME \n', function() {

it('should return a 200 response', function(done) {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200,done);
  });


it('should return a correct message response', function(done) {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200)
    .end(function(err, res) {      
      expect(res.body).to.have.property("message");
      expect(res.body.message).to.not.equal(null);
      expect(res.body.message).to.equal("Hello, hello, Yallah, Welcome to Country Light App. A prototype to play with Countries");
      done();

    });
  });

});// END Describe


describe('CHECK COUNTRIES \n', function() {

  it('should return a 200 response', function(done) {
    api.get('/countries')
    .set('Accept', 'application/json')
    .expect(200,done);
  });

  });// END Describe

describe('CHECK SINGLE COUNTRY \n', function() {

it('should be an object with keys and values', function(done) {
    api.get('/countries/5afd93c76ba7060f07aefdf3')
    .set('Accept', 'application/json')
    .expect(200)
    .end(function(err, res) {
      expect(res.body).to.have.property("name");
      expect(res.body.title).to.not.equal(null);
      expect(res.body).to.have.property("capital");
      expect(res.body.content).to.not.equal(null);
      expect(res.body).to.have.property("tld");
      expect(res.body.content).to.not.equal(null);
      expect(res.body).to.have.property("cca2");
      expect(res.body.content).to.not.equal(null);
      expect(res.body).to.have.property("callingCode");
      expect(res.body.content).to.not.equal(null);
      expect(res.body).to.have.property("createdAt");
      expect(res.body.createdAt).to.not.equal(null);
      expect(res.body).to.have.property("updatedAt");
      expect(res.body.updatedAt).to.not.equal(null);
      done();
    });
  });

it('should be updated with a new name and capital for Italy in Italian', function(done) {
    api.put('/countries/5afd93c76ba7060f07aefdf3')
    .set('Accept', 'application/x-www-form-urlencoded')
    .send({
      name:"Italia",
      tld:".it", 
      cca2:"IT",
      capital:"Roma", 
      callingCode:39

    })
    .expect(200)
    .end(function(err, res) {
      expect(res.body.name).to.equal("Italia");
      expect(res.body.capital).to.equal("Roma");
      done();
    });
  });

it('should have a 2 digit cca2', function(done) {
    api.get('/countries/5afd93c76ba7060f07aefdf3')
    .set('Accept', 'application/json')
    .expect(200)
    .end(function(err, res) {
      expect(res.body.cca2.length).to.equal(2);
      done();
    });
  });


it('should have a 2 digit callingCode', function(done) {
    api.get('/countries/5afd93c76ba7060f07aefdf3')
    .set('Accept', 'application/json')
    .expect(200)
    .end(function(err, res) {
      expect(res.body.callingCode.toString().length).to.equal(2);
      done();
    });
  });


});// END Describe

