import firebase from '../containers/firebase';
import axios from 'axios';
import { push } from 'connected-react-router';


export function setPages(pages) {
  return {
    type: 'SET_PAGES',
    pages
  }
}

export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    page
  }
}

export function changeCurrent(item) {
  console.log('changing current 2');
  return {
    type: 'CHANGE_CURRENT',
    item
  } 
}

export function fetchAds(page) {
  return (dispatch, getState) => {
    let { category, page } = getState().ads;
    let { query } = getState().search;
    console.log('category', category);
    let ads = firebase.database().ref('ads').orderByChild('category');
    
    if (category !== 'all') {
      ads = ads.equalTo(category);
    } 

    ads.once('value', (snapshot) => {
      console.log(snapshot.val())
      let adds = [];
      snapshot.forEach((snapshot) => {
        let add = snapshot.val();
        if (query && !add.title.includes(query)) return;
        console.log(add);
        adds.push(add);
      });
      dispatch(setPages(adds.length));
      adds = adds.slice((page - 1) * 10, (page - 1) * 10 + 10);
      dispatch(fetchItemsSuccess(adds));
    })
  }
}

export function addItem(item) {
  return (dispatch, getState) => {
    let newAdd = firebase.database().ref('ads').push();
    newAdd.set(item);
    console.log('item set');
    dispatch(push('/'));
  }
}

export function fetchItemsSuccess(items) {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    items
  }
}

export function changeCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    category
  }
}
