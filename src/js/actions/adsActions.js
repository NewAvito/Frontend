import firebase from '../containers/firebase';


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

export function changeCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    category
  }
}
