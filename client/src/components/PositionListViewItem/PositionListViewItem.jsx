import React from "react";

const PositionListItem = (props) => {
  return (
    <>
      <div className="list-item">
        <div className="level-item">
          <div className="column is-one-quarter">
            Ticker: {props.tickerSymbol}
          </div>
          <div className="column is-one-quarter">
            Buy Price: ${props.buyPrice}
          </div>
          <div className="column is-one-quarter">
            Sell Price: ${props.selPrice}
          </div>
          <div className="column is-one-quarter">_id: {props._id}</div>
        </div>
      </div>
    </>
  );
};

export default PositionListItem;
