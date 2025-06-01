# 📋 Mega To-Do Backend

Este é o backend do projeto **Mega To-Do**, feito em Node.js + Express com autenticação JWT e banco de dados via Prisma + PostgreSQL (ou outro banco suportado).

## ✅ Funcionalidades

- Registro e login de usuário
- Autenticação com JWT
- CRUD completo de tarefas por usuário
- Filtros e exclusão em massa de tarefas concluídas

---

## 🚀 Como rodar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/backMega_ToDo.git
cd backMega_ToDo
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz com:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seubanco"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

### 4. Gere o client do Prisma e rode as migrações

```bash
npx prisma generate
npx prisma migrate dev --name init
```

> Isso criará as tabelas no seu banco.

### 5. Inicie o servidor

```bash
npm run dev
```

---

## 🧪 Testes via `curl`

### 🔐 Auth

#### Registro

```bash
curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"name": "João", "email": "joao@email.com", "password": "123456"}'
```

#### Login

```bash
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email": "joao@email.com", "password": "123456"}'
```

> Você receberá um `token`. Use ele nas rotas abaixo.

---

## 📌 Rotas de Tarefa (autenticadas)

Use o token com o header:

```bash
-H "Authorization: Bearer SEU_TOKEN"
```

#### Criar tarefa

```bash
curl -X POST http://localhost:3000/api/task/create -H "Content-Type: application/json" -H "Authorization: Bearer SEU_TOKEN" -d '{"title": "Estudar", "description": "Praticar Node.js", "dueDate": "2025-06-05T23:59:59.000Z"}'
```

#### Listar tarefas

```bash
curl -X GET http://localhost:3000/api/task/list -H "Authorization: Bearer SEU_TOKEN"
```

#### Atualizar tarefa

```bash
curl -X PUT http://localhost:3000/api/task/update/1 -H "Content-Type: application/json" -H "Authorization: Bearer SEU_TOKEN" -d '{"title": "Estudar muito"}'
```

#### Deletar tarefa

```bash
curl -X DELETE http://localhost:3000/api/task/delete/1 -H "Authorization: Bearer SEU_TOKEN"
```

#### Deletar todas concluídas

```bash
curl -X DELETE http://localhost:3000/api/task/deleteCompleted -H "Authorization: Bearer SEU_TOKEN"
```

#### Buscar por título

```bash
curl -X GET "http://localhost:3000/api/task/search?title=Estudar" -H "Authorization: Bearer SEU_TOKEN"
```

---

## 📁 Estrutura de pastas

```
src/
│
├── config/           # Configurações de JWT, Prisma, etc.
├── dao/              # Data Access Layer (Prisma)
├── domain/           # Tipos e entidades
├── routes/           # Rotas Express
├── service/          # Regras de negócio
├── middlewere/       # Middlewares (ex: auth)
└── index.ts          # Entrada da aplicação
```

---

## 🛠️ Stack usada

- Node.js + Express
- Prisma ORM
- PostgreSQL (ou MySQL/SQLite/SQL Server)
- JWT para autenticação
- TypeScript

---

## 💬 Dúvidas ou contribuições?

Abra uma issue ou pull request!
