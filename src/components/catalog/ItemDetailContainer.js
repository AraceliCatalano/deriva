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

  //Para renderizar una sola vez, agregar [] al final del useEffect.
    useEffect(() => {
      const queryFs = getFirestore(); //FB1- Importar el servicio de Firebase
      const queryItem = doc(queryFs, 'tours', id); //FB2- Crear pointer al dato (doc).
      getDoc(queryItem) //FB3- Traer el dato (doc) con una promesa (getDoc).
          .then (res => {
            setItemDetail({ id: res.id, ...res.data() })},//FB4- Poner el id en un objeto. 
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
   

