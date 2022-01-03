var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DishSchema = new Schema (
    {
        name: {type: String, required: true, maxlength: 100},
        price: {type: Number, required: true, min: 0.10},
    }
);

module.exports = mongoose.model('Dish', DishSchema);