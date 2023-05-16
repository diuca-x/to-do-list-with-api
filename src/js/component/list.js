import React from "react";
import Component from "./component";


const List  = (props) => {
    const {list, setList,list_get: list_getinator} = props;

    const handleDelete = (deleteIndex) =>{
        

        fetch("https://assets.breatheco.de/apis/fake/todos/user/diuca", {
			method: 'PUT', 
			body: JSON.stringify(list.filter((x,index) =>index !== deleteIndex)),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(result => list_getinator())
		.catch(error => console.log('error', error));

        

        
    }
      

    return (
        <>
            {list.map( (x,index) => {            
            return(
                
                <Component item = {x} handleDelete = {handleDelete} key={index} index = {index}/>    
                
            )
        })}
        </>
    );
}

export default List;