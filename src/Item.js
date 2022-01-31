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

    function handleInt(string){
        let num = parseInt(string) + 1;
        let strQty = string.toString();
        return strQty;
    }
    
    function handleClick(id){
        console.log(items);
        setItems(
            items.map((item) =>{
                if(item.id === id){
                    return {...item, qty: item.qty + 1 }
                } else {
                    return item;
                }
            })
        )
    }

    return (
        <div className="item">
            <img className="pic" src={image}></img><br/>
            <a>{props.name}</a><br/>
            <a>{props.price}</a><br/>
            <a>{props.quantity}</a>
            <a onClick={()=>handleClick(props.name)} className="add-cart">Add to Cart</a>
        </div>
    )
}

export default Item;