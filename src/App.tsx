import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import BaseLayout from './pages/BaseLayout';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import { Fade } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

//TODO: Add logic to redirect oto dashboard if user already authenticated
//TODO: Add forgot password logic
//TODO: Add verification email logic
//TODO: Add typesafety
//TODO: Add husky pre-commit hook

const App = () => {
    const history = useHistory();
    if (!(localStorage.getItem('@token') === null)) {
        history.push('/dashboard');
    }
    return (
        <div className="App">
            <BrowserRouter>
                <BaseLayout />
                <Fade>
                    <Switch>
                        <Route path={'/login'}>
                            <Login />
                        </Route>
                        <Route path={'/signup'}>
                            <Signup />
                        </Route>
                        <Route path={'/dashboard'}>
                            <Dashboard />
                        </Route>
                        <Route path={'/'}>
                            <Login />
                        </Route>
                    </Switch>
                </Fade>
            </BrowserRouter>
        </div>
    );
};

export default App;
