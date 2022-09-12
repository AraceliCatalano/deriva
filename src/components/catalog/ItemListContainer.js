import React from 'react';
import ItemList from './ItemList'
import '../../assets/App.css';


function ItemListContainer () {
    return (
       <> 
       <h1 className='catalog-title'>Elegí uno de nuestros de paseos</h1>
        <ItemList />        
       </>
    )
    }

  


export default ItemListContainer;


