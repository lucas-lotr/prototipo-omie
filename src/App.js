import React, { Component } from "react";
import "./App.css";
import Business from "./components/Business/Business";

// class client {
//   constructor(name, company) {
//     this.name = name;
//     this.company = company;
//   }
// }

class App extends Component {
  state = {
    page: "business",
    clients: require("./baseClientes.json")
  };

  newClient = client => {
    this.state.clients.push(client);
    this.setState(this.state);
  };

  switchPage = page => {
    this.setState({ page: page });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.page === "business" ? <Business /> : ""}
      </div>
    );
  }
}

export default App;
