import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Application from "./application";

const rootNote = document.getElementById("root");

ReactDOM.render(
  <Router>

<Application /> </Router>, rootNote);
