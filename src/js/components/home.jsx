import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Pagination } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import Categories from './categories.jsx';
import Ads from './ads.jsx';
import SearchBar from './search-bar.jsx';
import Logo from './logo.jsx';


export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Header className='header'>
          <Logo />
          <SearchBar />
        </Header>
        <Layout>
          <Sider theme='light'>
           <Categories />
          </Sider>
          <Content>
            <Ads />
            <Pagination defaultCurrent={1} total={100} />
          </Content>
        </Layout>
      </Layout> 
    )
  }
}
