import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Signup = ({ setUserObject }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/signup", {
        userName: userName,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_SECRET,
          (err, decoded) => {
            if (err) {
              console.log(err);
            } else {
              const decodedUserObject = jwt_decode(response.data.token);
              console.log(decodedUserObject);

              // This does nothing at present, need to set calback function on component callout in app.js
              setUserObject(decodedUserObject);
              // This MUST be converted into a modal or non-modal TOAST with UI-Framework
              alert(
                `Signup success!  Your token is set as ${response.data.token}`
              );

              history.push("/positions/all");
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <h1 className="is-size-1 has-text-centered">
            Welcome! Please Create an Account:
          </h1>
        </div>
      </div>

      <div className="columns">
        <form className="column is-12" onSubmit={handleFormSubmit}>
          <div className="columns">
            <div className="column is-3"></div>
            <div className="field column is-6">
              <label className="label">Username:</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  id="userName"
                  type="text"
                  name="userName"
                  value={userName}
                  placeholder="Enter username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className="help is-success">
                Many usernames are available. Consider providing feedback to the
                user at runtime.
              </p>
            </div>
          </div>

          <div className="columns">
            <div className="column is-3"></div>
            <div className="field column is-6">
              <label className="label">Email:</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className="help is-success">
                Email address will be converted to lowercase. Must be unique.
              </p>
            </div>
          </div>

          <div className="columns">
            <div className="column is-3"></div>
            <div className="field column is-6">
              <label className="label">Password:</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-key"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className="help is-success">
                Some passwords may be to short for example. Consider providing
                feedback to the user at runtime.
              </p>
            </div>
          </div>

          <div className="has-text-centered">
            <button
              className="button is-primary is-large is-outlined"
              type="submit"
              value="Submit Input"
            >
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
