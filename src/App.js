import './App.css';
import Header from './components/Header'
import MainScreen from './screens/MainScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";

import store from './store'
import { Provider } from 'react-redux'
import OrderFrom from './screens/OrderFrom';
import CheckinScreen from './screens/CheckinScreen';
import LoginForm from './screens/LoginForm';
import AddToform from './screens/AddTo/AddToform';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" component={MainScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/checkin" component={CheckinScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/order" component={OrderFrom} />
        <Route path="/login" component={LoginForm} />
        <Route path="/Addto" component={AddToform} />
      </Router>
    </Provider>
  );
}

export default App;
