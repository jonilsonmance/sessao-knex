const knex = require('../config/database')


const data = [
  {
    first_name:'Joana',
    last_name: 'Silva',
    email:'joana@email.com',
    password_hash: '3_hash',
    salary: 4851.56
  },
  {
    first_name:'Helena',
    last_name: 'Musk',
    email:'helena@email.com',
    password_hash: '4_hash',
    salary: 5684.56
  },
  {
    first_name:'Jair',
    last_name: 'Messias',
    email:'jair@email.com',
    password_hash: '5_hash',
    salary: 15486.56
  },
];

const insert = knex('users').insert(data);

insert.then(data=>{
  console.log(data);
}).catch(e =>{
  console.log('ERRO:', e.message);
}).finally(()=>{
  knex.destroy()
})