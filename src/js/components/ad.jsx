import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const Ad = (props) => (
  <Link to={`/item/${props.id}`}>
    <Card
      style={{ width: 300 }}
      className='ad'
      hoverable
      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      actions={[<Icon type="heart" />]}
    >
      <Meta
        title={props.title}
        description={props.description}
      />
    </Card>
  </Link>
);

export default Ad;
