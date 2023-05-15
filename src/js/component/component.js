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
        
                
            <li className="list-group-item d-flex " 
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {item.label}                
                {showDeleteButton && (<button type="button" className={` btn  ms-auto me-0 `} onClick={()=>{handleDelete(index)}}>X</button>)}
            </li> 
                    
        
    );

}

export default Component