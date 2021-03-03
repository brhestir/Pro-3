import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import PositionListView from "../../components/PositionListView/PositionListView";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import PositionsContext from "../../context/PositionsContext";
import GlobalContext from "../../context/GlobalContext";

const AllPositions = (props) => {
  const [positions, setPositions] = useState([]);

  const { userObject /*, setUserObject, token, setToken*/ } = useContext(
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

  // This callback triggers a re-render of the ListView post db update
  const getUserPositions = () => {
    axios
      .get(`/api/users/${userObject._id}`)
      .then((response) => {
        setPositions(response.data.positions);
      })
      .catch((err) => {
        console.log(`[e] axios.get(/api/positions) error: ${err}`);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 push-s3">
            <UserProfileCard userObject={userObject} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12 center-align light-blue accent-3">
            <h1>All Positions</h1>
            <div className="row">
              <PositionsContext.Provider value={positions}>
                <PositionListView getUserPositions={getUserPositions} />
              </PositionsContext.Provider>
            </div>
          </div>
        </div>
      </div>
      "
    </>
  );
};

export default AllPositions;
