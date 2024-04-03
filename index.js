// importando os pacotes para uso no arquivo index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');
const swaggerJsdoc = require('swagger-jsdoc');

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Definindo a configuração do Swagger
const options = {
    definition: {
      openapi: '3.0.0', // Especificação OpenAPI
      info: {
        title: 'API Example', // Título da API
        version: '1.0.0', // Versão da API
        description: 'Descrição da API', // Descrição da API
      },
      servers: [{
        url: "http://localhost:9000", // URL base da API
        description: "Servidor local"
      }]
    },
    apis: ['./routes.js'], // Caminho para este arquivo
  };
  
  // Definições das rotas para o Swagger
 // options.apis.push('./routes.js');
  
  const specs = swaggerJsdoc(options);
  
  // Rota para a documentação do Swagger
  app.use('/api-docs', swaggerUi.serve);
  app.get('/api-docs', swaggerUi.setup(specs));

// Usando as rotas definidas em routes.js
app.use('/', routes);

// o servidor irá rodar dentro da porta 9000
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Expresss started at http://localhost:${PORT}`));
