import axios from "axios";
import React, { useState, useContext } from "react";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import GlobalContext from "../../context/GlobalContext";
import M from "materialize-css";
import { useHistory } from "react-router-dom";

// TODO: Change variable names so they're not so confusing.

const AddPosition = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [stockName, setStockName] = useState("");
  const [searchTicker, setSearchTicker] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  const [boxVisible, setBoxVisible] = useState("scale-transition scale-out");

  const { userObject } = useContext(
    GlobalContext
  );

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxVisible("scale-transition scale-in");
    axios
      .get(
        `https://api.marketstack.com/v1/tickers/${stockName}/intraday?interval=1min&limit=10&access_key=${process.env.REACT_APP_MARKETVIEW_API_KEY}`
      )
      .then((res) => {
        if (res.data.data.intraday[0].last) {
          setStockPrice(res.data.data.intraday[0].last);
        } else {
          setStockPrice(res.data.data.intraday[0].high);
        }
        setSearchQuery(res.data.data.name);
        setSearchTicker(stockName);
      });
  };

  const handleBtnAddtoPortfolio = () => {
    setBoxVisible("scale-transition scale-out");
    axios
      .post("/api/positions", {
        stockFullName: searchQuery,
        tickerSymbol: searchTicker.toUpperCase(),
        buyPrice: stockPrice,
      })
      .then((response) => {
        axios
          .put(`/api/users/${userObject._id}`, {
            $push: { positions: response.data._id },
          })
          .then((response) => {
            M.toast({ html: `Added Position: ${searchTicker.toUpperCase()}` });
            history.push("/positions/all");
          })
          .catch((err) => {
            console.log(`[e] User ${userObject._id} update error: ${err}`);
          });
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12 push-s3">
            <UserProfileCard userObject={userObject} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s8 push-s2 center-align card z-depth-3 teal darken-4">
            <h2>Add Position</h2>
            <div className="row">
              <div className="input-field col s6 card push-s3 z-depth-3 center-align green accent-4">
                <input
                  className="input center-align"
                  type="text"
                  placeholder="Enter Ticker Symbol"
                  value={stockName}
                  name="stockName"
                  onChange={(e) => {
                    setStockName(e.target.value.toUpperCase());
                  }}
                />
                <div className="row">
                  <button
                    className="waves-effect waves-light btn-large"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    <i className="material-icons right">show_chart</i>Get
                    Current Price
                  </button>
                </div>
              </div>
            </div>
            <div className={boxVisible}>
              <div className="row">
                <div className="col s6 push-s3 center-align card z-depth-3 green accent-4">
                  <div>
                    <h4>{searchTicker}</h4>
                  </div>
                  <div>
                    <h5>{searchQuery}</h5>
                  </div>
                  <div>
                    <h4>Current Price: ${stockPrice}</h4>
                  </div>
                  <br></br>
                  <div className="row center-align">
                    <button
                      className="waves-effect waves-light pulse btn-large"
                      type="submit"
                      onClick={handleBtnAddtoPortfolio}
                    >
                      <i className="material-icons right">attach_money</i>Add to
                      Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosition;
