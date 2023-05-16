import React, { useEffect, useState } from "react";

const Form = (props) => {
    const {list, setList, list_get: list_getinator} = props
    const [item, setItem] = useState ("")

    const change_handlinator = (task) => {
        let next_list = [...list, task]
        setList(next_list);

        fetch("https://assets.breatheco.de/apis/fake/todos/user/diuca", {
			method: 'PUT', 
			body: JSON.stringify(next_list),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(result => list_getinator())
		.catch(error => console.log('error', error));

        
    }

    return(
        <>                
            <div className="col-auto">
                <label htmlFor="input" className="visually-hidden">todo</label>
                <input type="text" className="w-100 bg-white" onChange={e => setItem(e.target.value)} value={item} onKeyDown={ (e) => {
                                if (e.key === 'Enter') {
                                    if(item != ""){   

                                        const task = {
                                            "label": item,
                                            "done": false
                                        }
                                        change_handlinator(task)   
                                        setItem("")                                
                                                                                         
                                    }
                                        
                                }
                                
                            }}/>
            </div>   
        </>
    );
}

export default Form