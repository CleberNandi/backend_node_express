<h3 align="center">
  Node.js com Express conectando Postgresql com sequelize
</h3>

<p align="center">Neste projeto abordo as migrations, configuração do Sequelize, relacionamentos 1:N, relacionamentos N:N, queries complexas e muito mais!</p>


## 🚀 Tecnologias

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd backend_node_express`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias dentro de `/src/config/database.js`;
5. Rode `yarn sequelize db:create` para criar o banco de dados;
6. Rode `yarn sequelize db:migrate` para executar as migrations;
7. Rode `yarn dev` para iniciar o servidor.

## ⚡️ Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## Referência
Vídeo Rocketseat: https://www.youtube.com/watch?v=Fbu7z5dXcRs&list=RDCMUCSfwM5u0Kce6Cce8_S72olg&start_radio=1&t=16