import { AppBar, Button, CssBaseline, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Fragment } from 'react';
import { Link as ReactLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const clearLocalStorage = () => {
    localStorage.clear();
};

const MenuButtons = () => {
    if (localStorage.getItem('@token') === null) {
        return (
            <Fragment>
                <Button color="inherit" component={ReactLink} to={'/login'}>
                    Login
                </Button>
                <Button color="inherit" component={ReactLink} to={'/signup'}>
                    Create Account
                </Button>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <Button
                    color="inherit"
                    component={ReactLink}
                    to={'/login'}
                    onClick={clearLocalStorage}
                >
                    Logout
                </Button>
            </Fragment>
        );
    }
};

//TODO: Fix layout to not show login and signup when user logged in
//TODO: Add signout logic
//Add forgot password logic

const BaseLayout = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        ImmiQ
                    </Typography>
                    <MenuButtons />
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default BaseLayout;
