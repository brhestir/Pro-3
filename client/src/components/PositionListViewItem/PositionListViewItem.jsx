import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const PositionListItem = (props) => {
  const [currentPrice, setCurrentPrice] = useState("");
  const totalReturn = ((currentPrice - props.buyPrice) / props.buyPrice) * 100;

  let { userObject, setUserObject } = useContext(GlobalContext);

  const btnInfoClickHandler = (e) => {
    console.log(`btnInfoClickHandler: ${props._id}`);
  };

  const btnSellClickHandler = (e) => {
    console.log(
      `[Sell request] Call into btnSellClickHandler from listItem for id: ${props._id}`
    );
    console.log(
      `[Sell request] Current userObject userName is: ${userObject.userName}`
    );
    console.log(`[Sell request] Current user _id is: ${userObject._id}`);
    console.log(`[Sell request] Bought price: ${props.buyPrice} `);
    console.log(`[Sell request] Sell price: ${currentPrice} `);
    console.log(`[Sell request] item % change: ${totalReturn}`);

    axios
      .put(`/api/users/${userObject._id}`, { totalChange: 100 })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const btnDeleteClickHandler = (e) => {
    console.log(`btnDeleteClickHandler: ${props._id}`);

    axios
      .delete(`/api/positions/${props._id}`)
      .then((response) => {
        console.log(response);
        props.getUserPositions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(props);
    axios
      .get(
        `https://api.marketstack.com/v1/tickers/${props.tickerSymbol}/intraday?interval=1min&limit=1&access_key=412cef10f09b95f3a1a79b98ae8a3d0f`
      )
      .then((res) => {
        console.log(res.data);
        setCurrentPrice(res.data.data.intraday[0].last);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row amber accent-3">
          <div className="col s2">Ticker: {props.tickerSymbol}</div>
          <div className="col s2">Buy Price: ${props.buyPrice}</div>
          <div className="col s2">Current Price: ${currentPrice}</div>
          <div className="col s2">Total Return: {totalReturn.toFixed(2)}%</div>

          {/* <div className="column is-2">_id: {props._id}</div> */}
          <div className="column is-4">
            <div class="buttons has-addons is-centered">
              <a
                class="waves-effect waves-light green accent-3 btn"
                onClick={btnSellClickHandler}
              >
                <i class="material-icons right">attach_money</i>SELL
              </a>
              <a
                class="waves-effect waves-light red darken-4 btn"
                onClick={btnDeleteClickHandler}
              >
                <i class="material-icons right">delete_forever</i>DELETE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PositionListItem;
