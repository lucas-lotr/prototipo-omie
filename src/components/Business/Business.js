import React, { Component } from "react";
import { Button } from "antd";
import "./Business.css";

class Business extends Component {
  render() {
    return (
      <div id="negocios">
        <Button type="primary" className="button-add-client">
          Adicionar Cadastro
        </Button>
      </div>
    );
  }
}
export default Business;
