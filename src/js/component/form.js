import React, { useEffect, useState } from "react";

const Form = (props) => {
    const {list, setList, list_get} = props
    const [item, setItem] = useState ("")

    const change_handlinator = (task) => {
        setList(prevList => {
            const newList = [...prevList, task];                                        
            return newList;
        });

        fetch("https://assets.breatheco.de/apis/fake/todos/user/diuca", {
			method: 'PUT', 
			body: JSON.stringify([...list, task]),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(result => list_get())
		.catch(error => console.log('error', error));

        
    }

    return(
        <>                
            <div className="col-auto">
                <label htmlFor="input" className="visually-hidden">todo</label>
                <input type="text" onChange={e => setItem(e.target.value)} value={item} onKeyDown={ (e) => {
                                if (e.key === 'Enter') {
                                    if(item != ""){   

                                        const task = {
                                            "label": item,
                                            "done": false
                                        }
                                        change_handlinator(task)                                   
                                                                                         
                                    }
                                        
                                }
                                
                            }}/>
            </div>   
        </>
    );
}

export default Form