const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Users = mongoose.model('Users');

const authConfig = require('../config/auth');

module.exports = {

    async store(req, res) {

        const { email, password } = req.body;
        const user = await Users.findOne({email: email});

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        if(!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Password does not match '});
        }

        const { _id, name } = user;
        return res.json({
            user: {
                _id,
                name,
                email,
            },
            token: jwt.sign({ _id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })
 
    }

}