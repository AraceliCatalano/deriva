import React from 'react';
import banner from '../../assets/images/BA_Silueta_11.png';
import '../../assets/styles/Banner.css'

function Banner () {
    return (
       <> 
        <img src={banner} alt="banner" className="banner" />
       </>
    )
}

export default Banner;