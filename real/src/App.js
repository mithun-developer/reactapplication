import React, { Component } from "react";
import Pic from "./Components/housepic";
import Detail from "./Components/details";

class App extends Component {
  state = {
    properties: [
      { area: "Begumpet", city: "Hyderabad" },
      { area: "Ameerpet", city: "Hyderabad" },
      { area: "SR Nagar", city: "Hyderabad" }
    ],
    showProperties: false
  };
  show = () => {
    this.setState({
      properties: [
        { area: "Madhapur", city: "Hyderabad" },
        { area: "Gachibowli", city: "Hyderabad" },
        { area: "Hitec city", city: "Hyderabad" }
      ]
    });
  };

  hide = () => {
    const doesshow = this.state.showProperties;
    this.setState({ showProperties: !doesshow });
  };

  delete = Indexval => {
    const house = this.state.properties;
    house.splice(Indexval, 1);
    this.setState({ properties: house });
  };
  render() {
    let properties = null;
    if (this.state.showProperties) {
      properties = (
        <div>
          {this.state.properties.map((data, index) => {
            return (
              <Detail
                clicked={() => this.delete(index)}
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
          <center>
            <h1>Property Details</h1>

            <Pic />
            <button onClick={this.hide}>Show/Hide</button>

            {properties}

            <button onClick={this.show}>Show More</button>
          </center>
        </header>
      </div>
    );
  }
}
export default App;
