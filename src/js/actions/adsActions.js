import firebase from '../containers/firebase';


export function fetchAds(page) {
  return (dispatch, getState) => {
    let { category } = getState().ads;
    console.log('category', category);
    let ads = firebase.database().ref('ads').orderByChild('category');
    
    if (category !== 'all') {
      ads = ads.equalTo(category);
    } 
    ads.once('value', (snapshot) => {
      console.log(snapshot.val())
      let adds = [];
      snapshot.forEach((snapshot) => {
        console.log(snapshot.val());
        adds.push(snapshot.val());
      });
      dispatch(fetchItemsSuccess(adds));
    })
  }
}

export function addItem(item) {
  return (dispatch, getState) => {
    let newAdd = firebase.database().ref('ads').push();
    newAdd.set(item);
    console.log('item set');
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
