// PositionListView Component
// Contains PositionListViewItems
import React, { useContext } from "react";
import PositionListViewItem from "../PositionListViewItem/PositionListViewItem";
import PositionsContext from "../../context/PositionsContext";
const PositionListView = ({ getUserPositions }) => {
  const inputArray = useContext(PositionsContext);

  return (
    <>
      <div className="columns is-mobile is-vcentered">
        <div className="column">
          <div className="list">
            <ul>
              {inputArray.map((curEl, index) => {
                return (
                  <div
                    className="notification is-info is-light"
                    key={index.toString()}
                  >
                    <PositionListViewItem
                      _id={curEl._id}
                      tickerSymbol={curEl.tickerSymbol}
                      buyPrice={curEl.buyPrice}
                      selPrice={curEl.selPrice}
                      getUserPositions={getUserPositions}
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
