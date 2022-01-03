var Dish = require('../models/dish');

exports.dish_list = function (req, res, next) {
    Dish.find({})
    .exec( function (err, dishes) {
        if (err) { return next(err) };
        res.render('menu', {dishes: dishes});
    })
}