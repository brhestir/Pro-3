import axios from "axios";
import React, { useEffect, useState } from "react";

const PositionListItem = (props) => {

  const [currentPrice, setCurrentPrice] = useState("");

  const btnInfoClickHandler = (e) => {
    console.log(`btnInfoClickHandler: ${props._id}`);
  };

  const btnSellClickHandler = (e) => {
    console.log(`btnSellClickHandler: ${props._id}`);
    console.log(props._id);
  };

  const btnDeleteClickHandler = (e) => {
    console.log(`btnDeleteClickHandler: ${props._id}`);

    axios
      .delete(`/api/positions/${props._id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(props)
    axios
      .get(
        `http://api.marketstack.com/v1/tickers/${props.tickerSymbol}/intraday?interval=1min&limit=1&access_key=412cef10f09b95f3a1a79b98ae8a3d0f`
      )
      .then((res) => {
        console.log(res.data);
        setCurrentPrice(res.data.data.intraday[0].last)
      });

  },[])


  return (
    <>
      <div className="list-item">
        <div className="level-item">
          <div className="column is-2">Ticker: {props.tickerSymbol}</div>
          <div className="column is-2">Buy Price: ${props.buyPrice}</div>
          <div className="column is-2">Current Price: ${currentPrice}</div>
          <div className="column is-2">Total Return: </div>


          {/* <div className="column is-2">_id: {props._id}</div> */}
          <div className="column is-4">
            <div class="buttons has-addons is-centered">
              <button
                className="button is-outlined is-info"
                onClick={btnInfoClickHandler}
              >
                Info
              </button>
              <button
                className="button is-outlined is-success"
                onClick={btnSellClickHandler}
              >
                Sell
              </button>
              <button
                className="button is-outlined is-danger"
                onClick={btnDeleteClickHandler}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PositionListItem;
