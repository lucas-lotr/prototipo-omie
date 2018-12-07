import React, { Component } from "react";
import moment from "moment";
import {
  Icon,
  Row,
  Col,
  Button,
  Popover,
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker
} from "antd";
import "./Client.css";
import Balloon from "../Balloon/Balloon";

class Client extends Component {
  state = {
    editClientModalVisible: false
  };
  setEditClientModalVisible = editClientModalVisible => {
    this.setState({ editClientModalVisible });
  };
  handleSelect = event => {
    const { id, col, changeColumn } = this.props;
    const { value } = event.target;
    // console.log(`${id} ${col} ${value}`);
    event.target.value = "";
    changeColumn(id, col, value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setEditClientModalVisible(false);
  };

  calculateUrgency = (id, base) => {
    let { budget } = base[id];

    let val = budget.substring(budget.indexOf(" "), budget.length);

    //console.log(val);

    if (val > 150000) {
      return "high";
    }

    if (val > 80000) {
      return "medium";
    }

    if (val > 40000) {
      return "average";
    }

    return "low";
  };

  getIconType = urgency => {
    if (urgency === "high") {
      return { type: "info-circle", fill: "filled", color: "#F95F62" };
    }
    if (urgency === "medium") {
      return { type: "up-circle", fill: "filled", color: "#FF9052" };
    }
    if (urgency === "average") {
      return { type: "minus-circle", fill: "filled", color: "#FFD185" };
    }
    if (urgency === "low") {
      return { type: "down-circle", fill: "filled", color: "#77D353" };
    }
    return { type: "", fill: "", color: "" };
  };

  render() {
    const { id } = this.props;
    const baseClientes = require("../../baseClientes.json");

    let urgency = this.calculateUrgency(id, baseClientes);

    let icon = this.getIconType(urgency);

    const popoverContent = (
      <div>
        <br />
        Mover <br />
        <select defaultValue="" onChange={this.handleSelect}>
          <option value="" disabled hidden>
            Mover para...
          </option>
          <option value="0">Clientes potenciais</option>
          <option value="1">Clientes qualificados</option>
          <option value="2">Propostas</option>
          <option value="3">Contrato</option>
        </select>
        <br />
        <Button
          onClick={() => this.setEditClientModalVisible(true)}
          className="button-card-edit"
          icon="edit"
        >
          <u>Editar</u>
        </Button>
        <Button className="button-card-delete" icon="delete">
          <u>Excluir</u>
        </Button>
      </div>
    );
    return (
      <div className="card" id={`card${id}`}>
        {/* modal editar cliente */}

        <Modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={this.state.editClientModalVisible}
          footer={null}
          title={null}
          closable={false}
          onOk={() => this.setEditClientModalVisible(false)}
          onCancel={() => this.setEditClientModalVisible(false)}
        >
          <Form
            className="form-add-client"
            layout="vertical"
            onSubmit={this.handleSubmit}
          >
            <h2>Novo cadastro</h2>
            <Input.Group size="large">
              <Form.Item label="Nome do contato">
                <Input
                  defaultValue={baseClientes[id].name}
                  type="text"
                  name="name"
                />
              </Form.Item>
              <Form.Item label="Empresa / organização">
                <Input
                  defaultValue={baseClientes[id].company}
                  type="text"
                  name="company"
                />
              </Form.Item>
              <Form.Item label="Título do negócio">
                <Input
                  defaultValue={baseClientes[id].title}
                  type="text"
                  name="title"
                />
              </Form.Item>
              <Form.Item label="Valor">
                <InputNumber
                  size="large"
                  className="input-valor"
                  name="values"
                  defaultValue={baseClientes[id].values.substring(
                    baseClientes[id].values.indexOf(" "),
                    baseClientes[id].values.length
                  )}
                  formatter={value =>
                    `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={value => value.replace("R$ ", "").replace(",", "")}
                />
              </Form.Item>

              <hr />
              <br />
              <h3>Prioridade</h3>

              <Form.Item label="Prazo">
                <DatePicker
                  defaultValue={moment(baseClientes[id].deadline, "DD/MM/YYYY")}
                  id="deadline"
                  format="DD/MM/YYYY"
                />
              </Form.Item>

              <Form.Item label="Budget">
                <InputNumber
                  size="large"
                  name="budget"
                  className="input-valor"
                  defaultValue={baseClientes[id].budget.substring(
                    baseClientes[id].budget.indexOf(" "),
                    baseClientes[id].budget.length
                  )}
                  formatter={value =>
                    `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={value => value.replace("R$ ", "").replace(",", "")}
                />
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
                    onClick={() => this.setEditClientModalVisible(false)}
                  >
                    <u>Cancelar</u>
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>

        {/* fim modal editar cliente */}

        <Row type="flex" justify="space-between">
          <Col>
            <p className="card-name">{baseClientes[id].name}</p>
          </Col>
          <Col>
            <Popover placement="right" title={null} content="Urgência média">
              <Icon
                style={{ color: icon.color }}
                className="card-icon"
                type={icon.type}
                theme="filled"
              />
            </Popover>
          </Col>
        </Row>
        <p className="card-company">{baseClientes[id].company}</p>
        <hr />
        <p className="card-title">{baseClientes[id].title}</p>
        <p className="card-values">{baseClientes[id].values}</p>

        <Row type="flex" justify="space-between">
          <Col>
            <Popover
              placement="bottom"
              title={null}
              content={popoverContent}
              trigger="click"
            >
              <Button className="button-card-options">
                <u>Opções</u>
              </Button>
            </Popover>
          </Col>

          <Col>
            <Balloon id={id} />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Client;
