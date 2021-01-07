import React from 'react';
import { useHistory } from 'react-router-dom';
import { fbAuth, firebase } from '../services/firebase';

const Login = () => {
    const history = useHistory();

    const googleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        await fbAuth.signInWithPopup(provider).then(
            async (result) => {
                const token = await fbAuth?.currentUser?.getIdToken(true);
                if (token) {
                    localStorage.setItem('@token', token);
                    history.push('/dashboard');
                }
            },
            (error) => {
                console.log(error);
            },
        );
    };

    return (
        <div>
            <button onClick={googleLogin} className="login-button">
                Sign in with Google
            </button>
            <h1>Login</h1>
        </div>
    );
};

export default Login;
