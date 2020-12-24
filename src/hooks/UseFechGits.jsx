import { useEffect, useState } from "react";
import {GetGIf} from '../Helpers/GetGif'

export const UseFechGits = (category) =>{

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        
        GetGIf(category).then(img =>{

            setState({
    
                data:img,
                loading: false
            });
            
        })
        

    },[category]);

    return state;
}