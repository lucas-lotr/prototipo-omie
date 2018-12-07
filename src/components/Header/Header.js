import React, { Component } from "react";
import { Button, Row, Col, Affix } from "antd";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <Affix offsetTop={0}>
        <div id="header">
          <Row type="flex" justify="space-between">
            <Col>
              <p>Logo</p>
            </Col>
            <Col>
              <Button
                className="button-nav"
                onClick={() => this.props.switchPage("business")}
              >
                Negócios
              </Button>

              <Button
                className="button-nav"
                onClick={() => this.props.switchPage("report")}
              >
                Relatórios
              </Button>
              <Button className="button-search" icon="search" />
            </Col>
          </Row>
        </div>
      </Affix>
    );
  }
}
export default Header;
