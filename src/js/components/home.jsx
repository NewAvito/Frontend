import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Pagination } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import Categories from './categories.jsx';
import Ads from './ads.jsx';
import Navbar from './navbar.jsx';
import { changePage } from '../actions/adsActions.js';

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {

  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(page) {
    console.log(page);
    this.props.changePage(page);
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
            <Pagination current={this.props.page} onChange={this.onChange} total={this.props.pages} />;
          </Content>
        </Layout>
      </Layout> 
    )
  }
}

function mapStateToProps({ ads }) {
  return {
    page: ads.page,
    pages: ads.pages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: (page) => {
      dispatch(changePage(page));
    }
  }
}
