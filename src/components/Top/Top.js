import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "./Top.css";

const { Header, Content, Footer } = Layout;

const Top = props => {
  return (
    <Layout className="layout">
      <Header theme="light">
        <div className="logo" />
        <div>
          <div />
          <div />
          <div>
            <Icon type="search" theme="outlined" />
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default Top;
