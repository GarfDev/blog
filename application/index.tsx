import React from "react";
import { Base } from "./@global/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Internal Features
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./homepage";

const Application = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
      <Base />
    </>
  );
};

export default Application;
