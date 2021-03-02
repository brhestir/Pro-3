import axios from "axios";
import React, { useState } from "react";
//import API from "../../utils/API";
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
        //console.log(props.userObject._id);
        //console.log(response.data._id);
        axios
          .put(`/api/users/${props.userObject._id}`, {
            $push: { positions: response.data._id },
          })
          .then((response) => {
            //console.log(response);
          })
          .catch((err) => {
            console.log(`User ${props.userObject._id} update error: ${err}`);
          });
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 center-align  purple accent-2">
            <h1>Add Position</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <UserProfileCard userObject={props.userObject} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 center-align  purple accent-2">
            <h1>Add Position</h1>
            <div className="input-field col s6 center-align deep-orange darken-1">
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
              <a
                class="waves-effect waves-light btn-large"
                type="submit"
                onClick={handleSubmit}
              >
                <i class="material-icons right">show_chart</i>Get Current Price
              </a>
            </div>

            <div className="col s6 left-align green accent-3">
              <div>Search information will show up under here:</div>
              <div>Stock: {searchQuery}</div>
              <div>Ticker: {searchTicker}</div>
              <div>Price: {stockPrice}</div>
              <a
                class="waves-effect waves-light btn-large"
                type="submit"
                onClick={handleBtnAddtoPortfolio}
              >
                <i class="material-icons right">attach_money</i>Add to Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosition;
