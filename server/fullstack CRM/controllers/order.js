const Order = require('../models/Order');
const errorHandler = require('../utils/errorHandler');

//(get) localhost:5000/api/order?offset=2&limit=5  --> забираем 5 элементов пропуская 2 элемента
module.exports.getAll = async function (req, res){
    const query = {
        user: req.user.id
    };
    // дата старта
    if(req.query.start){
        query.date = {
            $qte: req.query.start // больше или равно библиотека монгуста
        } // обращаемся к объекту query и добавляем ему date
    }

    if(req.query.end){ // порлучить все заказы в которых дата меньше или равно даты конца которую мы обозначили
       if(!query.date){
           query.date = {};
       }
        query.date['$lte'] = req.query.end; // $lte меньше или библиотека монгуста
    }

    if(req.query.order){
        query.order = +req.query.order;
    }

    try{
        const orders = await Order
            .find(query)
            .sort({date: -1})
            .skip(+req.query.offset) // параметр с фронта для пагинации или бесконечного скролла
            .limit(+req.query.limit) // + в начале параметра это приведение к числу!!!

        res.status(200).json(orders);
    }catch (error){
        errorHandler(res, error)
    }
};
module.exports.create = async function (req, res){
    try {
        const lastOrder = await Order
            .findOne({user: req.user.id}) // достаем все заказа который создал пользователь
            .sort({date: -1}); // -1 - в порядке убывания фильтруем что бы вытащить последний заказ
        const maxOrder = lastOrder ? lastOrder.order : 0; // если это первый заказ ставим 0 если уже были берем послеждний
        const order = await new Order({
            list: req.body.list,
            user: req.user.id,
            order: maxOrder + 1// номер заказа
        }).save();
        res.status(201).json(order)
    }catch (error){
        errorHandler(res, error)
    }
};
