import React from 'react';
import ItemList from './ItemList'
import '../../assets/App.css';


function ItemListContainer ({greeting}) {
    return (
       <> 
       <h1 className='catalog-title'>{greeting}</h1>
        <ItemList />        
       </>
    )
    }

  


export default ItemListContainer;


