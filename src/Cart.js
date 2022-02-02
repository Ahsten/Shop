import React, { useContext } from 'react';
import {CartContext} from './CartContext';

export function CartItem({name, quantity, price}){
    return(
        <div className="cart-item">
            <div>{name}</div>
            <div>Qty: {quantity}</div>
            <div>{price}</div>
        </div>
    )
}

function Cart(props){  
    const {items, setItems} = useContext(CartContext);            

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