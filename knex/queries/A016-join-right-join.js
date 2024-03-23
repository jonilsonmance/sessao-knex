const knex = require('../config/database')


const select = knex('users as u')
.select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
.rightJoin('profiles as p', 'u.id', 'p.user_id')
.where('u.id', '<', '12')
.orderBy('u.id', 'asc')
.limit(5)


select.then((data)=>{
  console.log(data);
}).catch((e)=>{
  console.log(e.message);
}).finally(()=>{
  knex.destroy();
});