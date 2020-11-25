import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { products } from '../products'
import { Grid, Typography, AppBar, CardMedia, Card, CardActions, CardContent, Container, Button, InputLabel, Select, MenuItem } from '@material-ui/core'
import { LinkContainer } from 'react-router-bootstrap'
import {addToCart}  from '../actions/cartActions'
const ProductScreen = ({ history, location }) => {
    const loc = location.pathname.split('/product/')[1];
    const product = products.find((item) => item.id == loc)
    const [count, setCount] = useState(0);

    const dispatch = useDispatch()

    const handleToCartSubmit = () => {
        dispatch(addToCart(product, count))
    }   
   
   const onChangeCount = (e) => {
       console.log(e.target.value)
        setCount(e.target.value)
    }
    return (
        <Container mt={12}>
            <Grid container>
                <Grid item key={product} xs={3} sm={3} md={8} container>
                    <Card>
                        <CardContent>
                            <CardMedia image={product.img} style={{ width: 230, height: 200, borderRadius: '10px' }} />
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.Name}
                            </Typography>
                            <Typography component="h3">
                                {product.Text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography>  Price ${product.Price}</Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={3} spacing={5}>
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
        </Container>


    )
}

export default ProductScreen 
