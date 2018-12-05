import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import "./Business.css";

class Business extends Component {
  state = {
    firstRun: true,
    smallDisplay: window.innerWidth < 992,
    displayColumn: [1, 1, 1, 1]
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = event => {
    let { smallDisplay, firstRun } = this.state;
    let shouldDiminish = window.innerWidth < 992;
    shouldDiminish = shouldDiminish && !smallDisplay;
    if (shouldDiminish) {
      this.setState({
        firstRun: false,
        smallDisplay: window.innerWidth < 992,
        displayColumn: [1, 0, 0, 0]
      });
      return;
    }

    let shouldIncrease = window.innerWidth >= 992;
    shouldIncrease = shouldIncrease && smallDisplay;

    if (shouldIncrease) {
      this.setState({
        firstRun: false,
        smallDisplay: window.innerWidth < 992,
        displayColumn: [1, 1, 1, 1]
      });
      return;
    }
    if (window.innerWidth < 992 && firstRun) {
      this.setState({
        firstRun: false,
        smallDisplay: window.innerWidth < 992,
        displayColumn: [1, 0, 0, 0]
      });
      return;
    }
  };

  handleSelect = event => {
    let { selectedIndex } = event.target;
    let { displayColumn } = this.state;
    console.log(displayColumn);
    for (let i = 0; i < displayColumn.length; i++) {
      if (i === selectedIndex) {
        displayColumn[i] = 1;
      } else {
        displayColumn[i] = 0;
      }
    }
    console.log(displayColumn);
    this.setState(this.state);
  };

  render() {
    return (
      <div id="negocios">
        <Button type="primary" className="button-add-client">
          Adicionar Cadastro
        </Button>
        <br />

        {this.state.smallDisplay ? (
          <div>
            <br />
            <select onChange={this.handleSelect}>
              <option value="volvo">Clientes potenciais</option>
              <option value="saab">Clientes qualificados</option>
              <option value="mercedes">Propostas</option>
              <option value="audi">Contrato</option>
            </select>
          </div>
        ) : (
          ""
        )}

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
          <Col className="separator-title" xs={0} lg={1} />
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
          <Col className="separator-title" xs={0} lg={1} />
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
          <Col className="separator-title" xs={0} lg={1} />
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
          <Col className="separator" xs={0} lg={1} />
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
          <Col className="separator" xs={0} lg={1} />
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
          <Col className="separator" xs={0} lg={1} />
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
