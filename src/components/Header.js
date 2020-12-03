import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid, Typography, AppBar, } from '@material-ui/core'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
    const cart = useSelector(state => state.cartReducer)

    return (
        <AppBar position="static">
            <Grid container spacing={1}>
                <Grid item md={5}>

                    <LinkContainer to='/' style={{ display: 'flex', justifyContent: 'center' }} >
                        <h2><Typography>Clock Shop  </Typography></h2>
                    </LinkContainer>

                </Grid>


                <Grid item md={7} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton color="inherit">
                        <Badge badgeContent={cart.cart.length} color="secondary">

                            <LinkContainer to='/cart' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <ShoppingCartIcon style={{ marginTop: 5 }} />
                            </LinkContainer>
                        </Badge>
                    </IconButton>

                    <IconButton color="inherit">
                        <LinkContainer to="/checkin" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <AccountCircleIcon />
                        </LinkContainer>
                    </IconButton>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Header
