const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Importar as rotas
const tasksRoutes = require("./routes/tasks");
app.use("/tasks", tasksRoutes);

// Mensagem de verificação na raiz
app.get("/", (req, res) => {
  res.send("API do To-Do List funcionando! 🚀");
});

// Iniciar o servidor
app.listen(3000, () => console.log("Backend rodando na porta 3000 🚀"));
