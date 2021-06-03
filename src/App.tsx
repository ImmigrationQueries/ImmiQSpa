import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import Login from './pages/Login';
import BaseLayout from './pages/BaseLayout';
import ProtectedRoute from './components/ProtectedRoute';

//TODO: Add husky pre-commit hook

const App = () => {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Switch>
                        <ProtectedRoute exact path="/" component={BaseLayout} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </AuthProvider>
            </Router>
        </div>
    );
};

export default App;
