import React from 'react';
import Item from './Item';
import data from './Data';
import Cart from './Cart';

function Shop(props){
    
    //Map the data to items and add to list of items
    const listItems = data.map((item)=> 
        <Item key={item.name} name={item.name} img={item.image} price={item.price} quantity={props.quatity} addItem={props.addItem}/>
    );

    return (
        <div>
            <div className="shop">
            {listItems}
            </div>
        </div>
    )
}

export default Shop;