import React, { useEffect, useState} from 'react';
import ItemList from './ItemList'
import Catalog from '../../assets/database/Catalog'
import '../../assets/styles/App.css'

function ItemListContainer () {
   
    const [tours, setTours] = useState([])
    const [status, setStatus] = useState(`flex`)
    
    const promiseTours = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve(Catalog)
            }, 2000)
        })
    }

    useEffect(() => {
        promiseTours()
            .then((result) => {
                setTours(result)
                setStatus(`none`)
            })
            .catch ( (err) => {
                alert(err)
            })
    })
    
    return (
       <> 
        <h1 className='catalog-title'>Catálogo de paseos</h1>    
        <ItemList tours={tours}/>
        <div style={{display: status }}>
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </div>
      
       </>
    )
    }

export default ItemListContainer;