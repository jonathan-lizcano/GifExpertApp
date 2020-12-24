import React from 'react';

const GifGridItem = ({title, url}) =>{

    return(

        <div className = "animate__animated animate__fadeIn card">
             
            <p>{title}</p>
            <img src = {url}/>
        </div>

    );
}
export default GifGridItem;