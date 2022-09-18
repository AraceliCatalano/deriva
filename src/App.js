import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { UserAuthContextProvider } from './context/UserAuthContext'
import Header from './components/Header'
import Home from './components/home/Home'
import ItemListContainer from './components/catalog/ItemListContainer';
import BonusTrackMain from './components/BonusTrack/BonusTrackMain';
import Footer from './components/footer/Footer'
import Help from './components/footer/Help'
import PrivacyPolicy from './components/footer/PrivacyPolicy'
import About from './components/footer/About'
import TermsAndConditions from './components/footer/TermsAndConditions'
// Imports for Login with Firebase
import Login from './components/loginComponents/Login';
import ForgotPassword from './components/loginComponents/ForgotPassword';
import SignUp from './components/loginComponents/SignUp';
import HomeLogin from './components/loginComponents/HomeLogin'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
   <>
    <Header />

     <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route exact path="/paseos" element={<ItemListContainer />} />    
                <Route exact path="/bonusTracks" element={<BonusTrackMain />} />  
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
          </Col>
        </Row>
     </Container>
     
     <Footer />
   
   </>   
  );
}

export default App;
