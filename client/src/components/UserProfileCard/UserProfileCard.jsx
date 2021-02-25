import React, { useState } from "react";
import batemanPixelPng from "../../assets/images/leoDC_pixel.png";

const UserProfileCard = () => {
  const [userName, setUserName] = useState("Jordan Belfort");
  const [userSocial, setUserSocial] = useState("@TastefulBusinessCards");
  const [userImageURL, setUserImageURL] = useState({ batemanPixelPng });
  const [userPercentChange, setUserPercentChange] = useState(80);

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-3">
            {/* spacer div wrapper*/}
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
                      <p className="title is-3">{userName}</p>
                      <p className="subtitle is-6">
                        <strong>% change: </strong>
                        <span className="tag">{userPercentChange}</span>
                        {/* <a> #stonks </a>
                        <a href="#">#YOLO</a> */}
                      </p>
                      {/* <p className="subtitle is-6">{userSocial}</p> */}
                    </div>
                  </div>
                  {/* <div className="content">
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div> */}
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
