import { AppBar, Button, Toolbar, Typography, makeStyles } from '@material-ui/core';

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
        <div>
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        ImmiQ
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">SignUp</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default BaseLayout;
