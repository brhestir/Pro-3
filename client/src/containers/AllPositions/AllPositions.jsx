import React, { useEffect, useState } from "react";
import axios from "axios";
import PositionListView from "../../components/PositionListView/PositionListView";

const AllPositions = () => {
  const [positions, setPositions] = useState([]);

  // 1. Hard code
  // 2. Abstract into variables (state or props)
  // 3. Dynamically get the data

  useEffect(() => {
    axios
      .get("/api/positions")
      .then((response) => {
        setPositions(response.data); // update state with returned data
      })
      .catch((err) => {
        console.log(`[e] axios.get(/api/positions) error: ${err}`);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="block">
          <h1 className="title has-text-centered notification is-primary">
            All Positions
          </h1>
        </div>
        <PositionListView inputArray={positions} />
      </div>
    </>
  );
};

export default AllPositions;
