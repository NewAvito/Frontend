import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';

import { changeCategory } from '../actions/adsActions';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@connect(mapStateToProps, mapDispatchToProps)
export default class Categories extends Component {

  handleClick(e) {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span>Categories</span>}>
        {
          this.props.categories.map((category, index) => (
            <Menu.Item 
              onClick={() => this.props.changeCategory(category.category)}
              key={index}
            >
              {category.category}
            </Menu.Item>
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

function mapDispatchToProps(dispatch) {
  return {
    changeCategory: (category) => {
      dispatch(changeCategory(category))
    }
  }
}
