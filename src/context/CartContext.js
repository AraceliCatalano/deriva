import React, { createContext, useState } from 'react';

//1- Se crea el contexto
export const CartContext = createContext([]);

//2- Se crea el proveedor, que es quien accede a la info.
export const  CartProvider = ({children}) => {
    const [items, setItems] = useState([]); //No los recibe, los setea con addItem (que recibe de ItemDetail)

    const isInCart = (id) => {
      const tourFoundInCart = items.find(item => item.id === id);
      return tourFoundInCart;
     }

    //addItem tiene que recibir un item y una cantidad (se los envía ItemDetail), y setear items.
    const addItem = ( item, quantity) => {
        isInCart(item.id) ?
        setItems(items.map((tourInCart) => {
            if (tourInCart.id === item.id) {
                tourInCart.quantity += quantity;
            }
            return tourInCart;
        }))
         :
        setItems([...items,    //Nota: remover spread operator cuando consulte db en Firebase.    
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

