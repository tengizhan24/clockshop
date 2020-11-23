import {createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducer'



const rootReducer = combineReducers({
    cartReducer: cartReducer,
    
})

const composeEnhancers = composeWithDevTools({
    
  });

const store = createStore(rootReducer, composeEnhancers(   
    applyMiddleware()
));

export default store