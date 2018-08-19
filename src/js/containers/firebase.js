import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyDwUI9h2lZj9xrMFmXmNJYj4S7OEnCTcTA',
  authDomain: 'avitos-007.firebaseapp.com',
  databaseURL: 'https://avitos-007.firebaseio.com/',
  storageBucket: 'gs://avitos-007.appspot.com',
};

export default firebase.initializeApp(config);
