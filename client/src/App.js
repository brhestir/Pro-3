import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPosition from "./containers/AddPosition/AddPosition";
import AllPositions from "./containers/AllPositions/AllPositions";
import Home from "./containers/Home/Home";
import NavbarVanilla from "./containers/NavbarVanilla/NavbarVanilla";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";
import PositionInfo from "./containers/PositionInfo/PositionInfo";
import Loading from "./containers/Loading/Loading";
import GlobalContext from "./context/GlobalContext";
import jwt from "jsonwebtoken";
import M from "materialize-css";




function App() {

	// Thanks to Jude
	const [token, setToken] = useState(sessionStorage.getItem(`STARK_ETF_TOKEN`)||"");
	const [userObject, setUserObject] = useState(sessionStorage.getItem(`STARK_ETF_OBJECT`)||{});

	useEffect( () => {
		const sessionToken = sessionStorage.getItem(`STARK_ETF_TOKEN`);
		if(sessionToken){
			setToken(sessionToken);
			jwt.verify(sessionToken, process.env.REACT_APP_SECRET, (err, decoded) => {
				if(err) {
					console.log(err);	// Invalid session token
				} else {
					setUserObject(decoded);
				}
			})
		}
	}, []);

	// When "token" is updated, also update it in sessionStorage
	useEffect( () => {
		sessionStorage.setItem(`STARK_ETF_TOKEN`, token);
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
