import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";

// TODO: Change variable names so they're not so confusing.

const AddPosition = (props) => {
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

  const handleBtnAddtoPortfolio = () => {
    console.log("handleBtnAddToPortfolio() executing...");
    axios
      .post("/api/positions", {
        stockFullName: searchQuery,
        tickerSymbol: searchTicker,
        buyPrice: stockPrice,
      })
      .then((response) => {
        //console.log(response);

        // Now that we have the position ID, create a new position in the user_DB_entry.positions field.
        console.log(props.userObject._id);
        console.log(response.data._id);
        axios
          .put(`/api/users/${props.userObject._id}`, {
            $push: { positions: response.data._id },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(`User ${props.userObject._id} update error: ${err}`);
          });
      });
  };

  return (
    <div>
      <div className="container notification is-primary">
        <div className="columns">
          <div className="column">
            <h1 className="title has-text-centered notification is-primary">
              Add Position
            </h1>
          </div>
        </div>
      </div>
      <div className="block">
        <UserProfileCard userObject={props.userObject} />
      </div>
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
            <button
              className="button is-link"
              onClick={handleBtnAddtoPortfolio}
            >
              Add to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosition;
