import React from 'react';
import Banner from './Banner';
import ItemList from '../catalog/ItemList';
import '../../assets/styles/App.css';

function Home () {
    return (
       <> 
        <Banner /> 
        <h2>Catálogo de paseos</h2>
        <ItemList />
       </>
    )
}

export default Home;