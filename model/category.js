const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// category model here 

const CategorySchema = new Schema({
	name:{
		type:String,
		required:[true, "name field is required"]
	},
	email:{
		type:String
	}
});
const Category = mongoose.model('category',CategorySchema);
module.exports = Category;