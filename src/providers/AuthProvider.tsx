import React, { useEffect, useState, useContext } from 'react';
import { firebase, auth } from '../services/firebaseAuth';

type UserAuthContextProps = {
    user: firebase.User | null;
    authenticated: boolean;
    setUser: any;
    loadingAuthState: boolean;
    facebookLogin: any;
    googleLogin: any;
    logout: any;
};

const UserAuthContext = React.createContext<Partial<UserAuthContextProps>>({});

export const useAuth = () => {
    return useContext(UserAuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<firebase.User | null>(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    const googleLogin = async (): Promise<void> => {
        const provider = new firebase.auth.GoogleAuthProvider();

        await auth.signInWithPopup(provider).then(
            async (result) => {
                auth.onAuthStateChanged((user) => {
                    if (user) {
                        user.getIdToken()
                            .then((token) => {})
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

    const facebookLogin = async (): Promise<void> => {
        const provider = new firebase.auth.FacebookAuthProvider();

        await auth
            .signInWithPopup(provider)
            .then(async (result) => {
                const token = await auth?.currentUser?.getIdToken(true);
                const credential = result.credential as firebase.auth.OAuthCredential;
                if (token) {
                    localStorage.setItem('@token', token);
                    //TODO:  improve this
                    localStorage.setItem('@fbAccessToken', credential.accessToken!);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const logout = async () => {
        await auth.signOut();
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            setUser(user);
            setLoadingAuthState(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
        googleLogin,
        facebookLogin,
        logout,
    };

    return (
        <UserAuthContext.Provider value={value}>
            {!loadingAuthState && children}
        </UserAuthContext.Provider>
    );
};
