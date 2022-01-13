import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>About</span>}>
        <MenuItemGroup title="About Us"></MenuItemGroup>
        <MenuItemGroup title="Contact"></MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
