import {ADD_TO_CART_FAIL, ADD_TO_CART_SUCCESS, ADD_TO_CART_REQUEST} from '../constants/cartConstants'

export const cartReducer = (state = {cart: []}, action) => {    
    switch (action.type) {
        case ADD_TO_CART_SUCCESS :
            return {
                ...state,
                cart:  [...state.cart, action.payload]
            }
            
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                cart: state.cart.splice(0, action.payload)              
            }        
    }
    return state
}

