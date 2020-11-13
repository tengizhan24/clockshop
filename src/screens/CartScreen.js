import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { products } from '../products'

function CartScreen() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
      </button>
            {products.map((cardc) => (
                <LinkContainer to={`product/${cardc.id}`}>
                    <CardContent>
                        <CardMedia image={cardc.img} style={{ width: 100, height: 100, borderRadius: '30px', marginLeft: '50px' }}>
                            <Typography >
                                {cardc.Name}
                            </Typography>
                            <Typography>
                                {cardc.Text}
                            </Typography>
                        </CardMedia>
                    </CardContent>
                </LinkContainer>
            ))}
        </div>
    )
}

export default CartScreen
