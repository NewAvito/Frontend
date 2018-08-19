import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../containers/store';

@connect(mapStateToProps)
export default class CardPicture extends Component {

  render() {
  	const imgStyle = {
  		width: 400,
  		height: 600,
  		padding: 20
  	}
    let { current } = this.props;
    console.log(current);
    return (
      <div className='itemItem'>
      	<img style={imgStyle} src={current.image} />
      	<div className="textBlock">
	      	<span>{current.title}</span>
	      	<span>{current.description}</span>
	      	<span>{current.name}</span>
	      	<span>{current.phone}</span>
	      	<span>{current.city}</span>
	      	<span>{current.subway}</span>
	      	<span>{current.category}</span>
	      </div>
      </div>
    )
  }
}

function mapStateToProps({ ads }) {
  return {
    current: ads.current
  }
}
