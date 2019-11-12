import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";
import Register from "./Register";
import MainList from "./MainPage";
import EmployeeDetails from "./EmployeeDetails";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainList} />
          <Route path="/:id" component={EmployeeDetails} />
          <Route path="/search" exact component={Search} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
