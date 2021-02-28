// ./models/position.js
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const positionSchema = new Schema({
	stockFullName: {
		type: String,
		trim: true,
	},
	tickerSymbol: {
		type: String,
		required: true,
		trim: true,
	},
	buyPrice: {
		type: Number,
	},
	sellPrice: {
		type: Number,
	},
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;