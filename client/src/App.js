import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPosition from "./containers/AddPosition/AddPosition";
import AllPositions from "./containers/AllPositions/AllPositions";
import EditPositions from "./containers/EditPositions/EditPositions";
import Home from "./containers/Home/Home";
import NavbarVanilla from "./containers/NavbarVanilla/NavbarVanilla";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavbarVanilla />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/positions/add" component={AddPosition} />
            <Route exact path="/positions/edit" component={EditPositions} />
            {/* <Route exact path="/positions/:id" component={SinglePosition} /> */}
            <Route exact path="/positions/all" component={AllPositions} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
