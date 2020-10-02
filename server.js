const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

//autoriza a aplicação a receber dados no formato json
app.use(express.json());

//ininciando o db

//connecetionString: process.env.MONGO_DB;




//MONGO_DB="mongodb+srv://carpestiago:meucu2000@cluster0.uiaea.mongodb.net/ProjetoAngular?retryWrites=true&w=majority"

mongoose.connect('mongodb+srv://carpestiago:12345@Cluster0.uiaea.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

//boot()

//lista de models
require('./src/app/models/Products');
require('./src/app/models/Users');
require('./src/app/middlewares/authorization');

//chamando as rotas e colocando um "api" antes da requisição
app.use('/api', require('./src/routes'));

//porta
app.listen(3001);