import React from 'react';
import Banner from './Banner';
import ItemListContainer from '../../components/catalog/ItemListContainer';

function Home () {

    return (
       <> 
        <Banner /> 
        <h2 className='catalog-title'>Catálogo de paseos</h2>  
        <ItemListContainer />
       </>
    )
}

export default Home;