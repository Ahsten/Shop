import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import Item from './Item';


function Cart(props){  
    const [items, setItems] = useContext(CartContext);

    const list = items.map(item => item.name);

    return(
        <div className="cart" style={props.toggle}>
            <div className="cart-content">
                <a 
                onClick={() => props.closeCart({display: 'none'})} 
                className="close">
                Close</a>
                <h2>Shopping Cart</h2>
                <div>{list}</div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;