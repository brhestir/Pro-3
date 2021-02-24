import React from "react";

const AddPosition = () => {
  return (
    <div>
      <div className="container notification is-primary">
        <div className="columns">
          <div className="column">
            <div>This is the Add Position Page</div>
            <div>UserName will go here</div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="columns">
          <div className="column notification is-primary">
            <h1>Add Position</h1>

            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter Ticker Symbol"
              />
            </div>
            <button class="button is-rounded is-info">Search</button>
            <div>Search information will show up here</div>
            <button class="button is-link">Add to Portfolio</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosition;
