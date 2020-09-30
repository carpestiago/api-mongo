const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports = {

    //salvar um novo usuário
    async store(req, res) {

        const userExists = await Users.findOne({  email: req.body.email });
        if (userExists) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        const { name, email, password, admin, updated_at } = await Users.create(req.body);

        return res.json({
            name,
            password,
            email, 
            admin,
            updated_at
            
        });
    }

}