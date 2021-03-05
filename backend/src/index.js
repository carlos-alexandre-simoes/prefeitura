/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do Back-End
 * POST: Criar uma informação no Back-End
 * PUT: Alterar uma informação no Back-End
 * DELETE: Deletar uma informação no Back-End
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?"(Filtros, Paginação)
  * Route Params: Parêmtros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */
 
 const express = require('express');
 const cors = require('cors');
 const routes = require('./routes');

 const app = express();

 app.use(cors());
 app.use(express.json());
 app.use(routes);

 app.listen (3333);




















