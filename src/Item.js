import React, { useContext, useEffect, useState } from 'react';
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';
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

    function checkForItem(itemName){
        for(const name in items){
            if(items[name] === itemName);
        }
    }
    
    function handleClick(id){
        console.log(items)
        if(!items.some(item => item.name === id)){
            let item = {
                name: props.name,
                price: props.price,
                quantity: 1,
            }
            setItems(items.concat(item));
        } else {
            items.forEach(item =>{
                if(item.name === id){
                    item.quantity = item.quantity + 1;
                }
            })
        }   
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