import { Button, Card, CardContent, CardMedia, Typography, Container, Grid  } from '@material-ui/core'

import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { products } from '../products'
import { useSelector, useDispatch } from 'react-redux'
import { cartReducer } from '../reducers/cartReducer';
import { removeFromCart } from '../actions/cartActions'

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
            <Grid  item xs={3} >
            <Typography center >
                        <th>Название</th>
                    </Typography>
            </Grid>
            <Grid xs={3}>
            <Typography >
                        <th>Цена</th>
                    </Typography>
            </Grid>
            <Grid  xs={3}>
            <Typography >
                        <th>Количество</th>
                    </Typography>
            </Grid>
            <Grid  xs={3}>
            <Typography >
                        <th>Отменить заказ</th>
                    </Typography>
            </Grid>
            </Grid>
             <CardContent >
                </CardContent>


            {cart.cart.map((cardc) => (
                <CardContent >
                <Grid container>
                    <Grid  xs={3}>
                    <Typography>
                        {cardc.Name}
                </Typography>
                    </Grid>
                    <Grid  xs={3}>
                    <Typography >
                       {cardc.Price}
                   </Typography>
                    </Grid>

                    <Grid  xs={3}> 
                    <Typography >
                       {cardc.id}
                   </Typography>
                   </Grid>
                   <Grid xs={3}>
                     <Button onClick={() => handleRemove(cardc.id)} style={{ background: 'red', marginTop: '-110px', marginLeft: '400px' }}>Удалить</Button>
                     </Grid>
                </Grid>
                 {/* <CardMedia image={cardc.img} style={{ width: 100, height: 100, borderRadius: '30px', marginLeft: '50px' }}></CardMedia> */}
                   

                </CardContent>

            ))}
            <LinkContainer to='/'>
        <Button onClick={{}}  style={{marginLeft:'1000px'}} >Оформить заказ</Button>
        </LinkContainer>
        </Container>
    )
}

export default CartScreen
