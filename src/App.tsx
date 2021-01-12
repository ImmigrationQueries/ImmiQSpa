import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import BaseLayout from './pages/BaseLayout';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import { Fade } from '@material-ui/core';

//TODO: Add logic to redirect to dashboard if user already authenticated
//TODO: Add forgot password logic
//TODO: Add verification email logic
//TODO: Add typesafety
//TODO: Add husky pre-commit hook

const App = () => {
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
