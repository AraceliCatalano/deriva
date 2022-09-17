import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import Catalog from '../../assets/database/Catalog';
import '../../assets/styles/ItemListContainer.css';


function ItemListContainer ({categoryId, categoryName}) {
   
    const [tours, setTours] = useState([]);
    const [status, setStatus] = useState(`flex`);

 
   useEffect(() => {
        const promiseTours = () => {
            return new Promise ( (resolve, reject) => {
                setTimeout(() => {
                    resolve(Catalog)
                }, 2000)
            })
        }

        promiseTours()
        .then((result) => {
               const tours = result.filter(tour => tour.categoryId === categoryId)           
                setTours(tours)
                setStatus(`none`)
            })
            .catch ( (err) => { console.log(err) })
            }, [categoryId])

         
    
    return (
       <> 
        <div className="catalog-container">
            <div className="category-title">
                <h3 >{categoryName}</h3>
            </div>
            <div style={{display: status, justifyContent: 'center', paddingTop: '10px'}}>
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