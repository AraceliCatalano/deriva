import React from'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import ItemMock from '../../assets/database/ItemMock'


// Conttainer que trae el  detalle del item
const ItemDetailContainer = () =>{

    const [item, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    
  //Para que se renderize una sola vez, agregar [] al final del useEffect.
  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(ItemMock)
        }, 2000)
      })
    }
    getItem()
      .then((items) => {
        const item = items.find((item => item.id === 1))
        setItemDetail(item)
        setLoading(false)
      })
  }, [])
      
     
    return (
        <>
        {/* Si se esta cargando se muestra el mensaje, sino se muestra el ItemDetail */}
        {
            loading ? 
            <div style={{paddingTop: 100 }}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
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