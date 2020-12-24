import React from 'react';
import { UseFechGits } from './hooks/UseFechGits';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) =>{

    const {data:images,loading} = UseFechGits(category);
    


    return(
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando...</p> }
            <div className = "card-grid">
                    {
                        
                        images.map(img =>{
                        return(
                            
                            <GifGridItem 
                                key = {img.id}
                                {...img}
                            />
                            
                        ) 
                        })
                    }  
            </div>
        
        </>

    );
}
export default GifGrid;