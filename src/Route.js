import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartContext } from './CartContext';
import Home from './Home';
import Shop from './Shop';
import './styles.css';
import Navbar from './Nav';
import data from './Data';

function Routes(){
    //Grab the cart list object and convert to an array
    let list = sessionStorage.getItem('sKey');
    list = JSON.parse(list);

    const [items, setItems] = useState(list || data);

    //Update storage every time items changes
    useEffect(() => {
        sessionStorage.setItem('sKey', JSON.stringify(items));
    }, [items]);

    return(
        <BrowserRouter>
            <CartContext.Provider value={{items, setItems}}>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={Shop} />
            </CartContext.Provider>
        </BrowserRouter>
    )
}

export default Routes;