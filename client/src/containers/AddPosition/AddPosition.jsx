import React, { useEffect, useState } from "react";
import API from "../../utils/API";

const AddPosition = () => {
  const [searchQuery, setSearchQuery] = useState("GME");

  useEffect(() => {
    API.search(searchQuery).then((res) => {
      console.log(res);
      // console.log(res.data.data[0].last);
    });
  }, []);

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

            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Ticker Symbol"
              />
            </div>
            <button className="button is-rounded is-info">Search</button>
            <div>Search information will show up here</div>
            <button className="button is-link">Add to Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosition;
