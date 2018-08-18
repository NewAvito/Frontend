import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

const { Search } = Input;

export default class Home extends Component {
  render() {
    return (
        <Search
          placeholder="input search text"
          className='search-bar'
          onSearch={value => console.log(value)}
          enterButton
        /> 
    )
  }
}
