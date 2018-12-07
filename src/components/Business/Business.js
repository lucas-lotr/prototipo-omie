import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Modal,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Icon
} from "antd";
import "./Business.css";
import Client from "../Client/Client";

class Business extends Component {
  state = {
    clientModalVisible: false,
    firstRun: true,
    smallDisplay: window.innerWidth < 992,
    displayColumn: [1, 1, 1, 1],
    columnCards: [[0, 1, 2, 3], [4], [], []]
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  setClientModalVisible = clientModalVisible => {
    this.setState({ clientModalVisible });
  };

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

    for (let i = 0; i < displayColumn.length; i++) {
      if (i === selectedIndex) {
        displayColumn[i] = 1;
      } else {
        displayColumn[i] = 0;
      }
    }

    this.setState(this.state);
  };

  changeColumn = (id, fromColumn, toColumn) => {
    let { columnCards } = this.state;
    if (fromColumn == toColumn) {
      return;
    }
    columnCards[fromColumn].splice(columnCards[fromColumn].indexOf(id), 1);
    columnCards[toColumn].push(id);
    // console.log(`${id} ${fromColumn} ${toColumn}`);
    // console.log(this.state.columnCards);
    this.setState(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.company.value);
    console.log(event.target.title.value);
    console.log(event.target.values.value);
    console.log(event.target.stage.value);
    console.log(event.target.budget.value);
    console.log(
      document.getElementById("deadline").childNodes[0].childNodes[0].value
    );
  };

  render() {
    const column0 = this.state.columnCards[0].map(client => {
      return (
        <Client
          key={client}
          id={client}
          col={0}
          changeColumn={this.changeColumn}
        />
      );
    });
    const column1 = this.state.columnCards[1].map(client => {
      return (
        <Client
          key={client}
          id={client}
          col={1}
          changeColumn={this.changeColumn}
        />
      );
    });
    const column2 = this.state.columnCards[2].map(client => {
      return (
        <Client
          key={client}
          id={client}
          col={2}
          changeColumn={this.changeColumn}
        />
      );
    });
    const column3 = this.state.columnCards[3].map(client => {
      return (
        <Client
          key={client}
          id={client}
          col={3}
          changeColumn={this.changeColumn}
        />
      );
    });
    // console.log(column1);
    return (
      <div id="negocios">
        <Button
          name="add-client"
          type="primary"
          className="button-add-client"
          onClick={() => this.setClientModalVisible(true)}
        >
          Adicionar Cadastro
        </Button>
        <br />

        {this.state.smallDisplay ? (
          <div>
            <br />
            <select onChange={this.handleSelect}>
              <option>Clientes potenciais</option>
              <option>Clientes qualificados</option>
              <option>Propostas</option>
              <option>Contrato</option>
            </select>
          </div>
        ) : (
          ""
        )}

        {/* modal adicionar cliente */}

        <Modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={this.state.clientModalVisible}
          footer={null}
          title={null}
          closable={false}
          onOk={() => this.setClientModalVisible(false)}
          onCancel={() => this.setClientModalVisible(false)}
        >
          <Form
            className="form-add-client"
            layout="vertical"
            onSubmit={this.handleSubmit}
          >
            <h2>Novo cadastro</h2>
            <Input.Group size="large">
              <Form.Item label="Nome do contato">
                <Input type="text" name="name" />
              </Form.Item>
              <Form.Item label="Empresa / organização">
                <Input type="text" name="company" />
              </Form.Item>
              <Form.Item label="Título do negócio">
                <Input type="text" name="title" />
              </Form.Item>
              <Form.Item label="Valor">
                <InputNumber
                  size="large"
                  className="input-valor"
                  name="values"
                  defaultValue={0}
                  formatter={value =>
                    `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={value => value.replace("R$ ", "").replace(",", "")}
                />
              </Form.Item>
              <Form.Item label="Etapa">
                <div className="select-etapa">
                  <select name="stage">
                    <option>Clientes potenciais</option>
                    <option>Clientes qualificados</option>
                    <option>Propostas</option>
                    <option>Contrato</option>
                  </select>
                </div>
                {/* <Select defaultValue="lucy" onChange="">
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="disabled">Disabled</Select.Option>
                  <Select.Option value="Yiminghe">yiminghe</Select.Option>
                </Select> */}
              </Form.Item>
              <hr />
              <br />
              <h3>Prioridade</h3>

              <Form.Item label="Budget">
                <InputNumber
                  size="large"
                  name="budget"
                  className="input-valor"
                  defaultValue={0}
                  formatter={value =>
                    `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={value => value.replace("R$ ", "").replace(",", "")}
                />
              </Form.Item>
              <Form.Item label="Prazo">
                <DatePicker id="deadline" format="DD/MM/YYYY" />
              </Form.Item>
            </Input.Group>

            <Row type="flex" justify="center">
              <Col>
                <Form.Item>
                  <Button className="submit-button" htmlType="submit">
                    Salvar
                  </Button>
                </Form.Item>
              </Col>

              <Col>
                <Form.Item>
                  <Button
                    className="cancel-button"
                    onClick={() => this.setClientModalVisible(false)}
                  >
                    <u>Cancelar</u>
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>

        {/* fim modal adicionar cliente */}

        {/* titulo das colunas */}

        <Row className="row-title" type="flex" justify="center">
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
          <Col className="separator-title" xs={0} lg={1}>
            <Icon type="right" />
          </Col>
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

        <Row className="row" type="flex" justify="center">
          <Col
            className="column"
            xs={23 * this.state.displayColumn[0]}
            lg={5 * this.state.displayColumn[0]}
          >
            {column0}
          </Col>
          <Col className="separator" xs={0} lg={1} />
          <Col
            className="column"
            xs={23 * this.state.displayColumn[1]}
            lg={5 * this.state.displayColumn[1]}
          >
            {column1}
          </Col>
          <Col className="separator" xs={0} lg={1} />
          <Col
            className="column"
            xs={23 * this.state.displayColumn[2]}
            lg={5 * this.state.displayColumn[2]}
          >
            {column2}
          </Col>
          <Col className="separator" xs={0} lg={1} />
          <Col
            className="column"
            xs={23 * this.state.displayColumn[3]}
            lg={5 * this.state.displayColumn[3]}
          >
            {column3}
          </Col>
        </Row>

        {/* fim das colunas */}
      </div>
    );
  }
}
export default Business;
