import React from "react";

import Login from "../components/login";
import Stamp from "../components/stamp";

const Hoc = () => {
  return class extends React.Component {
    state = {
      auth: false,
    };
    render() {
      return <div>{this.state.auth ? <Stamp name="mithun" /> : <Login />}</div>;
    }
  };
};

export default Hoc;
