// PositionListView Component
// Contains PositionListViewItems
import React, { useContext } from "react";
import PositionListViewItem from "../PositionListViewItem/PositionListViewItem";
import PositionsContext from "../../context/PositionsContext";
const PositionListView = () => {
  const inputArray = useContext(PositionsContext);
  //console.log(inputArray); // DO NOT REMOVE THIS CONSOLE LOG IT IS MAKING IT RENDER CORRECTLY, NO IDEA WHY.  Perhaps race condition?
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
