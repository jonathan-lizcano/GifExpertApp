 import React, { Component, useState } from 'react';
import AppCategory from './AppCategory';
import GifGrid from './GifGrid';

 const GifExpertApp = () =>{


    const [categorias, setCategorias] = useState(['goku']);


    return(

        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AppCategory setCategorias = {setCategorias} />

            <ol>

                {
                    categorias.map(category => 
                        
                        <GifGrid  category = {category}
                                  key = {category}
                        />
                    )           
                    
                }

            </ol>
        </>
    );

 }
  export default GifExpertApp;

