import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { products } from '../products'
import {useSelector, useDispatch} from 'react-redux'
import { cartReducer } from '../reducers/cartReducer';
import {removeFromCart} from '../actions/cartActions'

function CartScreen() {

    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    console.log(cart.cart)

    const handleRemove = (id) => {
       dispatch(removeFromCart(id))
    }
    return (
        <div>
            {cart.cart.map((cardc) => (
             
                    <CardContent>
                        <CardMedia image={cardc.img} style={{ width: 100, height: 100, borderRadius: '30px', marginLeft: '50px' }}>
                            <div style={{marginLeft:'200px'}}>
                            <Typography >
                                {cardc.Name}
                            </Typography>
                            <Typography>
                                {cardc.Text}
                            </Typography>   
                            </div>
                            
                        </CardMedia>
                        <Button onClick={() =>handleRemove(cardc.id)}>X</Button>
                    </CardContent>
               
            ))}
        </div>
    )
}

export default CartScreen
