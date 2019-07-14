import React from "react";
import { Route } from "react-router-dom";

import Buyer from "./Buyer/Buyer";
import Seller from "./Seller/Seller";

import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div>
        {/* route all paths to overview page */}
        <Route path="/" exact component={Buyer} />
        <Route path="/buyer" exact component={Buyer} />
        <Route path="/seller" exact component={Seller} />
      </div>
    );
  }
}

export default App;
