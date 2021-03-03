import React from "react";
import diamondHandsMascot from "../../assets/images/diamondHandsMascot.png"
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container  center-align">
              <div>
                <img src={diamondHandsMascot} height="400" />
                <h3>Have you been diagnosed with a chronic case of "Paper Hands?"</h3>
                <h3>Click "Sign Up" to begin your journey to the moon!</h3>

              </div>
            </div>
    </>
  );
};

export default Home;
