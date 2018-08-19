import React, { Component } from 'react';
import store from '../containers/store';

store.subscribe(() => {
	console.log('It is work!', store.getState())
})
store.dispatch({ type: 'ADD_INFO', payload: 'лол кек' })

export default class CardPicture extends Component {

  render() {
  	const imgStyle = {
  		width: 400,
  		height: 600,
  		padding: 20
  	}
    return (
      <div className='itemItem'>
      	  <img style={imgStyle} src="https://cs2.livemaster.ru/storage/08/9d/baa33f0df5a5014336aa7ec074x1--sumki-i-aksessuary-klatch-kniga-master-i-margarita.jpg" />
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