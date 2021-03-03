import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios";
import jwt_decode from "jwt-decode";
import GlobalContext from "../../context/GlobalContext";
import M from "materialize-css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { /*userObject,*/ setUserObject, /*token,*/ setToken } = useContext(
    GlobalContext
  );

  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", {
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
              console.log(err); // If login is invalid, perform "foo"
            } else {
              // Call the setJwt callback to set the jwt state variable in App.js
              console.log(`[i] Setting token...`);
              setToken(response.data.token);
              // Decode the jwt to get the userObject, then store the decoded user object in the userObject state in App.js
              const decodedUserObject = jwt_decode(response.data.token);
              setUserObject(decodedUserObject);

              // Materialize Toast w/ callback to redirect to all-positions page
              M.toast({
                html: "You are logged in! Redirecting...",
                completeCallback: history.push("/positions/all"),
                displayLength: 2000,
              });
              // This MUST be converted into a modal or non-modal TOAST with UI-Framework
              //alert(`You are now logged in!`);

              // If login valid, go to logged-in-STATE
              //history.push("/positions/all");
            }
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <br></br>
      <div className="container">
        <div className="row">
          <div className="col s8 push-s2 center-align z-depth-3 teal darken-4">
            <h3>Welcome Back! Please login to continue:</h3>
            <div className="row">
              <form
                onSubmit={handleFormSubmit}
              >
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
                  Many usernames are available. Consider providing feedback to
                  the user at runtime.
                </p>

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
                    <p className="help is-success">Email address goes here.</p>
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
                    <p className="help is-success">Enter your password.</p>
                  </div>
                </div>

                <div className="has-text-centered">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    value="Submit Input"
                  >
                    Log In
                    <i className="fab fa-github right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* add "is-active" to below modal div to activate, use conditional rendering and "login success state?" */}
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <p>You are now logged in!</p>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Continue</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Login;
