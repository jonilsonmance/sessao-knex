const knex = require('../../knex/config/database')


const select = knex('users').select('id','email', 'first_name', 'salary');

select.then(data =>{
  for(const user of data){
    console.log(user)
  }
}).catch(e =>{
  console.log('ERRO:', e.message);
}).finally(()=>{
  knex.destroy()
})