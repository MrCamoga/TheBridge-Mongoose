const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
	{
		name: String,
		description: String,
		price: Number
	},
	{
		timestamps: true
	}
)

ProductSchema.index({
	name: 'text'
})

module.exports = mongoose.model('Product', ProductSchema);
