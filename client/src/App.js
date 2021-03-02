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
import GlobalContext from "./context/GlobalContext";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

function App() {

	const [userObject, setUserObject] = useState({});
	const [token, setToken] = useState({});

	useEffect( () => {
		const token = sessionStorage.getItem(`STARK_ETF_TOKEN`);
		setUserObject(jwt_decode(token));
	}, []);

	useEffect( () => {
		sessionStorage.setItem(`STARK_ETF_TOKEN`, token);
		console.log(`[i] Logged in; login persistence active; sessionStorage.STARK_ETF_TOKEN = `);
		console.log(token);
	}, [token]);

	return (
    <div className="App">
      <header className="App-header">
				<GlobalContext.Provider value={{ userObject, setUserObject, token, setToken }}>
				<Router>
					<NavbarVanilla />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/positions/add" component={ (props) => <AddPosition {...props} /> } />
							<Route exact path="/positions/edit" component={EditPositions} />
							{/* <Route exact path="/positions/:id" component={SinglePosition} /> */}
							<Route exact path="/positions/all" component={ (props) => <AllPositions {...props} /> } />
							<Route exact path="/positions/info" component={PositionInfo} />
							<Route
								exact path="/signup"
								component={ (props) => <Signup {...props} /> }
							/>
							<Route
								exact path="/login"
								component={ (props) => <Login {...props} /> }
							/>
							<Route exact path="/loading" component={Loading}/>
						</Switch>
					</Router>
				</GlobalContext.Provider>


					
			
			</header>
    </div>
  );
}

export default App;
