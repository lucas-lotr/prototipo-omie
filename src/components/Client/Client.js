import React, { Component } from "react";
import "./Client.css";
import { Button } from "antd";

class Client extends Component {
  handleSelect = event => {
    const { id, col, changeColumn } = this.props;
    const { value } = event.target;
    // console.log(`${id} ${col} ${value}`);
    event.target.value = "";
    changeColumn(id, col, value);
  };
  render() {
    const { id, col } = this.props;
    return (
      <div className="card" id={`card${id}`}>
        card{id}
        <div>
          <br />
          <select defaultValue="" onChange={this.handleSelect}>
            <option value="" disabled hidden>
              Transferir para...
            </option>
            <option value="0">Clientes potenciais</option>
            <option value="1">Clientes qualificados</option>
            <option value="2">Propostas</option>
            <option value="3">Contrato</option>
          </select>
        </div>
      </div>
    );
  }
}
export default Client;
