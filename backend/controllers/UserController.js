const UserModel = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_auth_secret } = require('../config/keys');
const UserController = {
    async register(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9)
            const user = await UserModel.create(req.body);
            res.status(201).send({
                user,
                message: 'user created succefully'
            })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'some wrong to try create the user',
                error
            })
        }
    },
    async login(req, res) {
        try {
            const user = await UserModel.findOne({
                email: req.body.email
            });
            if (!user) {
                return res.status(400).send({
                    message: 'maybe is your pass or email wrong'
                })
            }
            const isMatch = bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'credential incorrect'
                })
            }
            const token = jwt.sign({_id:user._id},jwt_auth_secret);
            user.tokens.push(token);
            await user.replaceOne(user);
            res.send({user,token,message:'you are succefully connected'})
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'some wrong to connect'
            })
        }
    }
}

module.exports = UserController;