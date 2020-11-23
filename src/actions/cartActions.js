import {ADD_TO_CART_FAIL, ADD_TO_CART_SUCCESS, ADD_TO_CART_REQUEST} from '../constants/cartConstants'

export const addToCart = (data, quantity) => {
    return {
        type: ADD_TO_CART_SUCCESS,
        payload: data
    }   
}

export const removeFromCart = (id) => {
    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: id
    }
}