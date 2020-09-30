const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./app/config/multer');
const ProductsController = require('./app/controllers/ProductsController');
const UsersController = require('./app/controllers/UsersController');
const SessionController = require('./app/controllers/SessionController');
const Post = require('./app/models/UploadImages');
const authMiddleware = require('./app/middlewares/authorization');


//inicia a sessão
routes.post('/sessions', SessionController.store);

//listar todos os produtos
routes.get('/products', ProductsController.index);

//listar um produto através do id
routes.get('/products/:id', ProductsController.show);

//incluir novo usuário
routes.post('/users', UsersController.store);

//middleware de autenticação
routes.use(authMiddleware);

//incluir novo produto
routes.post('/products', ProductsController.store);

//update
routes.put('/products/:id', ProductsController.update);

//exclusão de um produto por id
routes.delete('/products/:id', ProductsController.destroy);

//inserir uma imagem
routes.post('/files', multer(multerConfig).single('image'), async (req, res) => {
    const { originalname: name, size, filename: key } = req.file;

    const post = await Post.create({
        name,
        size,
        key,
        url: ''
    });

    return res.json(post)

});

module.exports = routes;