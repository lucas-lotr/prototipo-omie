import React, { Component } from "react";
import "./Client.css";
import { Icon, Row, Col, Button } from "antd";

class Client extends Component {
  handleSelect = event => {
    const { id, col, changeColumn } = this.props;
    const { value } = event.target;
    // console.log(`${id} ${col} ${value}`);
    event.target.value = "";
    changeColumn(id, col, value);
  };
  render() {
    const { id } = this.props;
    const baseClientes = require("../../baseClientes.json");
    return (
      <div className="card" id={`card${id}`}>
        <Row type="flex" justify="space-between">
          <Col>
            <p className="card-name">{baseClientes[id].name}</p>
          </Col>
          <Col>
            <Icon className="card-icon" type="up-circle" theme="filled" />
          </Col>
        </Row>
        <p className="card-company">{baseClientes[id].company}</p>
        <hr />
        <p className="card-title">{baseClientes[id].title}</p>
        <p className="card-values">{baseClientes[id].values}</p>

        <Row type="flex" justify="space-between">
          <Col>
            <Button className="button-card-options">
              <u>Opções</u>
            </Button>
          </Col>

          <Col>
            <Button className="button-card-tasks">Tarefas</Button>
          </Col>
        </Row>

        <div hidden>
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
