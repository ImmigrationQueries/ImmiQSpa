import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './providers/UserProvider';
import './App.css';

import BaseLayout from './pages/BaseLayout';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';

//TODO: Add forgot password logic
//TODO: Add verification email logic
//TODO: Add husky pre-commit hook

const App = () => {
    return (
        <div className="App">
            <UserProvider>
                <BrowserRouter>
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
                </BrowserRouter>
            </UserProvider>
        </div>
    );
};

export default App;
