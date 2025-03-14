const express = require("express");
const knex = require("../database");
const router = express.Router();

// Listar todas as tarefas
router.get("/", async (req, res) => {
  const tasks = await knex("tasks").select("*");
  res.json(tasks);
});

// Criar nova tarefa
router.post("/", async (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res
      .status(400)
      .json({ error: "O título da tarefa não pode estar vazio." });
  }

  try {
    const [id] = await knex("tasks").insert({ title });
    const newTask = await knex("tasks").where({ id }).first();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
    res.status(500).json({ error: "Erro ao adicionar tarefa." });
  }
});

// Atualizar tarefa (concluir ou não)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const task = await knex("tasks").where({ id }).first();
  if (!task) return res.status(404).json({ error: "Tarefa não encontrada" });

  await knex("tasks").where({ id }).update({ completed: !task.completed });
  const updatedTask = await knex("tasks").where({ id }).first();
  res.json(updatedTask);
});

// Remover tarefa
router.delete("/:id", async (req, res) => {
  const { id } = req.params; // Pegando o ID corretamente da URL

  try {
    const task = await knex("tasks").where({ id }).first();
    if (!task) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    await knex("tasks").where({ id }).delete();
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
    res.status(500).json({ error: "Erro interno ao tentar deletar tarefa" });
  }
});

module.exports = router;
