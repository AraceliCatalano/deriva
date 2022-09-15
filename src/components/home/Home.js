import React from 'react';
import Banner from './Banner';
import ItemListContainer from '../../components/catalog/ItemListContainer';

function Home () {
    return (
       <> 
        <Banner /> 
        <ItemListContainer />
        {/* <ItemListContainer category="Arquitectura"/>
        <ItemListContainer category="Arte"/>
        <ItemListContainer category="Historia"/>
        <ItemListContainer category="Historias en bondi"/> */}
       </>
    )
}

export default Home;