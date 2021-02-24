import React from "react";

const EditPositions = () => {
  return (
    <div>
      <div className="container notification is-primary">
        <div className="columns">
          <div className="column">
            <div>This is the EDIT POSITIONS page</div>
            <div>UserName will go here</div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="columns">
          <div className="column notification is-primary">
            EXAMPLE POSITION #1
            <button class="button is-success">Sell</button>
            <button class="button is-danger">Delete</button>
          </div>
        </div>
      </div>{" "}
      <div className="container">
        <div className="columns">
          <div className="column notification is-primary">
            EXAMPLE POSITION #2
            <button class="button is-success">Sell</button>
            <button class="button is-danger">Delete</button>
          </div>
        </div>
      </div>{" "}
      <div className="container">
        <div className="columns">
          <div className="column notification is-primary">
            EXAMPLE POSITION #3
            <button class="button is-success">Sell</button>
            <button class="button is-danger">Delete</button>
          </div>
        </div>
      </div>{" "}
      <div className="container">
        <div className="columns">
          <div className="column notification is-primary">
            EXAMPLE POSITION #4
            <button class="button is-success">Sell</button>
            <button class="button is-danger">Delete</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default EditPositions;
