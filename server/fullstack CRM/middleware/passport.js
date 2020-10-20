// функционал для работы с веб токеном jwt
// Пример кода есть в Гите по запросу passport jwt!
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(), // мы будем брать токен который будет находится в хедере в Bearer
    secretOrKey: keys.jwt
};

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const user = await User.findById(payload.userId).select('email id'); // payload.userId беретсчя из токена который мы генерируем
                if(user){
                    done(null, user)
                }else {
                    done(null, false)
                }
            }catch (error){
                console.error(error);
            }

        })
    )
}
