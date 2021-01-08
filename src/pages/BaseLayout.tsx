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
                    <Button color="inherit" component={ReactLink} to={'/login'}>
                        Login
                    </Button>
                    <Button color="inherit" component={ReactLink} to={'/signup'}>
                        Create Account
                    </Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default BaseLayout;
