import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LinkContainer } from 'react-router-bootstrap'
import { products } from '../products'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';



const useStyles = makeStyles((theme) => ({
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    margin: '200px 0'
  },
  
}));



const MainScreen = ({ }) => {
  const classes = useStyles();
  return (
   
      <React.Fragment>
        <main>
        <Grid>
          
        <img src='https://static.s123-cdn-static.com/ready_uploads/media/196364/2000_5cee6d43ad72d.jpg' alt="Text"  style={{width:'100%', height:'700px',backgroundPosition:'left center'}}/>
        <Button to="/cart" variant="contained" color="primary" style={{marginTop:'-500px',marginLeft:'50%'}} >Закупиться сейчас</Button>
        </Grid>

          {/* Hero unit */}
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {products.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  
                   <LinkContainer  to={`product/${card.id}`}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <CardMedia  className={classes}image={Array.isArray(card.images) ? card.images[0].img : null} style={{ width: 230 , height: 200, borderRadius: '10px' }} />
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
          
            <div className={classes.footer}>
            <Button 
                variant="contained"
                color="primary"
                borderRadius='50px'>
                <InstagramIcon/>
                </Button>
                <Button 
                variant="contained"
                color="primary"
                borderRadius='50px'>
                <WhatsAppIcon/>
                </Button>
                <Button 
                variant="contained"
                color="primary"
                borderRadius='50px'>
                <TelegramIcon/>
                </Button>
            </div>
           
          </Container>
        </main>
   
      </React.Fragment>

  );
    
  
}



export default MainScreen
