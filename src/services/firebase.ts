import firebase from 'firebase/app';
import 'firebase/auth';

interface Config {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

const config: Config = {
    apiKey: 'AIzaSyAdR84wXkgkCYY3U404ls8pT1YiuPin-A4',
    authDomain: 'immiq-d58c9.firebaseapp.com',
    projectId: 'immiq-d58c9',
    storageBucket: 'immiq-d58c9.appspot.com',
    messagingSenderId: '563957956214',
    appId: '1:563957956214:web:e8a0c49a0b1bb9c9e8a957',
    measurementId: 'G-Z50Q6RKS12',
};

const fb = firebase.initializeApp(config);

// if (window.location.hostname === 'localhost') {
//     fb.auth().useEmulator('http://localhost:9099');
// }

const fbAuth = fb.auth();
export { fbAuth, firebase };
