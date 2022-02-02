import React, { useContext, useState } from 'react';
import {CartContext} from './CartContext';

function Item(props){
    const [image] = useState(props.img);
    const {items, setItems} = useContext(CartContext);
    
    //Add item to the cart or add to quantity if alreadu in the cart
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