const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Positions collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/starketf"
);

// buy jan 13, 2021
// sell jan 27, 2021
const positionSeed = [
  {
    tickerSymbol: "GME",
    buyPrice: 100.00, 
    selPrice: 200.00
  },
	{
    tickerSymbol: "AAPL",
    buyPrice: 500.00, 
    selPrice: 750.00
  },
	{
    tickerSymbol: "TSLA",
    buyPrice: 3000.00, 
    selPrice: 4000.00
  },
	{
    tickerSymbol: "AMC",
    buyPrice: 100.00, 
    selPrice: 3.00
  },
	{
    tickerSymbol: "TWTR",
    buyPrice: 200.00, 
    selPrice: 350.00
  },
	{
    tickerSymbol: "NVDA",
    buyPrice: 1000.00, 
    selPrice: 2000.00
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



db.Position
	.remove({})
	.then(() => db.Position.collection.insertMany(positionSeed))
	.then( (data) => {
	console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch( (err) => {
	console.log(err);
	process.exit(1);
})

db.User
	.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then( (data) => {
	console.log(data);
	console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch( (err) => {
	console.log(err);
	process.exit(1);
});
