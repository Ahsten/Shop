import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Navbar from './Nav';
import Routes from './Route';
import {CartProvider} from './CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Navbar />
      <Routes />
      <Footer />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

