import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ setTasks }) => {
  const [text, setText] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Evita envio vazio
    const response = await axios.post("http://localhost:3000/tasks", {
      title: text,
    }); // Certifique-se de que o nome do campo é "title"
    setTasks((prev) => [...prev, response.data]);
    setText("");
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova Tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
