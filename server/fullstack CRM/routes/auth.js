// авторизация или регистрация пользователей
const express = require('express');
const contrillers = require('../controllers/auth');
const router = express.Router();

// localhost:5000/api/auth/login
router.get('/login', contrillers.login);
// localhost:5000/api/auth/register
router.get('/register', contrillers.register);


module.exports = router;
