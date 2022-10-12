import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import '../../assets/styles/ItemListContainer.css';
import { collection, getDocs, query, where } from 'firebase/firestore'; 
import { db } from '../../firebase-config';
import { useParams } from 'react-router-dom';

function ItemListContainer () {
   
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(`flex`);
    const { category } = useParams(); 
 
   useEffect(() => {         
            const queryTours = collection(db , 'tours'); 
            if (category) {
                const queryByCategory = query(queryTours, where('category', '==', category )) 
                getDocs(queryByCategory) 
                .then(res => setTours(res.docs.map(tour => ({ id: tour.id, ...tour.data() }))), 
                setLoading(`none`))
            } else {
                getDocs(queryTours) 
                .then(res => setTours(res.docs.map(tour => ({ id: tour.id, ...tour.data() }))),  
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