import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Routes from './Route';
import {CartContext} from './CartContext';




ReactDOM.render(
  <React.StrictMode>
      <Routes />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

