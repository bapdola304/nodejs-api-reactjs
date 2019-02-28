const mongoose = require('mongoose');

const products = new mongoose.Schema({
	name : String,
	status : String
})
module.exports = mongoose.model('Product', products,'products');;