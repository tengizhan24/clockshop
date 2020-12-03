import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { products } from '../products'
import { Grid, Typography, Card, CardActions, CardContent, Container, Button, InputLabel, Select, MenuItem } from '@material-ui/core'
import {addToCart}  from '../actions/cartActions'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const ProductScreen = ({ location }) => {
    const loc = location.pathname.split('/product/')[1];
    const product = products.find((item) => item.id == loc)
 const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
      },
      img: {
        marginTop:'10px',
        height: 250,
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
    
    const onChangeCoun = (e) => {
        // console.log(e.target.value)
        setCount(e.target.value)
    }

    return (
        
        <Container mt={12}>
                            <div className={classes.root}>
                        <CardContent>
                        <Grid>
                            <Typography gutterBottom variant="h5" component="h4" >
                                {product.Name}
                            </Typography>
                        <CardActions>
                            <Typography>  Price ${product.Price}</Typography>
                        </CardActions>
                        </Grid>
                        </CardContent>
                      <Typography component="h3">
                                                {product.Text}
                      </Typography>
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

            <Grid container>
                    <Card item md={5} spacing={5} style={{marginLeft:'20px',marginTop:'10px'}}>
                        <CardContent>
                            <InputLabel id="label">Количество</InputLabel>
                            <Select labelId="label" id="select" value={count}  onChange={(e) => onChangeCoun(e)}> 
                                {
                                    Array.from(Array(11).keys()).map((item, index) => (
                                        <MenuItem value={item} key={index}>{item}</MenuItem>
                                        ))
                                    }
                            </Select>
                        </CardContent>                       
                        <Button onClick={handleToCartSubmit} disabled={count === 0 ? true : false} >
                            В корзину
                            </Button>
                    </Card>
            </Grid>

    </div>
        </Container>


    )
}

export default ProductScreen 
