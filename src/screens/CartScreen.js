import { Button, Card, CardContent, CardMedia, Typography, Container, Grid } from '@material-ui/core'

import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import EcoIcon from '@material-ui/icons/Eco';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { products } from '../products'
import { cartReducer } from '../reducers/cartReducer';
import SendIcon from '@material-ui/icons/Send';

function CartScreen() {

    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch(0)

    console.log(cart.cart)

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    
    return (
        <Container   >
            <Grid container >
                <Grid item xs={3} >
                    <Typography center >
                        <th>Название</th>
                    </Typography>
                </Grid>
                <Grid xs={3}>
                    <Typography >
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
            <CardContent >
            </CardContent>
            {cart.cart.map((cardc) => (
                
                <CardContent >
                    <Grid container>
                        <Grid xs={3}>
                            <Typography >
                                {cardc.Name}
                            </Typography>
                            <CardMedia image={cardc.img} style={{ width: 80, height: 80, borderRadius: '50px', marginLeft: '-180px', marginTop: '-50px' }} />
                        </Grid>
                        <Grid xs={3}>
                            <Typography >
                                {cardc.Price}
                            </Typography>
                        </Grid>

                        <Grid xs={3}>
                            <Typography >
                                {cardc.quantity}
                            </Typography>
                        </Grid>
                        <Grid xs={3}>
                            <Typography >
                                {cardc.Price*cardc.quantity}
                            </Typography>
                        </Grid>
                    </Grid>
                        <Grid container xs={9} justify="flex-end"  >
                            <Button
                                onClick={() => handleRemove(cardc.id)}
                                variant="contained"
                                color="primary"
                                endIcon={<DeleteForeverIcon />}
                            >
                                Удалить
                            </Button>
                        </Grid> 
                </CardContent>
            ))}
                <div style={{ marginLeft: '915px', marginTop: '-20px' }}>
                    <LinkContainer to='/order' >
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<EcoIcon />}
                        >
                            Оформить заказ
                        </Button>
                    </LinkContainer>
                </div>
        </Container>
    )
}

export default CartScreen
