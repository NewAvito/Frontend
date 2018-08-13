import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@connect(mapStateToProps)
export default class Categories extends Component {

  handleClick(e) {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span>Categories</span>}>
        {
          this.props.categories.map((category, index) => (
            <Menu.Item key={index}>{category.name}</Menu.Item>
          ))
        }
        </SubMenu>
      </Menu>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories.list
  }
}
