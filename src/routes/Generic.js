import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import ItemDetailContainer from '../components/catalog/ItemDetailContainer';
import Cart from '../components/catalog/Cart';
import BonusTrackMain from '../components/BonusTrack/BonusTrackMain';
import Help from '../components/footer/Help'
import PrivacyPolicy from '../components/footer/PrivacyPolicy'
import About from '../components/footer/About'
import TermsAndConditions from '../components/footer/TermsAndConditions'
//import ItemListContainer from '../components/catalog/ItemListContainer';
import Category from '../components/home/Category'

function Generic() {
  return (
   <>       
    <Routes>
        <Route path="/" element={<Home />} />    
        {/* <Route exact path="/paseos" element={<ItemListContainer />} />   */}
        <Route exact path="/categoria/:categoryId/:categoryName" element={<Category />} /> 
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/bonusTracks" element={<BonusTrackMain />} />  
        <Route exact path="/ayuda" element={<Help />} /> 
        <Route exact path="/sobre-deriva" element={<About />} /> 
        <Route exact path="/terminos-y-condiciones" element={<TermsAndConditions />} /> 
        <Route exact path="/politica-privacidad" element={<PrivacyPolicy />} />                
    </Routes>        
   </>   
  );
}

export default Generic;