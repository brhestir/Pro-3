import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/restaurants" component={AllRestaurants} />
          <Route exact path="/restaurants/new" component={NewRestaurant} />
          <Route exact path="/restaurants/:id" component={SingleRestaurant} />
          <Route exact path="/restaurants/:id/edit" component={EditRestaurant} /> */}
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
