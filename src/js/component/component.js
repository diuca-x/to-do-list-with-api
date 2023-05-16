import React from "react";
import { useState } from "react";


const Component = (props) => {
    const {item,handleDelete,index} = props

    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const handleMouseEnter = () => {
        setShowDeleteButton(true);
        
        
    };
    const handleMouseLeave = () => {
        setShowDeleteButton(false);
        
    };

    return (
        
                
            <li className="list-group-item d-flex bg-light align-middle justify-content-start" 
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <p className="text-center">{item.label} </p>               
                {showDeleteButton && (<button type="button " className="btn btn-danger ms-auto me-0 " onClick={()=>{handleDelete(index)}}>X</button>)}
            </li> 
                    
        
    );

}

export default Component