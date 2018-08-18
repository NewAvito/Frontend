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
  render() {
    return (
      <div className='ads-list'>
      {
        this.props.ads.map((ad) => (
          <Ad {...ad} key={ad.id} />
        ))
      } 
      </div>
    )
  }
}

function mapStateToProps({ ads }) {
  return {
    ads: ads.list,
    page: 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAds: () => {
      dispatch(fetchAds());
    }
  }
}
