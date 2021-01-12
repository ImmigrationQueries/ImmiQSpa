import { Fragment } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { fbAuth, googleLogin, facebookLogin } from '../services/firebase';

import Copyright from '../components/Copyright';
import { LockOutlined, Facebook, Google } from '@material-ui/icons';
import {
    Avatar,
    makeStyles,
    Container,
    Divider,
    Button,
    TextField,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';

//TODO: Add password login logic

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container: {
        marginTop: theme.spacing(5),
    },
    paper: {
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        borderRadius: '5px',
        backgroundColor: 'white',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(2, 0),
    },
    icon: {
        alignItems: 'left',
    },
    space: {
        margin: theme.spacing(0.5),
    },
}));

const performAuthentication = () => {};

const Login = () => {
    const classes = useStyles();
    const history = useHistory();

    if (!(localStorage.getItem('@token') === null)) {
        history.push('/dashboard');
    }

    const passwordSignIn = async (email: string, password: string) => {
        fbAuth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                console.log(`Error Code: ${error.code} \n Error Message: ${error.message}`);
            });
    };

    return (
        <Fragment>
            <Container className={classes.container} maxWidth="xs">
                <div className={classes.toolbar} />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined color="primary" />
                    </Avatar>
                    <Typography component="h1" variant="subtitle1" color="primary" gutterBottom>
                        To gain access to your Dashboard
                    </Typography>
                    <Button
                        sx={{ margin: '20px 0px 10px 0px' }}
                        className={classes.button}
                        onClick={googleLogin}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        startIcon={<Google color="primary" />}
                        size="medium"
                    >
                        Log in with Google
                    </Button>
                    <Button
                        className={classes.button}
                        onClick={facebookLogin}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        startIcon={<Facebook color="primary" />}
                        size="medium"
                    >
                        Log in with Facebook
                    </Button>

                    <form className={classes.form} noValidate>
                        <Divider textAlign="center">
                            <Typography color="textSecondary">
                                Or Log in using your ImmiQ account
                            </Typography>{' '}
                        </Divider>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            sx={{ margin: '20px 0px 10px 0px' }}
                            classes={{ root: classes.button }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Log In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component={ReactLink} to={'/signup'} variant="body2">
                                    No account yet? Create here
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            <Copyright />
        </Fragment>
    );
};

export default Login;
