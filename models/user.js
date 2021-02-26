// ./models/position.js
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
		trim: true,
		unique: true
	},
	password: {
		type: String,
		trim: true,
	},
	totalChange: {
		type: Number,
	},
	positions: [
		{
			type: Schema.Types.ObjectId,
			ref: "Position"
		}
	]
});

const User = mongoose.model("User", userSchema);

module.exports = User;