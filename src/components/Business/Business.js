import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import "./Business.css";

class Business extends Component {
  state = {
    smallDisplay: window.innerWidth < 992,
    displayColumn: [1, 1, 1, 1]
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = event => {
    let { smallDisplay, displayColumn } = this.state;
    let shouldDiminish = window.innerWidth < 992;
    shouldDiminish = shouldDiminish && !smallDisplay;
    if (shouldDiminish) {
      this.setState({
        smallDisplay: window.innerWidth < 992,
        displayColumn: [1, 0, 0, 0]
      });
      return;
    }

    let shouldIncrease = window.innerWidth > 992;
    shouldIncrease = shouldIncrease && smallDisplay;

    if (shouldIncrease) {
      this.setState({
        smallDisplay: window.innerWidth < 992,
        displayColumn: [1, 1, 1, 1]
      });
      return;
    }
  };

  render() {
    return (
      <div id="negocios">
        <Button type="primary" className="button-add-client">
          Adicionar Cadastro
        </Button>
        <br />

        {/* titulo das colunas */}

        <Row className="row-title">
          <Col
            className="column-title"
            xs={23 * this.state.displayColumn[0]}
            lg={5 * this.state.displayColumn[0]}
          >
            <p>
              <br />
              Clientes potenciais
            </p>
          </Col>
          <Col className="separator-title" xs={1} />
          <Col
            className="column-title"
            xs={23 * this.state.displayColumn[1]}
            lg={5 * this.state.displayColumn[1]}
          >
            <p>
              <br />
              Clientes qualificados
            </p>
          </Col>
          <Col className="separator-title" xs={1} />
          <Col
            className="column-title"
            xs={23 * this.state.displayColumn[2]}
            lg={5 * this.state.displayColumn[2]}
          >
            <p>
              <br />
              Propostas
            </p>
          </Col>
          <Col className="separator-title" xs={1} />
          <Col
            className="column-title"
            xs={23 * this.state.displayColumn[3]}
            lg={5 * this.state.displayColumn[3]}
          >
            <p>
              <br />
              Contrato
            </p>
          </Col>
        </Row>

        {/* fim do titulo das colunas */}

        {/* colunas */}

        <Row className="row">
          <Col
            className="column"
            xs={23 * this.state.displayColumn[0]}
            lg={5 * this.state.displayColumn[0]}
          >
            <p>
              <br />
              Clientes potenciais
            </p>
          </Col>
          <Col className="separator" xs={1} />
          <Col
            className="column"
            xs={23 * this.state.displayColumn[1]}
            lg={5 * this.state.displayColumn[1]}
          >
            <p>
              <br />
              Clientes qualificados
            </p>
          </Col>
          <Col className="separator" xs={1} />
          <Col
            className="column"
            xs={23 * this.state.displayColumn[2]}
            lg={5 * this.state.displayColumn[2]}
          >
            <p>
              <br />
              Propostas
            </p>
          </Col>
          <Col className="separator" xs={1} />
          <Col
            className="column"
            xs={23 * this.state.displayColumn[3]}
            lg={5 * this.state.displayColumn[3]}
          >
            <p>
              <br />
              Contrato
            </p>
          </Col>
        </Row>

        {/* fim das colunas */}
      </div>
    );
  }
}
export default Business;
