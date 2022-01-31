import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import data from './Data';
import Item from './Item';

function Cart(props){  
    const {items, setItems} = useContext(CartContext);

    function CartItem({name, quantity, price}){
        return(
            <div className="cart-item">
                <div>{name}</div>
                <div>Qty: {quantity}</div>
                <div>{price}</div>
            </div>
        )
    }

    const itemList = items.map(item => <CartItem name={item.id} quantity={item.qty} price={item.price} />);

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
                    {itemList}
                </div>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;