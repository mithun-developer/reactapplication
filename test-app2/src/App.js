import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pik from "./components/pic";
import Dett from "./components/details";

class App extends Component {
  state = {
    properties: [
      { id: 1, area: "Begumpet", city: "Hyderabad" },
      { id: 2, area: "Ameerpet", city: "Hyderabad" },
      { id: 3, area: "DSNR", city: "Hyderabad" }
    ],
    showproperties: false
  };

  del = indexval => {
    const house = this.state.properties;
    house.splice(indexval, 1);
    this.setState({ properties: house });
  };

  disp = () => {
    const doesshow = this.state.showproperties;
    this.setState({ showproperties: !doesshow });
  };

  show = () => {
    this.setState({
      properties: [
        { id: 4, area: "Hitech city", city: "Hyderabad" },
        { id: 5, area: "Gachibowli", city: "Hyderabad" },
        { id: 6, area: "Kondapur", city: "Hyderabad" }
      ]
    });
  };

  render() {
    let showproperties = null;
    if (this.state.showproperties) {
      showproperties = (
        <div>
          {this.state.properties.map((data, index) => {
            return (
              <Dett
                remove={() => this.del(index)}
                key={data.id}
                id={data.id}
                area={data.area}
                city={data.city}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Property Details</h1>
          <Pik />
          <button onClick={this.disp}>Show/Hide</button>

          {showproperties}
          <button onClick={this.show}>Show More</button>
        </header>
      </div>
    );
  }
}

export default App;
