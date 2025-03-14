const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./tasks.db",
  },
  useNullAsDefault: true,
});

module.exports = knex;
