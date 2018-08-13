import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

const { Search } = Input;

export default class Home extends Component {
  render() {
    return (
      <div className='search-bar-wrapper'>
        <Search
          placeholder="input search text"
          className='search-bar'
          onSearch={value => console.log(value)}
          enterButton
        /> 
      </div>
    )
  }
}
