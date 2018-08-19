import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

import { fetchAds } from '../actions/adsActions';
import Ad from './ad.jsx';

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  componentDidMount() {
    this.props.fetchAds();
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.category);
    console.log(prevProps.category);
    if (this.props.category !== prevProps.category || this.props.page !== prevProps.page) {
      console.log('fetch');
      this.props.fetchAds();
    }
  }
  render() {
    return (
      <div className='ads-list'>
      {
        this.props.ads.map((ad) => (
          <Ad {...ad} key={Math.random()} />
        ))
      } 
      </div>
    )
  }
}

function mapStateToProps({ ads }) {
  return {
    ads: ads.list,
    page: ads.page,
    category: ads.category
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAds: () => {
      dispatch(fetchAds());
    }
  }
}
