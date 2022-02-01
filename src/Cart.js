import React, { useContext } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import {CartContext} from './CartContext';
import { CartItem } from './Item';
import data from './Data';
import Item from './Item';

function Cart(props){  
    const {items, setItems} = useContext(CartContext);

    
    const itemList = items.map(item => {
        <CartItem name={item.name} quantity={item.quantity} price={item.price} /> 
    });
                  

    function handleCheckout(){
        sessionStorage.clear();
        setItems([]);
    }


    return(
        <div className="cart" style={props.toggle}>
            <div className="cart-content">
                <a 
                onClick={() => props.closeCart({display: 'none'})} 
                className="close">
                Close</a>
                <h2>Shopping Cart</h2>
                <div>
                {items.map((item)=> {
                    return <CartItem name={item.name} price={item.price} quantity={item.quantity} />
                })}
                </div>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;