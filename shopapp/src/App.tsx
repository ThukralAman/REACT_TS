import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
function App() {
  return (
     <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/products" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/" element={<ProductList/>} />
          <Route path="*" element={<Default/>} />
        </Routes>
      </Router>
     </>
  );
}

export default App;
