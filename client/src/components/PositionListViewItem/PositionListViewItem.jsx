import React from "react";

const PositionListItem = (props) => {
  const btnInfoClickHandler = (e) => {
    console.log(`btnInfoClickHandler: ${props._id}`);
  };

  const btnSellClickHandler = (e) => {
    console.log(`btnSellClickHandler: ${props._id}`);
  };

  const btnDeleteClickHandler = (e) => {
    console.log(`btnDeleteClickHandler: ${props._id}`);
  };

  return (
    <>
      <div className="list-item">
        <div className="level-item">
          <div className="column is-2">Ticker: {props.tickerSymbol}</div>
          <div className="column is-2">Buy Price: ${props.buyPrice}</div>
          <div className="column is-2">Sell Price: ${props.selPrice}</div>
          <div className="column is-2">_id: {props._id}</div>
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
