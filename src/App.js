import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
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
import { Routes, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { UserAuthContextProvider } from './context/UserAuthContext'

function App() {
  return (
   <>
    <Header />

     <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
              <Route 
                path="/homeLogin" 
                element={
                  <ProtectedRoute> 
                    <HomeLogin />
                  </ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/restablecerContrasena" element={<ForgotPassword />} />
                <Route path="/" element={<Home />} />
                <Route path="/paseos" element={<ItemListContainer greeting="Elegí uno de nuestros paseos." />} />    
                <Route path="/bonusTracks" element={<BonusTrackMain />} />  
                <Route path="/ayuda" element={<Help />} /> 
                <Route path="/sobre-deriva" element={<About />} /> 
                <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} /> 
                <Route path="/politica-privacidad" element={<PrivacyPolicy />} /> 
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
