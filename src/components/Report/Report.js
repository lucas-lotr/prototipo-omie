import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import "./Report.css";

class Report extends Component {
  render() {
    return (
      <div id="report">
        <Row type="flex">
          <Col span={18} offset={2}>
            <h1>Novo relatório</h1>
          </Col>
        </Row>

        <hr />
        <Row type="flex" justify="center" className="selectors">
          <Col>
            <select className="selector">
              <option>Cadastros</option>
            </select>
          </Col>
          <Col>
            <select className="selector">
              <option>Período</option>
            </select>
          </Col>
          <Col>
            <select className="selector">
              <option>Status</option>
            </select>
          </Col>
          <Col>
            <select className="selector">
              <option>Valor</option>
            </select>
          </Col>
          <Col>
            <select className="selector">
              <option>Orçamento</option>
            </select>
          </Col>
          <Col>
            <select className="selector">
              <option>Prazo</option>
            </select>
          </Col>
          <Col>
            <select className="selector">
              <option>Prioridade</option>
            </select>
          </Col>
        </Row>
        <br />
        <Button type="primary" className="button-export">
          Exportar
        </Button>
      </div>
    );
  }
}
export default Report;
