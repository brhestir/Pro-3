import React from "react";

const AllPositions = () => {
  return (
    <>
      <div className="container notification is-secondary">
        <div className="columns">
          <div className="column">
            <div>All Positions Page</div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="columns">
          <div className="column notification is-secondary">
            <div>
              Position: 1{" "}
              <button className="button is-info">Paper Hands</button>
            </div>
            <div>
              Position: 2{" "}
              <button className="button is-info">Paper Hands</button>
            </div>
            <div>
              Position: n{" "}
              <button className="button is-info">Paper Hands</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPositions;
