import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>DashBord</span>}>
      <MenuItemGroup title="ARIMA">
        <Menu.Item key="setting:1">
          <a href="/chart">Metric analysis</a>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <a href="/chart">Metric Chart</a>
        </Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Anomaly Detection">
      <Menu.Item key="setting:3">
          <a href="/anomalydetection">Multi Anomaly Detection</a>
        </Menu.Item>
        <Menu.Item key="setting:4">
          <a href="/anomalydetection">LSTM Graph</a>
        </Menu.Item>

      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu