import { useHistory } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { Paper } from '@material-ui/core';
import { Facebook, Google } from '@material-ui/icons';
import { makeStyles, Divider, Button, Grid, Link, Typography } from '@material-ui/core';

const Copyright = () => {
    return (
        <Link color="textSecondary" href="https://immiq.com/">
            Copyright © ImmiQ {new Date().getFullYear()}
        </Link>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    logo: { margin: theme.spacing(3, 3), justifyContent: 'center' },
    image: {
        backgroundImage: 'url(Login.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.info.light
            ? theme.palette.grey[50]
            : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(4, 8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
    },
}));

const Login = () => {
    const classes = useStyles();
    const { googleLogin, facebookLogin } = useAuth();
    const history = useHistory();

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            history.push('/');
        } catch {
            console.log('Failed to login');
        }
    };

    const handleFacebookLogin = async () => {
        try {
            await facebookLogin();
            history.push('/');
        } catch {
            console.log('Failed to login');
        }
    };
    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid container item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Grid container className={classes.logo}>
                        <img src={`${process.env.PUBLIC_URL}/ImmiQ.png`} alt="ImmiQ Logo" />

                        <Grid item>
                            <Typography
                                color="primary"
                                component="h1"
                                variant="h5"
                                align="center"
                                style={{ margin: 5 }}
                            >
                                Welcome to <b>ImmiQ</b>
                            </Typography>
                            <Typography color="textSecondary" align="center" style={{ margin: 10 }}>
                                Getting you one step closer to making an informed decision about
                                your Australian Permanent Residence
                            </Typography>
                        </Grid>
                        <Grid container item className={classes.button}>
                            <Grid item style={{ marginBottom: 5 }}>
                                <Button
                                    color="primary"
                                    onClick={handleGoogleLogin}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<Google color="secondary" />}
                                    size="medium"
                                >
                                    Log in with Google
                                </Button>
                            </Grid>
                            <Grid item>
                                <Divider textAlign="center">
                                    <Typography color="textSecondary">Or</Typography>
                                </Divider>
                            </Grid>
                            <Grid item style={{ marginTop: 5, marginBottom: 5 }}>
                                <Button
                                    className={classes.button}
                                    onClick={handleFacebookLogin}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<Facebook color="secondary" />}
                                    size="medium"
                                >
                                    Log in with Facebook
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" spacing={4}>
                        <Grid item>
                            <Copyright />
                        </Grid>
                        <Grid item>
                            <Link color="textSecondary" href="https://immiq.com/">
                                Back to ImmiQ Website
                            </Link>{' '}
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
};

export default Login;
