
const knex = require('../config/database')


const select = knex('users').select('id', 'first_name', 'salary').where('salary', '>', 5000)


console.log(select.toString())

select.then(data =>{
  console.log(data);
}).catch(e =>{
  console.log('ERRO:', e.message);
}).finally(()=>{
  knex.destroy()
})