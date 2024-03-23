const knex = require('../config/database')

const selectBetween = knex('users')
  .select('id', 'first_name', 'salary')
  .where('first_name', 'like', '%jair%')

console.log(selectBetween.toString());

selectBetween.then((data)=>{
  console.log(data)
}).catch(e =>{
  console.log('ERRO:', e.message);
}).finally(()=>{
  knex.destroy()
})