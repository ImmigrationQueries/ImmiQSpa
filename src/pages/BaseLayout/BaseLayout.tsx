import { AppBar, Button, CssBaseline, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Fragment } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import TopBar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Home from '../Home/Home';

import './baselayout.css';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const BaseLayout = () => {
    const classes = useStyles();
    const { logout } = useAuth();

    return (
        <Fragment>
            <TopBar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </Fragment>
    );
};

export default BaseLayout;
