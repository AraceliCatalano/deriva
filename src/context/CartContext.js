import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const  CartProvider = ({children}) => {
    const [items, setItems] = useState([]); 

    const isInCart = (id) => {
      const tourFoundInCart = items.find(item => item.id === id);
      return tourFoundInCart;
     }

    const addItem = ( item, quantity) => {
        isInCart(item.id) ?
        setItems(items.map((tourInCart) => {
            if (tourInCart.id === item.id) {
                tourInCart.quantity += quantity;
            }
            return tourInCart;
        }))
         :
        setItems([...items,       
                    {id: item.id, 
                     name:item.name,
                     price: item.price,
                     quantity: quantity}
                ]); 
        
    }
    const removeItem = (id) => {
        setItems (items.filter((item) => item.id !== id));
    }
    
    const clearItems = () => {
        setItems([]);
    }

    const totalCartPrice = () => {
        return items.reduce((previous, current) => previous + current.quantity * current.price, 0);
    }

    

    

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clearItems, totalCartPrice }} >
            {children}
        </CartContext.Provider>
    )
}

