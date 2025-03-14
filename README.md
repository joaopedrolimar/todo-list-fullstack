Este projeto é um gerenciador de tarefas (To-Do List) desenvolvido como parte de um desafio de estágio. Ele permite que os usuários adicionem, concluam e removam tarefas.

A aplicação foi construída utilizando ReactJS (Vite) no frontend, Node.js (Express) no backend e SQLite como banco de dados.

Tecnologias Utilizadas
Frontend: ReactJS (Vite) + Axios
Backend: Node.js (Express) + Knex.js
Banco de Dados: SQLite
Gerenciamento de Estado: useState + useEffect
Comunicação: API RESTful

todo-list-fullstack/
│── backend/               # Servidor Node.js
│   ├── database.js        # Configuração do SQLite
│   ├── index.js           # Servidor Express
│   ├── migrate.js         # Script para criar o banco
│   ├── routes/            # Rotas da API
│   │   ├── tasks.js       # Rotas CRUD das tarefas
│   ├── package.json       # Dependências do backend
│── frontend/              # Aplicação React
│   ├── src/               # Código-fonte do frontend
│   │   ├── components/    # Componentes da interface
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskForm.jsx
│   │   ├── App.jsx        # Componente principal
│   ├── public/            # Arquivos estáticos
│   ├── package.json       # Dependências do frontend
│── README.md              # Documentação do projeto

Como Executar o Projeto:
Clonar o Repositório.
git clone https://github.com/joaopedrolimar/todo-list-fullstack.git
cd todo-list-fullstack

Funcionalidades
 Adicionar tarefas
 Listar tarefas
 Marcar tarefas como concluídas
 Remover tarefas
 Persistência no banco de dados

