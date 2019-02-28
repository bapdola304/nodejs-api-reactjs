const express = require('express');

const router = express.Router();
const products = require('../models/products.model');








router.get('/getAll', (req, res) =>{
	
	let getProduct = products.find()
					.select('name price _id')
					.exec()
					.then(result =>{
						res.status(200).json({
							products : result
						})
					})
					.catch(err =>{
						res.status(500).json({
							error : err
						})
					});
	// res.status(200).json({
	// 	message : "Handing GET request to /products"
	// })
})

router.get('/getById/:id', (req, res) =>{
	let id = req.params.id;
	let getProduct = products.find({ _id : id})
					.exec()
					.then(result => {
						console.log(result);
						if(result.length > 0){
							res.status(200).json({
								products : result
							})
						}else{
							res.status(400).json({
								message : "Not Found products by ID : " + id
							})
						}
					
					})
					.catch(err =>{
						console.log(err)
						res.status(500).json({
							error : err
						})
					});
	// res.status(200).json({
	// 	message : "Handing GET request to /products"
	// })
})
router.delete('/delete/:id', (req, res) =>{
	let id = req.params.id;
	let getProduct = products.remove({ _id : id})
					.exec()
					.then(result => {
						console.log(result);
						
						res.status(200).json({result});					
					})
					.catch(err =>{
						console.log(err)
						res.status(500).json({
							error : err
						})
					});
	// res.status(200).json({
	// 	message : "Handing GET request to /products"
	// })
})
router.post('/', (req, res) =>{
	// let postProduct = {
	// 	name : req.body.data
	// };
	// console.log(postProduct)
	  console.log(req.headers); 
	  console.log(req.body); 

	// let product = new products(postProduct);

	// product
	// .save()
	// .then(result =>{
	// 	res.status(200).json({
	// 	message : "Handing GET request to /products",
	// 	products : result
	// })
	// })
	// .catch(err => {
	// 	res.status(500).json({ error : err})
	// })
})




module.exports = router;