const db = require('../../data/db-config'); //pulling in database

const getAll = () => {
  // DO YOUR MAGIC
  //select * from accounts;
  return db('accounts'); //this returns a promise in which the ACCOUNTS-ROUTER is using it!
}

const getById = id => {
  //select * from accounts where id = 1;
  return db('accounts').where('id', id).first()
}

const create = async account => {
  //insert into accounts (name, budget) values ('foo', 1000);
  const [id] = await db('accounts').insert(account) //insert returns a collection with the ids of the inserted records
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  //delete from accounts where id = 1;
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
