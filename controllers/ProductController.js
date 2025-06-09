const Product = require('../models/Product');

module.exports = {
	getAll(req,res,next) {
		Product.find().then(products => {
			res.status(200).send({message:'OK', products});
		}).catch(error => {
			console.error(error);
			res.status(500).send({message:'Internal Server Error',error});
		});
	},
	getByName(req,res,next) {
		Product.find({
			$text: {
				$search: req.params.name
			}
		}).then(products => {
			res.status(200).send({message:'OK', products});
		}).catch(error => {
			console.error(error);
			res.status(500).send({message:'Internal Server Error',error});
		});
	},
	getById(req,res,next) {
		Product.findById(req.params.id).then(product => {
			if(product) res.status(200).send({message: 'OK', product});
			else res.status(404).send({message:'Product not found'});
		}).catch(error => {
			console.error(error);
			res.status(500).send({message:'Internal Server Error',error});
		});
	},
	create(req,res,next) {
		Product.create(req.body).then(product => {
			res.status(201).send({message:'Product created successfully', product});
		}).catch(error => {
			console.error(error);
			res.status(500).send({message:'Internal Server Error',error});
		});
	},
	update(req,res,next) {
		Product.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(product => {
			res.status(200).send({message:'Product updated successfully', product});
		}).catch(error => {
			console.error(error);
			res.status(500).send({message:'Internal Server Error',error});
		});
	},
	delete(req,res,next) {
		Product.findByIdAndDelete(req.params.id).then(product => {
			res.status(200).send({message:'Product deleted', product});
		}).catch(error => {
			console.error(error);
			res.status(500).send({message:'Internal Server Error',error});
		});
	},
}
