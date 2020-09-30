const mongoose = require('mongoose');
const Products = mongoose.model('Products');

module.exports = {

    //listar todos os produtos
    async index(req, res) {
        const products = await Products.find();

        return res.json(products);
    },

    //listar um único produto
    async show(req, res) {
        const product = await Products.findById(req.params.id)

        return res.json(product);
    },

    //fazer uma alteração no produto
    async update(req, res) {
        const product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(product);
    },

    //salvar um novo produto
    async store(req, res) {
        const { name, descricao, manual, image, created_at, updated_at } = await Products.create(req.body);

        return res.json({ 
            name, 
            descricao,
            manual,
            image,
            created_at, 
            updated_at
            
        });
    },

    //excluir um produto
    async destroy(req, res) {
        await Products.findByIdAndRemove(req.params.id);

        return res.json(`Produto com nome ${res.body.name} foi excluido`);
    }

}