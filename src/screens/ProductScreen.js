import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { products } from '../products'
import { Grid, Typography, AppBar, CardMedia, Card, CardActions, CardContent, Container, Button, InputLabel, Select, MenuItem, Paper } from '@material-ui/core'
import { LinkContainer } from 'react-router-bootstrap'
import {addToCart}  from '../actions/cartActions'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const ProductScreen = ({ history, location }) => {
    const loc = location.pathname.split('/product/')[1];
    const product = products.find((item) => item.id == loc)
 const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
      },
      img: {
        marginTop:'-130px',
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
      },
    })
    
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = product.images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
 
    
    const [count, setCount] = useState(0);
    
    const dispatch = useDispatch()
    
    const handleToCartSubmit = () => {
        dispatch(addToCart(product, count))
    }   
    
    const onChangeCount = (e) => {
        console.log(e.target.value)
        setCount(e.target.value)
    }
    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    return (
        
        <Container mt={12}>
            <Grid container>
                
                {/* <Grid item key={product} xs={3} sm={3} md={8} container> */}
                        {/* <CardMedia image={Array.isArray(product.images) ? product.images[0].img : null} style={{ width: 430, height: 400,marginTop:'50px', borderRadius: '10px' }} /> */}
                        <CardContent>
                        <Grid>
                            <Typography gutterBottom variant="h5" component="h4" >
                                {product.Name}
                            </Typography>
                            <Typography component="h3">
                                {product.Text}
                            </Typography>
                        <CardActions>
                            <Typography>  Price ${product.Price}</Typography>
                        </CardActions>
                        </Grid>
                        </CardContent>
                {/* </Grid> */}
                <Grid item md={3} spacing={5} style={{marginLeft:'50px',marginTop:'130px'    }}>
                    <Card>
                        <CardContent>
                            <InputLabel id="label">Количество</InputLabel>
                            <Select labelId="label" id="select" value={count}  onChange={(e) => onChangeCount(e)}> 
                                {
                                    Array.from(Array(11).keys()).map((item) => (
                                        <MenuItem value={item}>{item}</MenuItem>
                                        ))
                                    }
                            </Select>
                        </CardContent>                       
                        <Button onClick={handleToCartSubmit} disabled={count === 0 ? true : false} >
                            В корзину
                            </Button>
                    </Card>
                </Grid>
            </Grid>
            <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
     
      </Paper>
     
      <img
        className={classes.img}
        src={product.images[activeStep] ? product.images[activeStep].img : '' }
        alt={product.images[activeStep] ? product.images[activeStep].title: ''}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
        </Container>


    )
}

export default ProductScreen 
