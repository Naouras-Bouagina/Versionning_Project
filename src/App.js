import React, { Component } from 'react'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';

import Contact from './components/Contact/Contact';
import ShopCart from './components/Shopping-Cart/ShopCart';
import About from './components/About/About';


import Login from './components/Login';
import Products from './components/Products/ProductList';

import Checkout from './components/Checkout';

import { isAuthenticated } from './repository';





export class App extends Component {
 
  render() {
    const auth = isAuthenticated();
    return (
     
      <Router>
        
         
          
        
       <Header/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Products />} />
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Shopcart" element={<ShopCart/>}/>
       <Route path="/About" element={<About/>}/>
      
      
            
            <Route path="/checkout" element={<Checkout />} />
            { (!auth) ? <Route  path="/login" element={<Login />} /> : '' }
       </Routes>
       <Footer/>
      </Router>
     
    )
  }
}

export default App



