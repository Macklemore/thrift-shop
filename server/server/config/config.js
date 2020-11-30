
require('dotenv').config(); // this is important!

module.exports = {
  "development": {
    "username": "cbadmin",
    "password": "cbadmin",
    "database": "cryptobay-dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "cbadmin",
    "password": "cbadmin",
    "database": "cryptobay-test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
};