import firebase from '../containers/firebase';
import { push } from 'connected-react-router';


export function fetchAds(page) {
  return (dispatch, getState) => {
    let { category } = getState().ads;
    let ads = firebase.database().ref('ads').orderByChild('category').equalTo('test1');

    if (category === 'all') {
      ads.once('value', (snapshot) => {
        console.log(snapshot.val())
        snapshot.forEach((snapshot) => {
          console.log(snapshot.val());
        })
      });
    } else {

    }
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

export function changeCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    category
  }
}
