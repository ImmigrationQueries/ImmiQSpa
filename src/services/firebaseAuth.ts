import 'firebase/auth';
import firebase from 'firebase/app';
import config from './firebaseconfig';

const fb = firebase.initializeApp(config);

const auth = fb.auth();

export { firebase, auth };
