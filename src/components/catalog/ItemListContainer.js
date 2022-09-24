import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
//import Catalog from '../../assets/database/Catalog';
import '../../assets/styles/ItemListContainer.css';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function ItemListContainer () {
   
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(`flex`);
    const { category } = useParams(); 
 
   useEffect(() => {
            const queryFs = getFirestore(); //FB1- Importar el servicio de Firebase
            const queryTours = collection(queryFs, 'tours'); //FB2- Crear pointer a mi collection.
            if (category) {
                const queryByCategory = query(queryTours, where('category', '==', category )) 
                getDocs(queryByCategory) //FB3- Traer mi collection con una promesa (getDocs).
                .then(res => setTours(res.docs.map(tour => ({ id: tour.id, ...tour.data() }))), //FB4- Poner el id en un objeto. 
                setLoading(`none`))
            } else {
                getDocs(queryTours) //FB3- Traer mi collection con una promesa (getDocs).
                .then(res => setTours(res.docs.map(tour => ({ id: tour.id, ...tour.data() }))), //FB4- Poner el id en un objeto. 
                setLoading(`none`))
            }
        }, [category])
    
    
    return (
       <> 
        <div className="catalog-container">
            <div className="category-title">
                <h3 >{category}</h3> 
            </div>
            <div style={{display: loading, justifyContent: 'center', paddingTop: '10px'}}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            <ItemList tours={tours}/>
        </div>      
      
       </>
    )
    }

export default ItemListContainer;