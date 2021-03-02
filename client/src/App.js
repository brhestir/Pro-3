import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPosition from "./containers/AddPosition/AddPosition";
import AllPositions from "./containers/AllPositions/AllPositions";
import EditPositions from "./containers/EditPositions/EditPositions";
import Home from "./containers/Home/Home";
import NavbarVanilla from "./containers/NavbarVanilla/NavbarVanilla";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";
import PositionInfo from "./containers/PositionInfo/PositionInfo";
import Loading from "./containers/Loading/Loading";

function App() {

	const [userObject, setUserObject] = useState({});
	const [jwt, setJwt] = useState({});

	useEffect( () => {
		//console.log("userObject updated w/ useEffect hook in App.js");
		//console.log(userObject);
	}, [userObject]);

	useEffect( () => {
		sessionStorage.setItem(`STARK_ETF_JWT`, jwt);
		console.log(`[i] Logged in; login persistence active; sessionStorage.STARK_ETF_JWT = ${jwt}`);
	}, [jwt]);

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
							<Route exact path="/positions/info" component={PositionInfo} />
							<Route
								exact path="/signup"
								component={ (props) => <Signup {...props} setUserObject={setUserObject} setJwt={setJwt}/> }
							/>
							<Route
								exact path="/login"
								component={ (props) => <Login {...props} setUserObject={setUserObject} setJwt={setJwt} /> }
							/>
							<Route exact path="/loading" component={Loading}/>
						</Switch>
					</Router>
      
			</header>
    </div>
  );
}

export default App;
