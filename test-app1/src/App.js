import React, { Component } from "react";
import Pik from "./components/pics";
import Det from "./components/details";

class App extends Component {
  state = {
    housedetails: [{ area: "Ameerpet", city: "Hyderabad" }],
    showdetails: false
  };
  disp = () => {
    const doesshow = this.state.showdetails;
    this.setState({ showdetails: !doesshow });
  };

  dynamicchange = event => {
    this.setState({
      housedetails: [{ area: event.target.value, city: "Hyderabad" }]
    });
  };

  render() {
    let showdetails = null;
    if (this.state.showdetails) {
      showdetails = (
        <div>
          {this.state.housedetails.map((data, index) => {
            return (
              <Det
                changed={this.dynamicchange}
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
        <center>
          <header className="App-header">
            <h1>Property Details</h1>
            <Pik />
            <button onClick={this.disp}>Show/Hide</button>
            {showdetails}
          </header>
        </center>
      </div>
    );
  }
}

export default App;
