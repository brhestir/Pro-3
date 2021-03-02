import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import PositionListView from "../../components/PositionListView/PositionListView";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import PositionsContext from "../../context/PositionsContext";
import GlobalContext from "../../context/GlobalContext";

const AllPositions = (props) => {
  const [positions, setPositions] = useState([]);

  const { userObject, setUserObject, token, setToken } = useContext(
    GlobalContext
  );

  useEffect(() => {
    axios
      .get(`/api/users/${userObject._id}`)
      .then((response) => {
        setPositions(response.data.positions);
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
        <UserProfileCard userObject={userObject} />
        {/*value passed to provider must be declared with useState*/}
        <PositionsContext.Provider value={positions}>
          <PositionListView />
        </PositionsContext.Provider>
      </div>
    </>
  );
};

export default AllPositions;
