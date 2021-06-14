import React from 'react';
import './topbar.css';

import { useAuth } from '../../providers/AuthProvider';

import { ExitToApp } from '@material-ui/icons';

const Topbar = () => {
    const { user, logout } = useAuth();
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                        src={'http://localhost:3000/ImmiQ.png'}
                        alt="ImmiQ Logo"
                        className="logo"
                    />
                </div>

                <div className="topRight">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={!!user ? user.photoURL : undefined} className="topAvatar" />

                    <div className="topbarIconContainer" onClick={logout}>
                        <ExitToApp htmlColor="#cfcffc" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
