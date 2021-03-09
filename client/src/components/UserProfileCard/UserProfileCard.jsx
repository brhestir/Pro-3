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
            <div className="card-content white-text profile-card">
              <div className="row">
                <div className="col s4">
                  <img
                    className="userPic"
                    src={profilePic}
                    alt="Wealthy human instance"
                  />
                </div>
                <div className="col s6 push-s1 profile-card-text">
                  <h3>{props.userObject.userName}</h3>
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
