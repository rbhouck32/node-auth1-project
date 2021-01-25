const db = require("../../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("user_id", "username").orderBy("user_id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("user_id");
}

async function add(user) {
  const [id] = await db("users").insert(user, "user_id");
  return findById(user_id);
}

function findById(user_id) {
  return db("users").where({ user_id }).first();
}
