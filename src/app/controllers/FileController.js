const mongoose = require('mongoose');
const Image = mongoose.model('Image');

module.exports = {

    //salvar um novo usuário
    async store(req, res) {

        const { originalname: name, filename: path } = req.body.image;

        const image = await Image.create({
            name,
            path
        })

        res.json(image);

    }

}