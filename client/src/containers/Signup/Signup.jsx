import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios";
import jwt_decode from "jwt-decode";
import GlobalContext from "../../context/GlobalContext";
import M from "materialize-css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { /*userObject,*/ setUserObject, /*token,*/ setToken } = useContext(
    GlobalContext
  );

  const history = useHistory();

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/signup", {
        userName: userName,
        email: email,
        password: password,
      })
      .then((response) => {
        jwt.verify(
          response.data.token,
          process.env.REACT_APP_SECRET,
          (err, decoded) => {
            if (err) {
              console.log(err);
            } else {
              // Call the setJwt callback to set the jwt(token) state variable in App.js
              setToken(response.data.token);
              // Decode the jwt to get the userObject, then store the decoded user object in the userObject state in App.js
              const decodedUserObject = jwt_decode(response.data.token);
              setUserObject(decodedUserObject);

              // Materialize TOAST w/ callback function
              M.toast({
                html: "You are signed up! Redirecting...",
                completeCallback: history.push("/positions/all"),
                displayLength: 2000,
              });
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
      <div className="row">
				<div className="col s12 m8 l6 offset-m2 offset-l3">
					<div className="card teal darken-4 z-depth-3">
						<div className="card-content white-text">
							<span class="card-title">Welcome!  Please sign up below:</span>
							<form onSubmit={handleSignupFormSubmit}>
								<div className="input-field">
									<i className="material-icons prefix">account_circle</i>
									<input
										className="validate"
										id="userName"
										type="text"
										name="userName"
										value={userName}
										placeholder=""
										onChange={(e) => {
											setUserName(e.target.value);
										}}
									/>
									<label for="userName">Username</label>
								</div>
								<div className="input-field">
									<i className="material-icons prefix">email</i>
									<input
										class="validate"
										id="email"
										type="email"
										name="email"
										value={email}
										placeholder=""
										onChange={(e)=> {
											setEmail(e.target.value);
										}}
									/>
									<label for="email">Email</label>
								</div>
								<div className="input-field">
									<i className="material-icons prefix">vpn_key</i>
									<input
										class="validate"
										id="password"
										type="password"
										name="password"
										value={password}
										placeholder=""
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
									<label for="password">Password</label>
								</div>
								<div className="card-action">
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
    </>
  );
};

export default Signup;
