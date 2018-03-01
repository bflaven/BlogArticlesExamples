//  users_russian.js


var faker = require('faker');

/*
Check https://github.com/marak/Faker.js/ for Localization
*/
// sets locale
// faker.locale = "ru" // (Russian)
// faker.locale = "pt_BR" // (Português do Brasil)
// faker.locale = "it" // (Italian)
// faker.locale = "fr" // (French)
// faker.locale = "es" // (Spanish)


faker.locale = "ru"; // (Russian)

var db = { users: [] };

for (var i=1; i<=1000; i++) {
  db.users.push({
            id: i,
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            city: faker.address.city(),
            email: faker.internet.email()
  });
}
console.log(JSON.stringify(db));

