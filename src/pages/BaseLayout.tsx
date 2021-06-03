import { AppBar, Button, CssBaseline, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Fragment } from 'react';
import { Link as Redirect, useHistory } from 'react-router-dom';
import { auth } from '../services/firebaseAuth';
import { useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
//TODO: Fix layout to not show login and signup when user logged in
//TODO: Add signout logic
//TODO: Add forgot password logic

const BaseLayout = () => {
    const classes = useStyles();
    const { user, logout } = useAuth();

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        ImmiQ
                    </Typography>
                    <Fragment>
                        <Button color="inherit" onClick={logout}>
                            Logout
                        </Button>
                    </Fragment>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default BaseLayout;
