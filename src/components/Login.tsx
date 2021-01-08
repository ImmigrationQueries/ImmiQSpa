import { useHistory } from 'react-router-dom';
import { fbAuth, firebase } from '../services/firebase';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import {
    Avatar,
    Box,
    makeStyles,
    Container,
    Divider,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        ...theme.typography.body2,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    paper: {
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
        margin: theme.spacing(2),
    },
    icon: {
        alignItems: 'left',
    },
    space: {
        margin: theme.spacing(0.5),
    },
}));

const Login = () => {
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
        <Fragment>
            <Container className={classes.root} component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon color="primary" />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="primary" gutterBottom>
                        Sign In
                    </Typography>
                    <Button
                        className={classes.button}
                        color="inherit"
                        onClick={googleLogin}
                        type="submit"
                        fullWidth
                        variant="contained"
                        startIcon={<GoogleIcon color="primary" />}
                        size="medium"
                    >
                        Sign in with Google
                    </Button>
                    <Divider className={classes.space} />
                    <Button
                        className={classes.button}
                        color="inherit"
                        onClick={facebookLogin}
                        type="submit"
                        fullWidth
                        variant="contained"
                        startIcon={<FacebookIcon color="primary" />}
                        size="medium"
                    >
                        Sign in with Facebook
                    </Button>

                    <form className={classes.form} noValidate>
                        <Divider textAlign="center">
                            <Typography color="textSecondary">
                                Or Sign in using your ImmiQ account
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
                        <Box></Box>
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
                            classes={{ root: classes.button }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Fragment>
    );
};

export default Login;
