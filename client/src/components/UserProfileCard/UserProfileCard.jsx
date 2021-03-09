import React from "react";
import profilePic from "../../assets/images/diamondHandsMascot.png";
import "./UserProfileCard.css";

const UserProfileCard = (props) => {
  // const [userImageURL, setUserImageURL] = useState({ batemanPixelPng });
  //const [userPercentChange] = useState(80);

  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card teal darken-4">
            <div className="card-content white-text">
              <div className="row">
                <div className="col s4 m6">
                  <img
                    className="userPic"
                    src={profilePic}
                    alt="Wealthy human instance"
                  />
                </div>
                <div className="col s8 m6">
                  <p>{props.userObject.userName}</p>
                  {props.userObject.totalChange 
                  ? <p>Lifetime Return: {props.userObject.totalChange.toFixed(2)}%</p>
                  : <p>Lifetime Return: 0.00%</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
