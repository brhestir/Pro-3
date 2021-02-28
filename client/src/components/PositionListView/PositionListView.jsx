// PositionListView Component
// Contains PositionListViewItems
import React from "react";
import PositionListViewItem from "../PositionListViewItem/PositionListViewItem";

const PositionListView = ({ inputArray }) => {
  return (
    <>
      <div className="columns is-mobile is-vcentered">
        <div className="column">
          <div className="list">
            <ul>
              {inputArray.map((curEl, index) => {
                return (
                  <div className="notification is-info" key={index.toString()}>
                    <PositionListViewItem
                      _id={curEl._id}
                      tickerSymbol={curEl.tickerSymbol}
                      buyPrice={curEl.buyPrice}
                      selPrice={curEl.selPrice}
                    />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PositionListView;
