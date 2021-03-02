import React from "react";
import { Link } from "react-router-dom";
import businessManPng from "../../assets/images/business-man.png";

const NavbarVanilla = () => {
  return (
    <>
      <nav
        className="nav-wrapper"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="brand-logo center">
          <Link className="navbar-item" to="/">
            <img src={businessManPng} width="30" alt="WSB chap" />
          </Link>
        </div>

        {/* TODO: Do we need a burger button? */}

        <ul className="left hide-on-med-and-down">
          <li>
            <Link className="navbar-item" to="/positions/add">
              Add a Position
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/positions/all">
              View Your Positions
            </Link>
          </li>
        </ul>

        <ul className="right hide-on-med-and-down">
          <li>
            <Link className="waves-effect waves-light btn" to="/signup">
              Sign up<i className="material-icons right">person_add</i>
            </Link>
          </li>
          <li>
            <Link className="waves-effect waves-light btn" to="/login">
              Log in <i className="material-icons right">assignment_ind</i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarVanilla;
