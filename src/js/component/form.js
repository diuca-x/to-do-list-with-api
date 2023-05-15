import React, { useEffect, useState } from "react";

const Form = (props) => {
    const {list, setList} = props
    const [item, setItem] = useState ("")

    return(
        <>                
            <div className="col-auto">
                <label htmlFor="input" className="visually-hidden">todo</label>
                <input type="text" onChange={e => setItem(e.target.value)} value={item} onKeyDown={ (e) => {
                                if (e.key === 'Enter') {
                                    if(item != ""){   
                                        
                                        
                                        setList(prevList => {
                                            const newList = [...prevList, item];                                        
                                            return newList;
                                        });

                                                                                         
                                    }
                                        
                                }
                                
                            }}/>
            </div>   
        </>
    );
}

export default Form