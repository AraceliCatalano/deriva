import React from'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
//import Catalog from '../../assets/database/Catalog';
import '../../assets/styles/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () =>{

    const [item, setItemDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();    

  
    useEffect(() => {
      const queryFs = getFirestore(); 
      const queryItem = doc(queryFs, 'tours', id); 
      getDoc(queryItem) 
          .then (res => {
            setItemDetail({ id: res.id, ...res.data() })},
            setLoading(false))
        }, [id])
      
    return (
        <>
        {
          loading ? 
          <div style={{padding: 100 }}>
              <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                      <span className="visually-hidden">Cargando...</span>
                  </div>
              </div>
          </div>
          : 
          <ItemDetail item={item}/> 
        }
        </>
            
    )
  }
  
  export default ItemDetailContainer;
   

