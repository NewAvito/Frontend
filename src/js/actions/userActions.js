'use strict'
import firebase from '../containers/firebase';

export function userLogged(user) {
  return {
    type: 'USER_LOGGED',
    user
  }
}

export function userNotLogged() {
  return {
    type: 'USER_NOT_LOGGED'
  }
}

export function userLoggedOut() {
  return {
    type: 'USER_LOGGED_OUT'
  }
}

export function checkLogged() {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        dispatch(userLogged({ email, uid}));
      } else {
        dispatch(userLoggedOut());
      }
    });  
  }
}

export function registerUser(user) {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((user) => {
      var user = firebase.auth().currentUser;
      let {uid, email} = user;
      
      firebase.database().ref('users/' + uid).set({
        email,
      });
      dispatch(userLogged({ uid, email }));
    })
    .catch((err) => {
      console.log(err); 
    })
  }
}

export function loginUser(user) {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((user) => {
      var user = firebase.auth().currentUser;
      let { uid, email } = user;
      console.log(user);
      dispatch(userLogged({ uid, email }))
    })
    .catch(function(error) {
      console.log(error);
    });
  }
}

export function logoutUser() {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(function() {
      dispatch(userLoggedOut());
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
