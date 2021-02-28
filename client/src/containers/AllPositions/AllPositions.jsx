import React, { useEffect, useState } from "react";
import axios from "axios";
import PositionListView from "../../components/PositionListView/PositionListView";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import PositionsContext from "../../context/PositionsContext";

const AllPositions = (props) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // WE HAVE USER _id already, need to get the updated userOBJECT
    //console.log("props.userObject._id:");
    //console.log(props.userObject._id);
    axios
      .get(`/api/users/${props.userObject._id}`)
      .then((response) => {
        //let positionIdArray = response.data.positions;
        //console.log(positionIdArray);

        let positionDataArray = [];
        response.data.positions.map(function (currentPositionID) {
          axios
            .get(`/api/positions/${currentPositionID}`)
            .then((response) => {
              //console.log(response.data);
              positionDataArray.push(response.data);
            })
            .catch((err) => {
              if (err) {
                throw err;
              }
            });
        }); // end of MAP
        //console.log("positionDataArray: ");
        //console.log(positionDataArray);
        setPositions(positionDataArray); // update state with returned data
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
        <UserProfileCard userObject={props.userObject} />
        {/*value passed to provider must be declared with useState*/}
        <PositionsContext.Provider value={positions}>
          <PositionListView />
        </PositionsContext.Provider>
      </div>
    </>
  );
};

export default AllPositions;
