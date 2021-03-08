import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import diamondHands from "../../assets/images/diamondhands.png";
import GlobalContext from "../../context/GlobalContext";
import M from "materialize-css";

const NavbarVanilla = () => {
  const { userObject /*, setUserObject, token, setToken*/ } = useContext(
    GlobalContext
  );

	useEffect(() => {
		var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
	}, []);
	return (
    <>
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper teal darken-4" role="navigation" aria-label="main navigation">
						<Link className="brand-logo center" to="/"><img src={diamondHands} width="300" alt="Diamond Hands Logo"/></Link>
						<Link className="sidenav-trigger" to="#" data-target="mobile-demo"><i class="material-icons">menu</i></Link>
						<ul className="right hide-on-med-and-down">
							{ userObject._id && ( <li><Link to="/positions/add">Add Position</Link></li> )}
							{ userObject._id && ( <li><Link to="/positions/all">View Positions</Link></li> )}
							{!userObject._id && ( <li><Link to="/signup">Sign up<i className="material-icons right">person_add</i></Link></li> )}
							{!userObject._id && ( <li><Link to="/login">Log in<i className="material-icons right">assignment_ind</i></Link></li> )}
						</ul>

					</div>
				</nav>
			</div>
			<ul class="sidenav" id="mobile-demo">
				{ userObject._id && ( <li><Link to="/positions/add">Add Position</Link></li> )}
				{ userObject._id && ( <li><Link to="/positions/all">View Positions</Link></li> )}
				{!userObject._id && ( <li><Link to="/signup">Sign up<i className="material-icons right">person_add</i></Link></li> )}
				{!userObject._id && ( <li><Link to="/login">Log in<i className="material-icons right">assignment_ind</i></Link></li> )}
			</ul>
		</>
  );
};

export default NavbarVanilla;
