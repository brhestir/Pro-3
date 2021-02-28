import React, { useState } from "react";
import batemanPixelPng from "../../assets/images/leoDC_pixel.png";

const UserProfileCard = (props) => {
  // const [userImageURL, setUserImageURL] = useState({ batemanPixelPng });
  const [userPercentChange] = useState(80);

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-3">
            <div className="block">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <img
                          src={batemanPixelPng}
                          alt="Wealthy human instance"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-3">{props.userObject.userName}</p>
                      <p className="subtitle is-6">
                        <strong>% change: </strong>
                        <span className="tag">{userPercentChange}</span>
                      </p>
                    </div>
                  </div>
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
