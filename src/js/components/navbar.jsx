import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import { logoutUser } from '../actions/userActions';
import SearchBar from './search-bar.jsx';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@connect(mapStateToProps, mapDispatchToProps)
export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      current: 'logo'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ key }) {
    if (key === 'logout') {
      this.props.logout();
    }
    this.setState({ current: key });
  }

  render() {
    let { logged } = this.props;
    return (
      <div className='navbar-wrapper'>
        <Menu className='navbar' onClick={this.handleClick} mode='horizontal' selectedKeys={[this.state.current]}>
          <Menu.Item key='logo' className='logo'>
            <Link to='/'>Ovito</Link>
          </Menu.Item>
          <SearchBar />
          {logged && 
          <Menu.Item key='logout'>
            <Icon type='logout'/>Logout
          </Menu.Item>}
          {logged && 
          <Menu.Item key='add'>
            <Link to='/add'><Icon type='plus'/>Add listing</Link>
          </Menu.Item>}
          {!logged && 
          <Menu.Item key='register'>
            <Link className='primary' to='/register'>Sign up</Link>
          </Menu.Item>}
          {!logged && 
          <Menu.Item key='login'>
            <Link to='/login'><Icon type='login' />Login</Link>
          </Menu.Item>}
        </Menu>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    logged: !!user.uid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logoutUser());
    }
  }
}
