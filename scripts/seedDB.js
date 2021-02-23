const mongoose = require("mongoose");
const db = require("../models/index");

// This file empties the Positions collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/starketf");

// buy jan 13, 2021
// sell jan 27, 2021
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
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
