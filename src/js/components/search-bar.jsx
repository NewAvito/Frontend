import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

import { changeQuery } from '../actions/searchActions.js';
import { fetchAds } from '../actions/adsActions.js';

const { Search } = Input;

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  render() {
    return (
        <Search
          placeholder="input search text"
          className='search-bar'
          value={this.props.query}
          onChange={e => this.props.changeQuery(e.target.value)}
          onSearch={value => this.props.search()}
          enterButton
        /> 
    )
  }
}

function mapStateToProps({ search }) {
  return {
    query: search.query
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeQuery: (value) => {
      console.log('query change');
      dispatch(changeQuery(value));
    },
    search: () => {
      dispatch(fetchAds());
    }
  }
}
