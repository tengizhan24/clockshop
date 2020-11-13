import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Badge, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { LinkContainer } from 'react-router-bootstrap'
import { products } from '../products'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      // </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));




const MainScreen = ({ }) => {
  const classes = useStyles();


  return (
   
      <React.Fragment>
        <main>
          {/* Hero unit */}
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {products.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  
                   <LinkContainer  to={`product/${card.id}`}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <CardMedia image={card.img} style={{ width: 230, height: 200, borderRadius: '10px' }} />
                      
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.Name}
                        </Typography>
                    

                      <Typography component="h3">
                        {card.Text}
                      </Typography>

                    </CardContent>
                    <CardActions>
                     <Typography>  Price ${card.Price}</Typography>
                    </CardActions>
                  </Card>
                  </LinkContainer>
                </Grid>
              ))}
             
            </Grid>
          </Container>
        </main>
      </React.Fragment>
  );
    
  
}

export default MainScreen
