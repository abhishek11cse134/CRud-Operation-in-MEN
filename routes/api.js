const express = require('express');
const Category = require('../model/category');

const router = express.Router();

//get all product from db 
router.get('/category',function(req,res){
	res.send({type:'Get'});
});
// create category inserted in to db
router.post('/category',function(req,res){
	
	var category = new Category(req.body);
	
	category.save((err, createdObject) => {  
    if (err) {
        res.status(500).send(err);
    }
    res.status(200).send(createdObject);
});
	

});
// update category 
// @param id 
router.put('/category/:id',function(req,res){
	res.send({type:'Put'});
});
// detete category from db
router.delete('/category/:id',function(req,res){
	res.send({type:'delete'});
});
module.exports = router;
