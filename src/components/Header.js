import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid, Typography, AppBar, Link } from '@material-ui/core'
import { LinkContainer } from 'react-router-bootstrap'
import {useSelector} from 'react-redux'

function Header () {
     const cart = useSelector(state => state.cartReducer)

    const [count, setCount] = useState(1);
    return (
        <AppBar position="static">
            <Grid container spacing={1}>
                <Grid item md={5}>
                    
                        <LinkContainer to='/'  style={{marginLeft:'90px'}} >
                         <h3><Typography>Clock Shop  </Typography></h3>           
                        </LinkContainer>
                  
                </Grid>
                <Grid item md={6}>
                    <IconButton color="inherit">
                        <Badge badgeContent={cart.cart.length} color="secondary">

                        <LinkContainer to='/cart'>
                            <ShoppingCartIcon style={{marginTop:5}}/>
                            </LinkContainer>
                        </Badge>
                    </IconButton>                    
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Header
