import React, { useEffect, useState} from 'react';
import ItemList from './ItemList';
import Catalog from '../../assets/database/Catalog';
import '../../assets/styles/ItemListContainer.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ItemListContainer ({category}) {
   
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
    }, [category])
    
    return (
       <> 
        <div className="catalog-container">

            <h2 className='catalog-title'>Catálogo de paseos</h2>  

            <div style={{display: status, justifyContent: 'center', paddingTop: '10px'}}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

            <Tabs
            defaultActiveKey="todos"
            id="tours-catalog-display"
            className="mb-3 categories-container category-name" 
            >
                <Tab eventKey="todos" title="Todos" >
                    <ItemList tours={tours}/>
                </Tab>
                <Tab eventKey="historia" title="Historia">
                    <ItemList tours={tours}/>
                </Tab>
                <Tab eventKey="arte" title="Arte">
                    <ItemList tours={tours}/>
                </Tab>
                <Tab eventKey="arquitectura" title="Arquitectura">
                    <ItemList tours={tours}/>
                </Tab>
                <Tab eventKey="bondi" title="Historias en bondi">
                    <ItemList tours={tours}/>
                </Tab>
            </Tabs>
        </div>      
      
       </>
    )
    }

export default ItemListContainer;