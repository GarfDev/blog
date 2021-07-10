import React from "react";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import { Base } from "./@global/styles";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Import Internal Features
import Homepage from "./modules/homepage";
import Projects from "./modules/projects";

const Application = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://garfdev.netlify.app/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nguyen Gia Tuan Personal Space" />
      </Helmet>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/explore" component={Projects} />
          <Route path="/" component={Homepage} />
        </Switch>
      </AnimatePresence>
      <Base />
    </>
  );
};

export default Application;
