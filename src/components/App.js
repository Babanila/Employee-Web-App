import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Register from "./Register";
import About from "./About";
import EmployeeDetails from "./EmployeeDetails";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/employee/:id" component={EmployeeDetails} />
          <Route path="/register" exact component={Register} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
