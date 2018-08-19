import React, { Component } from 'react';
import store from '../containers/store';

import '../css/style.css';


store.subscribe(() => {
	console.log('It is work!', store.getState())
})
store.dispatch({ type: 'ADD_INFO', payload: 'лол кек' })

export default class CardPicture extends Component {

  render() {
  	const divStyle = {
	  width: 400
	};
    return (
      <div className='item'>
      	  <div className="textBlock">
	      	<span>Название объявления</span>
	      	<span className='titleText' />
	      	<span>Описание</span>
	      	<span className='descText' />
	      	<span>Ваше имя</span>
	      	<span className='nameText' />
	      	<span>Номер телефона</span>
	      	<span className='numberText' />
	      	<span>Регион, город</span>
	      	<span className='cityText' />
	      	<span>Метро(если есть)</span>
	      	<span className='metroText' />
	      	<span>Категория</span>
	      	<span className='categoryText' />
	      </div>
      </div>
    )
  }
}