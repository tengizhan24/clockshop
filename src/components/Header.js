import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid, Typography, AppBar, Link } from '@material-ui/core'
import { LinkContainer } from 'react-router-bootstrap'

function Header () {
    const [count, setCount] = useState(0);
    return (
        <AppBar position="static">
            <Grid container spacing={1}>
                <Grid item md={6}>
                    
                        <LinkContainer to='/'>
                         <h3><Typography>Clock Shop  </Typography></h3>           
                        </LinkContainer>
                  
                </Grid>
                <Grid item md={6}>
                    <IconButton color="inherit">
                        <Badge badgeContent={useState(count + 1)} color="secondary">

                        <LinkContainer to='/cart'>
                            <ShoppingCartIcon style={{marginTop: 5}}/>
                            </LinkContainer>
                        </Badge>
                    </IconButton>                    
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Header
