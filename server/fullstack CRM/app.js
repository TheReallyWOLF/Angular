const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const bodyParser = require('body-parser'); // библионтека которая парсит все данные приходящие от ползователя

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
