'use strict';

const faker = require('faker'); //Faker library used for generating fake data

let charities = [
  {
    name: "BC Cancer Foundation",
    website: "https://bccancerfoundation.com/"
  },
  {
    name: "Canadian Red Cross",
    website: "https://www.redcross.ca/"
  },
  {
    name: "Canadian Red Cross",
    website: "https://www.redcross.ca/"
  },
  {
    name: "BC Children's Hospital",
    website: "http://www.bcchildrens.ca/donate"
  },
  {
    name: "Ronald McDonald House BC & Yukon",
    website: "https://rmhbc.ca/"
  }
]

for(let i = 0; i < charities.length; i++) {
  charities[i].createdAt = faker.date.between('2018-01-01', '2018-08-01');
  charities[i].updatedAt = new Date();
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Charities', charities, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
