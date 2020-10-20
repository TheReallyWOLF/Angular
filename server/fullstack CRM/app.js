const express = require('express');
const authRoutes = require('./routes/auth');
const mongoos = require('mongoose');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const bodyParser = require('body-parser'); // библионтека которая парсит все данные приходящие от ползователя
const app = express();
const keys = require('./config/keys');
const  passport = require('passport')// паспорт js позволяет регестрироватся через все соц сети и тд. npm install passport passport-jwt

mongoos.connect(keys.mongoURL)
    .then(() => console.log('База подключена (MongoDB connected!)'))
    .catch(() => console.error('База не найдена!(MongoDB undefined!!)'));

app.use(passport.initialize()); // инициализация паспорта в приложении
require('./middleware/passport')(passport);
app.use(require('cors')());   // пакет для того точ бы сервер мог обрабатывать cors запросы
app.use(require('morgan')('dev'));  // пакет для красивого отображдения что происходи на сервере в данный момент
app.use(bodyParser.urlencoded({extended: true})); // кодирует URL
app.use(bodyParser.json()); // Генерирует JS объекты из джейсона

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;
