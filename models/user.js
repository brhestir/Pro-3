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
		required: true,
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

userSchema.pre("save", function(next) {
	this.email = this.email.toLowerCase();
	next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;