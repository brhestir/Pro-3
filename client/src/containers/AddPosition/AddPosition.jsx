import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../../utils/API";

// TODO: Change variable names so they're not so confusing.

const AddPosition = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [stockName, setStockName] = useState("");
  const [searchTicker, setSearchTicker] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.marketstack.com/v1/tickers/${stockName}/intraday?interval=1min&limit=1&access_key=412cef10f09b95f3a1a79b98ae8a3d0f`
      )
      .then((res) => {
        console.log(res.data);
        setStockPrice(res.data.data.intraday[0].last);
        setSearchQuery(res.data.data.name);
        setSearchTicker(stockName);
      });
  };

  return (
    <div>
      <div className="container notification is-primary">
        <div className="columns">
          <div className="column">
            <div>This is the Add Position Page</div>
            <div>UserName will go here</div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="columns">
          <div className="column notification is-primary">
            <h1>Add Position</h1>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Ticker Symbol"
                value={stockName}
                name="stockName"
                onChange={(e) => {
                  setStockName(e.target.value);
                }}
              />
            </div>
            <button
              className="button is-rounded is-info"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
            <div>Search information will show up under here:</div>
            <div>Stock: {searchQuery}</div>
            <div>Ticker: {searchTicker}</div>
            <div>Price: {stockPrice}</div>
            {/* TODO: Make this button add position to database */}
            {/* <button className="button is-link">Add to Portfolio</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosition;
