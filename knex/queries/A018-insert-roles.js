const knex = require('../config/database')


const insert = knex('roles').insert([
  {name: 'POST'}, 
  {name: 'PUT'}, 
  {name: 'DELETE'}, 
  {name: 'FET'}, 
]);


insert.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});