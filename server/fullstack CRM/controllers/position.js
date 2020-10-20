const Poition = require('../models/Position');
const errorHandler = require('../utils/errorHandler')

module.exports.getBuCategoryId = async function (req, res){
    try{
       const positions = await Poition.find({
           // объект условий по которому будет производиться поиск
           category: req.params.categoryId,
           user: req.user.id
       })
        res.status(200).json(positions);
    }catch (error){
        errorHandler(res, error)
    }
};
module.exports.create = async function (req, res){
    try{
        const position = await new Poition({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save();
        res.status(201).json(position);
    }catch (error){
        errorHandler(res, error)
    }
};
module.exports.remove = async function (req, res){
    try{
        await Poition.remove({
            _id: req.params.id
        });
        res.status(200).json({
            message: 'Позиция успешно удалена!'
        })
    }catch (error){
        errorHandler(res, error)
    }
};
module.exports.update = async function (req, res){
    try{
        const position = await Poition.findOneAndUpdate({
            _id: req.params.id
        }, {
        $set: req.body // обновить данные
        }, {
            new: true // вернуть обновленные данные
        });
        res.status(200).json(position);
    }catch (error){
        errorHandler(res, error)
    }
};
