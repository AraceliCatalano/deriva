import React from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import Generic from './routes/Generic';
import Footer from './components/footer/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
   <>
    <CartProvider>
      <Header />
      <Generic>
        <Home />
      </Generic>
    </CartProvider>
    <Footer />
   </>   
  );
}

export default App;