import React from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import Generic from './routes/Generic';

function App() {
  return (
   <>

    <Header />
    <Generic>
      <Home />
    </Generic>
   
    
   
   
   </>   
  );
}

export default App;