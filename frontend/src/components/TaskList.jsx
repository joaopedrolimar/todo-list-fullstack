import React from "react";
import axios from "axios";

const TaskList = ({ tasks, setTasks }) => {
  const toggleTask = async (id) => {
    await axios.put(`http://localhost:3000/tasks/${id}`);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {/* Nome da tarefa, que agora aparece corretamente */}
          <span
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.title} {/* Alterado para 'title' */}
          </span>

          {/* Botão para marcar como concluída ✅ */}
          <button onClick={() => toggleTask(task.id)}>✅</button>

          {/* Botão para deletar ❌ */}
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
