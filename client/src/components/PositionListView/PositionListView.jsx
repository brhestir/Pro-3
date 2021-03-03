// PositionListView Component
// Contains PositionListViewItems
import React, { useContext } from "react";
import PositionListViewItem from "../PositionListViewItem/PositionListViewItem";
import PositionsContext from "../../context/PositionsContext";
const PositionListView = ({ getUserPositions }) => {
  const inputArray = useContext(PositionsContext);

  const sortedInputArray = []
    .concat(inputArray)
    .sort((a, b) => (a.created_at > b.created_at ? -1 : 1));

  let timeout = 250;

  return (
    <>
      <div className="columns is-mobile is-vcentered">
        <div className="column">
          <div className="list">
            <ul>
              {sortedInputArray.map((curEl, index) => {
                timeout += 250;

                return (
                  <div
                    className="notification is-info is-light"
                    key={curEl._id}
                  >
                    <PositionListViewItem
                      _id={curEl._id}
                      tickerSymbol={curEl.tickerSymbol}
                      buyPrice={curEl.buyPrice}
                      selPrice={curEl.selPrice}
                      getUserPositions={getUserPositions}
                      apiCallDelayMS={timeout}
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
