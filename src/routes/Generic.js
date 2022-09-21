import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import ItemDetailContainer from '../components/catalog/ItemDetailContainer';
import Cart from '../components/catalog/Cart';
import BonusTrackContainer from '../components/bonusTrack/BonusTrackContainer';
import Help from '../components/footer/Help'
import PrivacyPolicy from '../components/footer/PrivacyPolicy';
import About from '../components/footer/About';
import TermsAndConditions from '../components/footer/TermsAndConditions'
import Category from '../components/home/Category';
// Imports for Login with Firebase
import { UserAuthContextProvider } from '../context/UserAuthContext';
import Login from '../components/loginComponents/Login';
import ForgotPassword from '../components/loginComponents/ForgotPassword';
import SignUp from '../components/loginComponents/SignUp';
import HomeLogin from '../components/loginComponents/HomeLogin'
import ProtectedRoute from './ProtectedRoute';

function Generic() {
  return (
   <>  
   <UserAuthContextProvider>
      <Routes>
          <Route path="/" element={<Home />} />    
          {/* <Route exact path="/paseos" element={<ItemListContainer />} />   */}
          <Route exact path="/categoria/:categoryId/:categoryName" element={<Category />} /> 
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/bonusTracks" element={<BonusTrackContainer />} />  
          <Route exact path="/ayuda" element={<Help />} /> 
          <Route exact path="/sobre-deriva" element={<About />} /> 
          <Route exact path="/terminos-y-condiciones" element={<TermsAndConditions />} /> 
          <Route exact path="/politica-privacidad" element={<PrivacyPolicy />} />  
          <Route 
                  exact path="/homeLogin" 
                  element={
                    <ProtectedRoute> 
                      <HomeLogin />
                    </ProtectedRoute>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/restablecerContrasena" element={<ForgotPassword />} />              
      </Routes>        
    </UserAuthContextProvider>     
   </>   
  );
}

export default Generic;