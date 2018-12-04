import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import "./Business.css";

class Business extends Component {
  state = {
    displayColumn: [true, true, true, true]
  };

  render() {
    const colPropsXS = { span: 23 };
    const colPropsLG = { span: 5 };

    return (
      <div id="negocios">
        <Button type="primary" className="button-add-client">
          Adicionar Cadastro
        </Button>
        <br />
        <Row className="row-title">
          <Col className="column-title" xs={colPropsXS} lg={colPropsLG}>
            <p>
              <br />
              Clientes potenciais
            </p>
          </Col>
          <Col className="separator-title" xs={1} />
          <Col className="column-title" xs={colPropsXS} lg={colPropsLG}>
            <p>
              <br />
              Clientes qualificados
            </p>
          </Col>
          <Col className="separator-title" xs={1} />
          <Col className="column-title" xs={colPropsXS} lg={colPropsLG}>
            <p>
              <br />
              Propostas
            </p>
          </Col>
          <Col className="separator-title" xs={1} />
          <Col className="column-title" xs={colPropsXS} lg={colPropsLG}>
            <p>
              <br />
              Contrato
            </p>
          </Col>
        </Row>
        <Row className="row">
          <Col className="column" xs={colPropsXS} lg={colPropsLG}>
            <p>
              <br />
              Clientes potenciais
            </p>
          </Col>
          <Col className="separator" xs={1} />
          <Col className="column" xs={colPropsXS} lg={colPropsLG}>
            <p>
              <br />
              Clientes qualificados
            </p>
          </Col>
          <Col className="separator" xs={1} />
          <Col className="column" xs={colPropsXS} lg={colPropsLG}>
            <p>
              <br />
              Propostas
            </p>
          </Col>
          <Col className="separator" xs={1} />
          <Col className="column" xs={colPropsXS} lg={colPropsLG}>
            <p>
              <br />
              Contrato
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Business;
