import mongoose = require("mongoose");
import db = require("../models/index");

// This file empties the Positions collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/starketf", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
}).then( () => {
	console.log("[i] MongoDB connected successfully");
}).catch( (err) => {
	console.log(`[E] MongoDB connection error: ${err}`);
});

const positionSeed = [
	{
		tickerSymbol: "GME",
		buyPrice: 100.0,
		selPrice: 200.0,
	},
	{
		tickerSymbol: "AAPL",
		buyPrice: 500.0,
		selPrice: 750.0,
	},
	{
		tickerSymbol: "TSLA",
		buyPrice: 3000.0,
		selPrice: 4000.0,
	},
	{
		tickerSymbol: "AMC",
		buyPrice: 100.0,
		selPrice: 3.0,
	},
	{
		tickerSymbol: "TWTR",
		buyPrice: 200.0,
		selPrice: 350.0,
	},
	{
		tickerSymbol: "NVDA",
		buyPrice: 1000.0,
		selPrice: 2000.0,
	},
];

const userSeed = [
	{
		userName: "Tony Stark",
	},
	{
		userName: "Pierre-Simon Laplace",
	},
];

db.Position.deleteMany({}).then(() => {
	db.Position.collection.insertMany(positionSeed);
}).then((data) => {
	console.log(data.result.n + " records inserted!");
	process.exit(0);
}).catch((err) => {
	console.log(err);
	process.exit(1);
});

db.User.deleteMany({}).then(() => {
	db.User.collection.insertMany(userSeed);
}).then((data) => {
	console.log(data.result.n + " records inserted!");
	process.exit(0);
}).catch((err) => {
	console.log(err);
	process.exit(1);
});
