import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../catalog/ItemListContainer';

function Category () {
    const params = useParams();

    return (
       <> 
        <ItemListContainer category={params.category} />
       </>
    )
}

export default Category;