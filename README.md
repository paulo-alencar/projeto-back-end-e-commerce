# E-commerce Backend - Geração Tech 3.0

Este é o projeto Backend de conclusão do curso de Desenvolvedor Web Full Stack pelo **Geração Tech 3.0**. A aplicação consiste em uma API REST desenvolvida para gerenciar um sistema de E-commerce, abrangendo desde o cadastro de usuários até a gestão de produtos e autenticação segura.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas:

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para criação de rotas e middlewares.
- **Sequelize**: ORM (Object-Relational Mapping) para integração com banco de dados PostgreSQL.
- **PostgreSQL (Supabase)**: Banco de dados relacional em nuvem para armazenamento de dados.
- **JWT (JSON Web Token)**: Biblioteca para autenticação de usuários via tokens.
- **bcryptjs**: Para hash seguro de senhas.
- **cors**: Middleware para permitir requisições cross-origin.
- **dotenv**: Para gestão de variáveis de ambiente.
- **Swagger (swagger-jsdoc + swagger-ui-express)**: Para documentação interativa da API.
- **nodemon**: Ferramenta de desenvolvimento para reinicialização automática do servidor.
- **sequelize-cli**: CLI para migrações e seeds do banco de dados.

## 📋 Funcionalidades Principais

- **Gestão de Usuários**: CRUD completo (Criação, Leitura, Atualização e Deleção) de usuários, com validação de senhas e hash seguro.
- **Autenticação**: Login seguro com geração de Token JWT para acesso às rotas protegidas.
- **Gestão de Categorias**: CRUD de categorias de produtos, com suporte a filtros e paginação.
- **Gestão de Produtos**: Cadastro, listagem, atualização e exclusão de produtos, incluindo associações com categorias, imagens e opções (como tamanho, cor).
- **Buscas Avançadas**: Filtros por nome, categoria, faixa de preço e opções de produto.
- **Segurança**: Rotas protegidas que exigem token de acesso via header `Authorization: Bearer <token>`.
- **Documentação**: Interface visual interativa para testes de rotas via Swagger.
- **Transações**: Operações complexas (como criação de produtos com associações) são executadas em transações para garantir integridade.

## 🔧 Como Rodar o Projeto

Siga os passos abaixo para configurar o ambiente local:

### 1. Pré-requisitos

- Node.js (versão 18 ou superior) instalado.
- PostgreSQL rodando (local ou via Supabase).

### 2. Clone o Repositório

```bash
git clone https://github.com/paulo-alencar/projeto-back-end-e-commerce.git
cd projeto-back-end-e-commerce
```

### 3. Instale as Dependências

```bash
npm install
```

### 4. Configure o arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto e adicione as suas credenciais de banco e JWT.

> Dica de Conexão: Para evitar erros de timeout (comum em conexões IPv4), utilize o Host do Connection Pooler do Supabase na porta `6543`.

```env
DB_HOST=seu-projeto.pooler.supabase.com
DB_USER=postgres
DB_PASSWORD=sua-senha-do-supabase
DB_NAME=postgres
DB_PORT=6543
JWT_SECRET=sua-chave-secreta-jwt
PORT=3001
```

### 5. Execute as Migrações do Banco (se aplicável)

Se houver migrações configuradas com Sequelize CLI:

```bash
npx sequelize-cli db:migrate
```

### 6. Inicie o Servidor

```bash
npm run dev
```

O servidor estará disponível em:

`http://localhost:3001`

## 📖 Documentação da API (Swagger)

A documentação interativa permite testar os endpoints diretamente pelo navegador. Com o projeto rodando, acesse:

`http://localhost:3001/api-docs`

## 🏗️ Estrutura de Pastas (MVC)

O projeto segue a arquitetura Model-View-Controller (MVC), organizada da seguinte forma:

- `src/app.js`: Configuração principal da aplicação Express, middlewares, Swagger e rotas.
- `src/server.js`: Arquivo de entrada para iniciar o servidor.
- `src/config/database.js`: Configuração de conexão com o banco de dados PostgreSQL.
- `src/database/index.js`: Inicialização do Sequelize e associações de modelos.
- `src/models/`: Definição dos modelos Sequelize (User, Category, Product, ProductImage, ProductOption).
- `src/controllers/`: Lógica de negócio para cada entidade (UserController, CategoryController, ProductController, AuthController).
- `src/routes/`: Definição dos endpoints da API (userRoutes, categoryRoutes, productRoutes).
- `src/middleware/auth.js`: Middleware de autenticação JWT para proteger rotas.
- `src/services/ProductService.js`: Serviço de domínio para operações complexas de produtos.
- `tests/`: Arquivos de teste para validação das funcionalidades.

## 🔗 Endpoints Principais

### Usuários

- `POST /v1/usuario` - Criar usuário
- `POST /v1/usuario/token` - Login (gerar token)
- `GET /v1/usuario/:id` - Buscar usuário por ID
- `PUT /v1/usuario/:id` - Atualizar usuário (autenticado)
- `DELETE /v1/usuario/:id` - Deletar usuário (autenticado)

### Categorias

- `GET /v1/categoria/pesquisa` - Buscar categorias com filtros
- `GET /v1/categoria/:id` - Buscar categoria por ID
- `POST /v1/categoria` - Criar categoria (autenticado)
- `PUT /v1/categoria/:id` - Atualizar categoria (autenticado)
- `DELETE /v1/categoria/:id` - Deletar categoria (autenticado)

### Produtos

- `GET /v1/produto/pesquisa` - Buscar produtos com filtros avançados
- `GET /v1/produto/:id` - Buscar produto por ID
- `POST /v1/produto` - Criar produto (autenticado)
- `PUT /v1/produto/:id` - Atualizar produto (autenticado)
- `DELETE /v1/produto/:id` - Deletar produto (autenticado)

---

### Desenvolvido por Paulo Alencar
