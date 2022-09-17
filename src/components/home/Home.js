import React from 'react';
import Banner from './Banner';
import ItemListContainer from '../../components/catalog/ItemListContainer';

function Home () {
    return (
       <> 
        <Banner /> 
        <h2 className='catalog-title'>Catálogo de paseos</h2>  
        <ItemListContainer categoryId="C4" categoryName="Arquitectura"/>
        <ItemListContainer categoryId="C1" categoryName="Historia"/>
        <ItemListContainer categoryId="C2" categoryName="Historias en bondi"/>
        <ItemListContainer categoryId="C3" categoryName="Arte"/>
       </>
    )
}

export default Home;