import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";

import App from "./components/App";
import history from "./history";

ReactDOM.render(
  <Router history={history}>
    <Route component={App} />
  </Router>,
  document.querySelector("#root")
);
