// ./server.js
require('dotenv').config();													// to include env vars
const express = require ("express");
const mongoose = require("mongoose");
const app = express();

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const db = require("./models/index");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("client/build"));

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

app.get("/api/config", (req, res) => {
	insertSeedData();
	res.json( { seedDataInserted: true, } );
});

app.use(routes);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost${PORT}`);
});


function insertSeedData() {
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
			userName: "Ray Dalio",
		},
	];
	
	db.Position.remove({})
		.then(() => db.Position.collection.insertMany(positionSeed))
		.then((data) => {
			console.log(data.result.n + " records inserted!");
		})
		.catch((err) => {
			console.log(err);
		});
	
	db.User.remove({})
		.then(() => db.User.collection.insertMany(userSeed))
		.then((data) => {
			console.log(data.result.n + " records inserted!");
		})
		.catch((err) => {
			console.log(err);
		});
}