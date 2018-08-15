import React, { Component } from 'react';
import store from '../containers/store';

store.subscribe(() => {
	console.log('It is work!', store.getState())
})
store.dispatch({ type: 'ADD_INFO', payload: 'лол кек' })

export default class Item extends Component {

  render() {
    return (
      <div className='item'>
      	<span>Название объявления</span>
      	<input type='text' className='titleText' />
      	<span>Описание</span>
      	<input type='text' className='descText' />
      	<span>Ваше имя</span>
      	<input type='text' className='nameText' />
      	<span>Номер телефона</span>
      	<input type='text' className='numberText' />
      	<span>Регион, город</span>
      	<input type='text' className='cityText' />
      	<span>Метро(если есть)</span>
      	<input type='text' className='metroText' />
      	<span>Категория</span>
      	<input type='text' className='categoryText' />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
  	categories: state.categories.list
  }
}