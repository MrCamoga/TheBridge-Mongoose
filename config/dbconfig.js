const mongoose = require('mongoose');
const { MONGO_URI } = require('./keys');

module.exports = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log('Connected to the DB');
	} catch(error) {
		console.error(error);
		throw new Error('Error connecting to the DB');
	}
}
