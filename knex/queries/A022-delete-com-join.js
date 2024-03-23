const knex = require('../config/database')

const deleteSql = knex.raw(`
  delete p, u from users u
  inner join profiles as p
  on p.user_id = u.id
  where u.first_name = ? and p.bio like ?;
`, ['Wayne', '%Wayne%']);

console.log(deleteSql.toString());

deleteSql.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e.message);
}).finally(() => {
  knex.destroy();
});