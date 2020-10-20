const bcrypt = require('bcryptjs'); // npm i bcryptjs библиотека шиврования паролей
const jwt = require('jsonwebtoken'); // npm install jsonwebtoken библиотека для токенов
const User = require('../models/User');
const keys = require('../config/keys')

module.exports.login = async function (req, res){
    const user = await User.findOne({email: req.body.email});

    if(user){
        // если в базе есть этот пользователь проверяем пароль
        const passwordResult = bcrypt.compareSync(req.body.password, user.password);
        if(passwordResult){
            // генерация токена, пароли совпали
            const token = jwt.sign({
                // параментры которые надо знать серверу от пользоватерля при его запросах к серверу по этому токену
                email: user.email,
                userId: user._id
            }, keys.jwt, {expiresIn: 60 * 60});// expiresIn время действия токена в секундах (Сейчас 1час)
            res.status(200).json({
                token: `Bearer ${token}`
            })
        }else {
            // пароль не совпали
            res.status(401).json({
                message: "Введен не верный пароль"
            })
        }
    }else {
        // пользователя нет ошибка
        res.status(404).json({
            message: "Пользователь с таким email не найдет"
        })
    }

};
module.exports.register = async function (req, res){
    // email & password
    const candidate = await User.findOne({email: req.body.email}); // await -> подожди выполнения запроса а потом продолжай код

    if(candidate){
        // Ошибка такой пользователь существует, нужно тригернуть ошибку
        res.status(409).json({
            message: 'Такой email уже занят!'
        });
    }else {
        // Нужно создать пользователя
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
           email: req.body.email,
           password: bcrypt.hashSync(password, salt) // шифрованный пароль
        });
        // сохраняем в базу
        try {
            await user.save();
            res.status(201).json(user);
        }catch (error){
           // обработать error
        }
    }
}
