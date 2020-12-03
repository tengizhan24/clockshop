import {ADD_TO_CART_SUCCESS} from '../constants/cartConstants'

export const addToCart = (data, quantity) => {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: {...data, quantity}
    }   
}

export const removeFromCart = (id) => {
    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: id
    }
}

