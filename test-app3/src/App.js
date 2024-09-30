import React, { Component } from "react";
import { render } from "@testing-library/react";
import Pic from "./Components/pics";
import Info from "./Components/details";

class App extends Component {
  state = {
    properties: [
      { area: "Begumpet", city: "Hyderabad" },
      { area: "Ameerpet", city: "Hyderabad" },
      { area: "Malakpet", city: "Hyderabad" }
    ]
  };

  del = indexval => {
    const house = this.state.properties;
    house.splice(indexval, 1);
    this.setState({ properties: house });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <center>
            <h1>Property Details</h1>
            <Pic />

            {this.state.properties.map((data, index) => {
              return <Info rem={this.del} area={data.area} city={data.city} />;
            })}
          </center>
        </header>
      </div>
    );
  }
}

export default App;
