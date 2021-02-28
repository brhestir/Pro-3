import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPosition from "./containers/AddPosition/AddPosition";
import AllPositions from "./containers/AllPositions/AllPositions";
import EditPositions from "./containers/EditPositions/EditPositions";
import Home from "./containers/Home/Home";
import NavbarVanilla from "./containers/NavbarVanilla/NavbarVanilla";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";

function App() {

	const [userObject, setUserObject] = useState({});

	useEffect( () => {
		//console.log("userObject updated w/ useEffect hook in App.js");
		//console.log(userObject);
	}, [userObject]);

	return (
    <div className="App">
      <header className="App-header">
       
					<Router>
						<NavbarVanilla />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/positions/add" component={ (props) => <AddPosition {...props} userObject={userObject} setUserObject={setUserObject} /> } />
							<Route exact path="/positions/edit" component={EditPositions} />
							{/* <Route exact path="/positions/:id" component={SinglePosition} /> */}
							<Route exact path="/positions/all" component={ (props) => <AllPositions {...props} userObject={userObject} setUserObject={setUserObject} /> } />
							<Route
								exact path="/signup"
								component={ (props) => <Signup {...props} setUserObject={setUserObject} /> }
							/>
							<Route
								exact path="/login"
								component={ (props) => <Login {...props} setUserObject={setUserObject} /> }
							/>
						</Switch>
					</Router>
      
			</header>
    </div>
  );
}

export default App;
