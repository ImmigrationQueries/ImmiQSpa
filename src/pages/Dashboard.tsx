import React, { useContext } from 'react';
import { Link as ReactLink, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { UserAuthContext } from '../providers/UserProvider';
import { firebase, fbAuth } from '../services/firebaseAuth';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        margin: theme.spacing(7),
    },
    container: {
        marginTop: theme.spacing(5),
    },
}));
const getPhotoUrl = (user: firebase.User): string => {
    if (user.providerData[0]?.providerId === 'facebook.com') {
        return `${user.photoURL}?access_token=${localStorage.getItem('@fbAccessToken')}`;
    } else {
        return `${user.photoURL!}`;
    }
};

const Dashboard = () => {
    const classes = useStyles();
    const { user } = useContext(UserAuthContext);

    return user ? (
        <Container className={classes.container} maxWidth="sm">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={getPhotoUrl(user)}
                        title={user?.displayName!}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h1">
                            Welcome
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {user?.displayName!}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {user.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    ) : (
        <Redirect to={{ pathname: '/login' }} />
    );
};

export default Dashboard;
