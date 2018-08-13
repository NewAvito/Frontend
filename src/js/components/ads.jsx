import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

import Ad from './ad.jsx';

@connect(mapStateToProps)
export default class Home extends Component {
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
    ads: ads.list
  }
}
