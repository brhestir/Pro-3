import React from "react";
import batemanPixelPng from "../../assets/images/leoDC_pixel.png";
import "./UserProfileCard.css";

const UserProfileCard = (props) => {
  // const [userImageURL, setUserImageURL] = useState({ batemanPixelPng });
  //const [userPercentChange] = useState(80);

  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <div className="row">
                <div className="col s4 m6">
                  <img
                    className="userPic"
                    src={batemanPixelPng}
                    alt="Wealthy human instance"
                  />
                </div>
                <div className="col s8 m6">
                  <p>{props.userObject.userName}</p>
                  <p>
                    Lifetime Return: {props.userObject.totalChange.toFixed(1)} %
                  </p>
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
