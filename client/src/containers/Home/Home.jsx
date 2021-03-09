import React from "react";
import diamondHandsMascot from "../../assets/images/diamondHandsMascot.png"
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container center-align">
              <div>
                <img src={diamondHandsMascot} height="400" alt="Investor with Diamond Hands"/>
                <ChartComponent />
                <h3>Click "Sign Up" to begin your journey to the moon!</h3>
              </div>
            </div>
    </>
  );
};

export default Home;
