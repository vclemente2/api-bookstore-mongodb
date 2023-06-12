# **Bookstore API**

Este é um projeto acadêmico de uma API que simula parte de um sistema de gerenciamento de uma livraria. A API utiliza o MongoDB Atlas como banco de dados. Abaixo, você encontrará informações sobre a configuração do ambiente para utilização da API localmente, bem como os recursos disponíveis.

## **Configuração do Ambiente**

Para utilizar a API localmente, é necessário configurar algumas variáveis de ambiente. Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir.

### **Variáveis de Ambiente**

As seguintes variáveis de ambiente devem ser configuradas:

- `PORT`: Porta em que a API será executada localmente.
- `DB_USER`: Nome de usuário para acesso ao banco de dados MongoDB Atlas.
- `DB_PASS`: Senha para acesso ao banco de dados MongoDB Atlas.
- `DB_CLUSTER`: Nome do cluster do MongoDB Atlas.
- `DB_NAME`: Nome do banco de dados a ser utilizado.

Você pode definir essas variáveis de ambiente em um arquivo `.env` na raiz do projeto.

Exemplo de arquivo `.env`:

```
PORT=3000
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_CLUSTER=seu_cluster
DB_NAME=seu_banco_de_dados
```

### **Instalação das Dependências**

Antes de executar a API, instale as dependências necessárias. No diretório raiz do projeto, execute o seguinte comando:

```bash
npm install
```

### **Executando a API**

Após a instalação das dependências, configuração do banco de dados e das
variáveis de ambiente, você pode executar a API com o seguinte comando:

```bash
npm run dev
```

A API estará disponível em http://localhost:3000.

Isso conclui a configuração da API. Certifique-se de ter configurado
corretamente todas as variáveis de ambiente e seguido as etapas corretamente
para garantir um ambiente funcional.

## **Recursos da API**

A API possui os seguintes recursos:

### **Autores**

#### `GET /authors`

Retorna todos os autores cadastrados.

#### `GET /authors/:id`

Retorna um autor específico com base no ID fornecido.

#### `POST /authors`

Cria um novo autor. Os dados do autor devem ser enviados no corpo da solicitação.

#### `PUT /authors/:id`

Atualiza um autor existente com base no ID fornecido. Os novos dados do autor devem ser enviados no corpo da solicitação.

#### `DELETE /authors/:id`

Remove um autor específico com base no ID fornecido.

### **Livros**

#### `GET /books`

Retorna todos os livros cadastrados.

#### `GET /books/:id`

Retorna um livro específico com base no ID fornecido.

#### `POST /books`

Cria um novo livro. Os dados do livro devem ser enviados no corpo da solicitação.

#### `PUT /books/:id`

Atualiza um livro existente com base no ID fornecido. Os novos dados do livro devem ser enviados no corpo da solicitação.

#### `DELETE /books/:id`

Remove um livro específico com base no ID fornecido.
