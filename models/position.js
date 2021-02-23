// ./models/position.js
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const positionSchema = new Schema({
	tickerSymbol: {
		type: String,
		required: true,
		trim: true,
		required: "Enter a stock ticker symbol",
	},
	buyDate: {
		type: Date,
	},
	sellDate: {
		type: Date,
	},
	buyQty: {
		type: Number,
	},
	sellQty: {
		type: Number,
	},
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;