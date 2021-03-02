import { Fragment } from 'react';
import { makeStyles, Container } from '@material-ui/core';

import Copyright from '../components/Copyright';
import logo from '../images/ImmiQ.png';

const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
    },
    paper: {
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        display: 'flex',
        justifyContent: 'center',
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

interface AuthPaperProps {
    children: React.ReactNode;
}

const AuthPaper = (props: AuthPaperProps) => {
    const classes = useStyles();

    return (
        <Container sx={{ display: 'flex' }} className={classes.container} maxWidth="xs">
            <div className={classes.paper}>
                <img src={logo} />

                {props.children}
            </div>
            <Copyright />
        </Container>
    );
};

export default AuthPaper;
