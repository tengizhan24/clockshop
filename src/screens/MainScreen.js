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
  images: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover,product': {
      zIndex: 5,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      }
    }}
}));



const MainScreen = () => {
  const classes = useStyles();
  return (   
      <React.Fragment>
        <main>
        {/* <Grid>
        <img src='https://static.s123-cdn-static.com/ready_uploads/media/196364/2000_5cee6d43ad72d.jpg' alt="Text"  style={{width:'100%', height:'700px',backgroundPosition:'left center'}}/>
        <LinkContainer to="/" style={{marginTop:'00px',marginLeft:'50%'}}>
        <Button to="/cart" variant="contained" color="primary">Закупиться сейчас</Button>
        </LinkContainer>
        </Grid> */}
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} style={{marginTop:"20px"}}>
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
                borderRadius='50px'>
                  <a href="https://www.instagram.com/accounts/login/?hl=ru"><InstagramIcon/></a>
                </Button>
                <Button
                borderRadius='50px'>
                  <a href="https://web.whatsapp.com/"><WhatsAppIcon/></a>
                </Button>
                <Button 
                borderRadius='50px'>
                  <a href="https://webhttps://web.telegram.org/#/im?p=u697715340_15334628497560654843.telegram.org"><TelegramIcon/></a>
                </Button>
            </div>
          </Container>
        </main>
        <LinkContainer to="/Addto">
              <Button className="Hello">Добавить товар</Button>
        </LinkContainer>      
      </React.Fragment>

  );
    
  
}



export default MainScreen
