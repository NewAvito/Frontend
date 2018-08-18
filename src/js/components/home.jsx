import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Pagination } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import Categories from './categories.jsx';
import Ads from './ads.jsx';
import Navbar from './navbar.jsx';


export default class Home extends Component {

  constructor() {
    super();

    this.state = {
      current: 1,
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(page) {
    console.log(page);
    this.setState({
      current: page,
    });
  }

  render() {
    return (
      <Layout>
        <Header className='header'>
          <Navbar />
        </Header>
        <Layout>
          <Sider theme='light'>
           <Categories />
          </Sider>
          <Content>
            <Ads />
            <Pagination current={this.state.current} onChange={this.onChange} total={50} />;
          </Content>
        </Layout>
      </Layout> 
    )
  }
}
