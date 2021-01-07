import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { fbAuth } from './services/firebase';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebaseui/dist/firebaseui.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
    // const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(fbAuth);
    // ui.start('#firebaseui-auth-container', {
    //     callbacks: {
    //         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
    //             console.log('SUP' + authResult);
    //             console.log(redirectUrl);
    //             return true;
    //         },
    //     },
    //     signInFlow: 'popup',
    //     signInSuccessUrl: 'www.google.com',
    //     signInOptions: [
    //         {
    //             provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //             customParameters: {
    //                 prompt: 'select_account',
    //             },
    //         },
    //         {
    //             provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //             customParameters: {
    //                 auth_type: 'reauthenticate',
    //             },
    //         },
    //     ],
    // });

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path={'/login'}>
                        <Login />
                    </Route>
                    <Route path={'/dashboard'}>
                        <Dashboard />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
