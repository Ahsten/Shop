import React, { useContext, useEffect, useState } from 'react';
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

function Item(props){
    const [image] = useState(props.img);
    const {items, setItems} = useContext(CartContext);
    
    function handleClick(){
        setItems(items.concat(props.name));
    }



    return (
        <div className="item">
            <img className="pic" src={image}></img><br/>
            <a>{props.name}</a><br/>
            <a>{props.price}</a><br/>
            <a>{props.quantity}</a>
            <a onClick={handleClick} className="add-cart">Add to Cart</a>
        </div>
    )
}

export default Item;