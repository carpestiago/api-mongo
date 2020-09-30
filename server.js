const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

//autoriza a aplicação a receber dados no formato json
app.use(express.json());

//ininciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

//lista de models
require('./src/app/models/Products');
require('./src/app/models/Users');
require('./src/app/middlewares/authorization');

//chamando as rotas e colocando um "api" antes da requisição
app.use('/api', require('./src/routes'));

//porta
app.listen(3001);