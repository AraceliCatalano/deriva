import React from 'react';
import Banner from './Banner';
import ItemList from './catalog/ItemList';
import '../assets/App.css'

function Home () {
    return (
       <> 
        <Banner /> 
        <h2>Catálogo de paseos</h2>
        <p>{process.env.REACT_APP_PRUEBA}</p>
        <ItemList />
       </>
    )
}

export default Home;