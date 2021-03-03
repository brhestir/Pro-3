import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import M from "materialize-css";

const PositionListItem = (props) => {
  const [currentPrice, setCurrentPrice] = useState("");
  const [boxColor, setBoxColor] = useState("");
  const [buttonPulse, setButtonPulse] = useState("");

  const totalReturn = ((currentPrice - props.buyPrice) / props.buyPrice) * 100;

  let { userObject /*, setUserObject*/ } = useContext(GlobalContext);

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

    let updatedUserLifetimeReturn = (userObject.totalChange += totalReturn);

    axios
      .put(`/api/users/${userObject._id}`, {
        totalChange: updatedUserLifetimeReturn,
      })
      .then((response) => {
        //console.log(response.data);
        M.toast({
          html: `Sold ${props.tickerSymbol}: Returned ${totalReturn.toFixed(
            2
          )} % [TEST MODE]`,
          displayLength: 2000,
        });
        axios
          .delete(`/api/positions/${props._id}`)
          .then((response) => {
            console.log(response);
            props.getUserPositions();
          })
          .catch((err) => {
            console.log(err);
          });
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
        M.toast({
          html: "Position Deleted",
          displayLength: 2000,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setBoxColor("");
    axios
      .get(
        `https://api.marketstack.com/v1/tickers/${props.tickerSymbol}/intraday?interval=1min&limit=1&access_key=412cef10f09b95f3a1a79b98ae8a3d0f`
      )
      .then((res) => {
        if (res.data.data.intraday[0].last) {
          setCurrentPrice(res.data.data.intraday[0].last);
        } else {
          setCurrentPrice(res.data.data.intraday[0].high);
        }
      });
  }, []);

  useEffect(() => {
    if (totalReturn > 0) {
      setBoxColor("green accent-3")
      setButtonPulse("waves-effect waves-light pulse green darken-4 btn")
    } else {
      setBoxColor("red accent-2")
      setButtonPulse("waves-effect waves-light green darken-4 btn")
    }
  }, [totalReturn]);

  return (
    <>
      <div className="container z-depth-3">
        <div className={boxColor}>
          <div className="row">
            <div className="col s3">Ticker: {props.tickerSymbol}</div>
            <div className="col s3">Buy Price: ${props.buyPrice}</div>
            <div className="col s3">Current Price: ${currentPrice}</div>
            <div className="col s3">
              Total Return: {totalReturn.toFixed(2)}%
            </div>

            <div className="row">
              <div className="col s6">
                <button
                  className={buttonPulse}
                  onClick={btnSellClickHandler}
                >
                  <i className="material-icons right">attach_money</i>SELL
                </button>
              </div>
              <div className="col s6">
                <button
                  className="waves-effect waves-light red darken-4 btn"
                  onClick={btnDeleteClickHandler}
                >
                  <i className="material-icons right">delete_forever</i>DELETE
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PositionListItem;
