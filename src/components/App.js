import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainList from "./MainPage";
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
          <Route path="/" exact component={MainList} />
          <Route path="/employee/:id" component={EmployeeDetails} />
          <Route path="/register" exact component={Register} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
