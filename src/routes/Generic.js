import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import ItemDetailContainer from '../components/catalog/ItemDetailContainer';
import ItemListContainer from '../components/catalog/ItemListContainer';
import Category from '../components/home/Category'

function Generic() {
  return (
   <>       
    <Routes>
        <Route path="/" element={<Home />} />    
        <Route exact path="/paseos" element={<ItemListContainer />} />  
        <Route exact path="/category/:category" element={<Category />} /> 
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />                
    </Routes>        
   </>   
  );
}

export default Generic;