import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

interface ProtectedRouteProps extends RouteProps {
    component: React.FunctionComponent;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) => {
                return !!user ? (
                    <Component {...rest} {...props} />
                ) : (
                    <Redirect to="/login"></Redirect>
                );
            }}
        />
    );
};

export default ProtectedRoute;
