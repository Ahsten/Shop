import React, { useContext, useState } from 'react';
import {CartContext} from './CartContext';

function Item(props){
    const [image] = useState(props.img);
    const [items, setItems] = useContext(CartContext);
    
    //Add item to the cart when the Add to Cart button is pressed
    function addToCart(){
        setItems(prevItems => [...prevItems, {name: props.name}]);
    }


    return (
        <div className="item">
            <img className="pic" src={image}></img><br/>
            <a>{props.name}</a><br/>
            <a>{props.price}</a><br/>
            <a onClick={addToCart} className="add-cart">Add to Cart</a>
        </div>
    )
}

export default Item;