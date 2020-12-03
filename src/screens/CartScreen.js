import { Button, CardContent, CardMedia, Typography, Container, Grid, Select, MenuItem } from '@material-ui/core'

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'
import EcoIcon from '@material-ui/icons/Eco';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { products } from '../products';

function CartScreen() {
    
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch(0)
    
    console.log(cart.cart)
    
    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }
    
    
    const onChangeCount = (e, product) => {   
        console.log(product)
        dispatch(addToCart(product, e.target.value))
        localStorage.setItem('productTest', JSON.stringify(product));
    }

    return (
        <Container>
            <Grid container >
                <Grid item xs={3} >
                    <Typography center >
                        <th>Название</th>
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography center>
                        <th>Цена</th>
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography >
                        <th>Количество</th>
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography >
                        <th>Итого:</th>
                    </Typography>
                </Grid>
            </Grid>

            {cart.cart.map((product) => (
                <CardContent >
                    <Grid container>
                        <Grid xs={3}>
                            <Typography >
                                {product.Name}
                            </Typography>
                            <CardMedia image={Array.isArray(product.images) ? product.images[0].img : null} style={{ width: 80, height: 80, borderRadius: '50px', marginLeft: '-100px', marginTop: '-50px' }} />
                        </Grid>
                        <Grid xs={3}>
                            <Typography >
                                {product.Price}
                            </Typography>
                        </Grid>

                        <Grid xs={3}>
                            <Typography >
                            <Select labelId="label" id="select" value={product.quantity} onChange={(e) => onChangeCount(e, product)}> 
                                {
                                    Array.from(Array(11).keys()).map((item) => (
                                        <MenuItem value={item}>{item}</MenuItem>
                                        ))
                                    }
                            </Select>
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Typography >
                                {product.Price*product.quantity}
                            <Button
                                style={{marginLeft:'50px'}}
                                onClick={() => handleRemove(product.id)}
                                variant="contained"
                                color="primary"
                                endIcon={<DeleteForeverIcon />}
                                >
                                Удалить
                            </Button>
                            </Typography>
                            
                        </Grid>
                        </Grid>
                </CardContent>
            ))}
                    <LinkContainer to='/order' >
                        <Button
                            style={{display:'flex', justifyContent:'flex-end'}}
                            variant="contained"
                            color="primary"
                            endIcon={<EcoIcon />}
                        >
                            Оформить заказ
                        </Button>
                    </LinkContainer>
        </Container>
    )
}

export default CartScreen
