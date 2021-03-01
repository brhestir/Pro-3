import React from "react";
import { Link } from "react-router-dom";
import businessManPng from "../../assets/images/business-man.png";

const NavbarVanilla = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={businessManPng} width="30" alt="WSB chap" />
          </Link>

          {/* Burger button */}
          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            to="#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
          {/* End Burger button */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/positions/add">
              Position: Add
            </Link>
            <Link className="navbar-item" to="/positions/edit">
              Edit Positions
            </Link>
            <Link className="navbar-item" to="/positions/all">
              Positions: All
            </Link>
            <Link className="navbar-item" to="/positions/info">
              Position Info
            </Link>
            <Link className="navbar-item" to="/loading">
              Loading Page
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/signup">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarVanilla;
