import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { fbAuth, firebase } from '../services/firebase';
import {
    Avatar,
    Button,
    Container,
    Divider,
    Grid,
    Link,
    TextField,
    Typography,
} from '@material-ui/core';
import { LockOutlined, Facebook, Google } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container: {
        marginTop: theme.spacing(5),
    },
    paper: {
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        marginTop: theme.spacing(8),
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        borderRadius: '5px',
        backgroundColor: 'white',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 3),
    },
}));

const Signup = () => {
    const classes = useStyles();
    const history = useHistory();

    const googleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        await fbAuth.signInWithPopup(provider).then(
            async (result) => {
                const token = await fbAuth?.currentUser?.getIdToken(true);
                if (token) {
                    localStorage.setItem('@token', token);
                    history.push('/dashboard');
                }
            },
            (error) => {
                console.log(error);
            },
        );
    };

    const facebookLogin = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        await fbAuth.signInWithPopup(provider).then(
            async (result) => {
                const token = await fbAuth?.currentUser?.getIdToken(true);
                if (token) {
                    localStorage.setItem('@token', token);
                    history.push('/dashboard');
                }
            },
            (error) => {
                console.log(error);
            },
        );
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.toolbar} />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined color="primary" />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create Account
                </Typography>
                <Button
                    onClick={facebookLogin}
                    sx={{ margin: '20px 0px 10px 0px' }}
                    type="submit"
                    fullWidth
                    variant="outlined"
                    startIcon={<Google color="primary" />}
                    size="medium"
                >
                    Sign in with Google
                </Button>
                <Button
                    onClick={googleLogin}
                    type="submit"
                    fullWidth
                    variant="outlined"
                    startIcon={<Facebook color="primary" />}
                    size="medium"
                >
                    Sign in with Facebook
                </Button>
                <form className={classes.form} noValidate>
                    <Divider className={classes.submit} textAlign="center">
                        <Typography color="textSecondary">
                            Or Sign up to create your ImmiQ account
                        </Typography>{' '}
                    </Divider>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        sx={{ margin: '20px 0px 10px 0px' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create Account
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link component={ReactLink} to={'/login'} variant="body2">
                                Already have an account? Log in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Copyright />
        </Container>
    );
};

export default Signup;
