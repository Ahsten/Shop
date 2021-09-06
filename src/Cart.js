import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import data from './Data';
import Item from './Item';

function Cart(props){  
    const {items, setItems} = useContext(CartContext);
    const itemList = items.map(item => <div>{item}</div>);

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
                <div>{itemList}</div>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;