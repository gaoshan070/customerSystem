import { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import Link from "umi/link";
const { Header, Footer, Sider, Content } = Layout;
// submenu component
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh", color: "white" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px"
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Main</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/customers">Customers</Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/dashboard/analysis">Analysis</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dashboard/monitor">Monitor</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/dashboard/workplace">Workplace</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design @2019 Created by Shan Gao
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
