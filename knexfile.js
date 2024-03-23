
module.exports = {
  client: 'mysql2',
  connection: {
    host:'localhost',
    port:3320,
    database:'base_de_dados',
    user:'usuario',
    password:'senha'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};


