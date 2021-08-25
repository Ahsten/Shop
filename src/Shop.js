import React from 'react';
import Item from './Item';
import data from './Data';
import Cart from './Cart';

function Shop(){
    //Map the data to items and add to list of items
    const listItems = data.map((item)=> 
        <Item  key={item.id} name={item.id} img={item.image} price={item.price} />
    );

    return (
        <div>
            <div className="shop">
            {listItems}
            </div>
            <Cart />
        </div>
    )
}

export default Shop;