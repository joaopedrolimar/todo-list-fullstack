const knex = require("./database");

knex.schema
  .createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.boolean("completed").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  })
  .then(() => {
    console.log("Tabela 'tasks' criada!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Erro ao criar tabela:", err);
    process.exit(1);
  });
