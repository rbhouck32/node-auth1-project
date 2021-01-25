const { table } = require("../connection");

exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("user_id");

    tbl.string("username", 128).notNullable().unique().index();
    tbl.string("password", 128).notNullable();
    tbl.string("first_name", 128).notNullable();
    tbl.string("last_name", 128).notNullable();
    tbl.string("email", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
