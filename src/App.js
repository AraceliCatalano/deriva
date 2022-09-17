import React from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import Generic from './routes/Generic';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>

    <Header />
    <Generic>
      <Home />
    </Generic>
    <Footer />
      
   </>   
  );
}

export default App;