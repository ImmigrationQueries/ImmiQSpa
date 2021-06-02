import 'firebase/auth';
import firebase from 'firebase/app';
import config from './firebaseConfig';

const fb = firebase.initializeApp(config);

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
