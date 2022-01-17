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

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
