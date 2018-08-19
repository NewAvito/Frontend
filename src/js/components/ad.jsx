import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { changeCurrent } from '../actions/adsActions.js';

const { Meta } = Card;

const Ad = (props) => (
  <Link to='/item'>
    <Card
      style={{ width: 300 }}
      onClick={() => {props.changeCurrent(props)}}
      className='ad'
      hoverable
      cover={<img alt="example" src={props.image ? props.image : null} />}
      actions={[<Icon type="heart" />]}
    >
      <Meta
        title={props.title}
        description={props.description}
      />
    </Card>
  </Link>
);

const mapDispatchToProps = dispatch => {
  return {
    changeCurrent: (props) => {
      console.log('changing current');
      dispatch(changeCurrent(props))
    }
  }
}

export default connect(null, mapDispatchToProps)(Ad);
