const knex = require('../config/database')


knex('users').then(data => {
  console.log(data)
})