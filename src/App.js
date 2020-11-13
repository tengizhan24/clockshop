import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { LinkContainer } from 'react-router-bootstrap'
import MainScreen from './screens/MainScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" component={MainScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/sign" />
        <Route path="/cart" component={CartScreen}/>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
