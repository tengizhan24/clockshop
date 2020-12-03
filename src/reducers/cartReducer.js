import {ADD_TO_CART_SUCCESS} from '../constants/cartConstants'

const initialProducts = JSON.parse(localStorage.getItem('productTest'))


export const cartReducer = (state = {cart: [...[], initialProducts]}, action) => {    
    // console.log(initialProducts)
    switch (action.type){
        case ADD_TO_CART_SUCCESS :            
            return {
                ...state,
                cart:  [...state.cart.filter((item) => item.id !== action.payload.id), action.payload]
            }
            
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)      
            }        
    }
    return state
}

