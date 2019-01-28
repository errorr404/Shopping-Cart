import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'
class App extends Component {
  render() {
    // console.log('env variable',process.env.REACT_APP_APP_ID)
    return (
      <React.Fragment>
       <Navbar />
       <Switch>
         <Route path="/" component = {ProductList} exact/>
         <Route path="/details" component = {Details} />
         <Route path="/cart" component = {Cart} />
         <Route component = {Default} />
       </Switch>
       <Modal />
      </React.Fragment>
    );
  }
}

export default App;
