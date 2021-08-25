import React, { useEffect, useState, useContext } from 'react';
import './styles.css';
import logo from './logo.png'
import Cart from './Cart';
import { CartContext } from './CartContext'

function Navbar(){
    const [items, setItems] = useContext(CartContext);
    //Used to toggle the display of the Cart
    const [display, setDisplay] = useState({display: "none"});


    return (
        <div className="nav">
            <div className="header-left">
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
            </div>
            <img src={logo} className="logo"/>
            <div className="header-right">
                <a onClick={() => setDisplay({display: 'block'})}>Cart ({items.length})</a>
            </div>
            <Cart toggle={display} closeCart={display => setDisplay(display)} />
        </div>
    )
}

export default Navbar;
