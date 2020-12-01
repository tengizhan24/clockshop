import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { LinkContainer } from 'react-router-bootstrap'
import MainScreen from './screens/MainScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import DotsMobileStepper from './screens/ProductScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import store from './store'
import {Provider} from 'react-redux'
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
        <Route path="/cart" component={CartScreen}/>     
        <Route path="/order" component={OrderFrom} />
        <Route path="/login" component={LoginForm} />
        <Route path="/Addto" component={AddToform}/>  
      </Router>     
       </Provider>
    
  );
}

export default App;
