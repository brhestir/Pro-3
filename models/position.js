// ./models/position.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema(
	{	
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
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at"
		}
	}
);

// Thank you Peter
positionSchema.post("remove", document => {
	const positionId = document._id;
	mongoose
		.model("User")
		.findOneAndUpdate(
			{ positions: { $in: [positionId] } },
			{ $pull: { positions: positionId } },
			{ new: true }
		)
		.then(dbModel => console.log(dbModel))
		.catch(err => console.log(err));
});

const Position = mongoose.model("Position", positionSchema);
module.exports = Position;
