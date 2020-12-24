import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AppCategory = ({setCategorias}) =>{

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {

        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        // console.log('submit hecho');
        if(inputValue.trim().length > 2){

            setCategorias(categorias => [inputValue, ...categorias]);
            setInputValue('');
        }
    }

    return(

        <form onSubmit = {handleSubmit}>

            <h1>{inputValue}</h1>
            <input 
            type = "text"
            value = {inputValue}
            onChange = {handleInputValue}
            />

        </form>

    );
}
export default AppCategory;

AppCategory.prototype = {
    setCategorias: PropTypes.func.isRequired
}

