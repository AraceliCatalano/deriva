import React from 'react';


function ItemListContainer ({greeting}) {
    return (
       <> 
        <h1 style={styles.h1}>{greeting}</h1>
       </>
    )
    }

    const styles = {
        h1: {
            padding: 30,
            color: "#7FAF9E",
            alignItems: 'center'
        }
    }


export default ItemListContainer;


