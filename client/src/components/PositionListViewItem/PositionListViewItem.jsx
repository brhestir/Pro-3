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
    let updatedUserLifetimeReturn = (userObject.totalChange += totalReturn);

    axios
      .put(`/api/users/${userObject._id}`, {
        totalChange: updatedUserLifetimeReturn,
      })
      .then((response) => {
        M.toast({
          html: `Sold ${props.tickerSymbol}: Returned ${totalReturn.toFixed(
            2
          )} % [TEST MODE]`,
          displayLength: 2000,
        });
        axios
          .delete(`/api/positions/${props._id}`)
          .then((response) => {
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
    axios
      .delete(`/api/positions/${props._id}`)
      .then((response) => {
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
    setTimeout(function () {
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
    }, props.apiCallDelayMS);
  }, []);

  useEffect(() => {
    if (totalReturn > 0) {
      setBoxColor("green accent-3");
      setButtonPulse("waves-effect waves-light pulse green darken-4 btn");
    } else {
      setBoxColor("red accent-2");
      setButtonPulse("waves-effect waves-light green darken-4 btn");
    }
  }, [totalReturn]);

  return (
    <>
      <div className="container z-depth-3">
        <div className={boxColor}>
          <div className="row">
            <h4>{props.tickerSymbol}</h4>
            <div className="col s4">
              <div className="row">Buy Price:</div>
              <div className="row">
                <h5>${props.buyPrice}</h5>
              </div>

              <div className="row">
                <button className={buttonPulse} onClick={btnSellClickHandler}>
                  <i className="material-icons right">attach_money</i>SELL
                </button>
              </div>
            </div>

            <div className="col s4 circle z-depth-5">
              <div className="row">
                <h6> Total Return:</h6>
              </div>
              <div className="row">
                <h5>{totalReturn.toFixed(2)}%</h5>
              </div>
            </div>

            <div className="col s4">
              <div className="row">Current Price:</div>
              <div className="row">
                <h5>${currentPrice}</h5>
              </div>

              <div className="row">
                <button
                  className="waves-effect waves-light red darken-4 btn"
                  onClick={btnDeleteClickHandler}
                >
                  <i className="material-icons right">delete_forever</i>DELETE
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col s6"></div>
              <div className="col s6"></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PositionListItem;
