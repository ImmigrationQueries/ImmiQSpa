import 'firebase/auth';
import firebase from 'firebase/app';

const fb = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const fbAuth = fb.auth();

const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    await fbAuth.signInWithRedirect(provider).then(
        async (result) => {
            fbAuth.onAuthStateChanged((user) => {
                if (user) {
                    user.getIdToken()
                        .then((token) => {
                            localStorage.setItem('@token', token);
                        })
                        .catch((error) => {
                            console.log(
                                `Error Code: ${error.code} \n Error Message: ${error.message}`,
                            );
                        });
                }
            });
        },
        (error) => {
            console.log(error);
        },
    );
};

const facebookLogin = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    await fbAuth.signInWithPopup(provider).then(
        async (result) => {
            const token = await fbAuth?.currentUser?.getIdToken(true);
            const credential = result.credential as firebase.auth.OAuthCredential;
            if (token) {
                localStorage.setItem('@token', token);
                //TODO:  improve this
                localStorage.setItem('@fbAccessToken', credential.accessToken!);
            }
        },
        (error) => {
            console.log(error);
        },
    );
};

export { firebase, fbAuth, googleLogin, facebookLogin };
