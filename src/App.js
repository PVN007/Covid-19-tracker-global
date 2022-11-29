import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Topbar/Navbar";
import Global from "./Topbar/Global";
import About from "./Topbar/About";
import India from "./Topbar/India";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Global />} />
          <Route exact path="/india" render={() => <India />} />
          <Route exact path="/about" render={() => <About />} />
        </Switch>
      </Router>
      {/* <Home />
      <Contect /> */}
    </>
  );
};
export default App;
