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
    buyDate: new Date(Date.now() - 40),
    sellDate: new Date(Date.now() - 33),
    buyQty: 100,
		sellQty: 100
  },
	{
    tickerSymbol: "AAPL",
    buyDate: new Date(Date.now() - 41),
    sellDate: new Date(Date.now() - 34),
    buyQty: 100,
		sellQty: 100
  },
	{
    tickerSymbol: "TSLA",
    buyDate: new Date(Date.now() - 42),
    sellDate: new Date(Date.now() - 35),
    buyQty: 100,
		sellQty: 100
  },
	{
    tickerSymbol: "AMC",
    buyDate: new Date(Date.now() - 43),
    sellDate: new Date(Date.now() - 36),
    buyQty: 100,
		sellQty: 100
  },
	{
    tickerSymbol: "TWTR",
    buyDate: new Date(Date.now() - 44),
    sellDate: new Date(Date.now() - 37),
    buyQty: 100,
		sellQty: 100
  },
	{
    tickerSymbol: "NVDA",
    buyDate: new Date(Date.now() - 45),
    sellDate: new Date(Date.now() - 38),
    buyQty: 100,
		sellQty: 100
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
	console.error(err);
	process.exit(1);
});
