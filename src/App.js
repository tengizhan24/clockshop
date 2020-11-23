import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { LinkContainer } from 'react-router-bootstrap'
import MainScreen from './screens/MainScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

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


function App() {
  return (
   
      <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" component={MainScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/sign" />
        <Route path="/cart" component={CartScreen}/>       
      </Router>     
       </Provider>
    
  );
}

export default App;
