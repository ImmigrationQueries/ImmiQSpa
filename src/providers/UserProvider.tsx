import React, { useEffect, useState } from 'react';
import { firebase, fbAuth } from './../services/firebaseAuth';

type UserAuthContextProps = {
    user: firebase.User | null;
    authenticated: boolean;
    setUser: any;
    loadingAuthState: boolean;
};

export const UserAuthContext = React.createContext<Partial<UserAuthContextProps>>({});

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    useEffect(() => {
        fbAuth.onAuthStateChanged((user: any) => {
            setUser(user);
            setLoadingAuthState(false);
        });
    }, []);

    return (
        <UserAuthContext.Provider
            value={{
                user,
                authenticated: user !== null,
                setUser,
                loadingAuthState,
            }}
        >
            {children}
        </UserAuthContext.Provider>
    );
};
