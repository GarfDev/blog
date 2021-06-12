import React from "react";
import { Base } from "./@global/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Internal Features
import Homepage from "./homepage";

const Application = () => {
  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://garfdev.netlify.app/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nguyen Gia Tuan Personal Space" />
      </Helmet>
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
