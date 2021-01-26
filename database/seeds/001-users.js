exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "rbhouck32",
      password: "1234",
      first_name: "Rob",
      last_name: "Houck",
      email: "rbhouck32@gmail.com",
    },
    {
      username: "stwining07",
      password: "1234",
      first_name: "Sean",
      last_name: "Twining",
      email: "stwining@gmail.com",
    },
    {
      username: "cdtrumbull54",
      password: "1234",
      first_name: "Chris",
      last_name: "Trumbull",
      email: "cdtrumbull@gmail.com",
    },
  ]);
};
