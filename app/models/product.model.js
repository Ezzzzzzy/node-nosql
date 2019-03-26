const mongoose = require('mongoose');
const Category = require('./category.model.js');


const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: CategorySchema
},{
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
