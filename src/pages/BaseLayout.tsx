import { AppBar, Button, CssBaseline, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Fragment } from 'react';

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
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">SignUp</Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default BaseLayout;
