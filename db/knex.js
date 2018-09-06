const environment = process.env.NODE_ENV || 'development';

const config = require('../knexfile')[environment];
//connect to database
module.exports = require('knex')(config);