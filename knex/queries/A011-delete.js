const knex = require('../config/database')

const deleteSql = knex('users').delete().whereBetween('id', [30,35])

console.log(deleteSql.toString());
console.log(deleteSql.toString())


deleteSql.then((data)=>{
  console.log(data);

  select.then((data)=>{
    console.log(data)
  }).catch((e)=>{
    console.log(e.message);
 });
}).catch((e)=>{
  console.log(e.message);
}).finally(()=>{
  knex.destroy()
});
