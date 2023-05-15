import React, { useEffect, useState } from "react";

//include images into your bundle

import Form from "./form";
import List from "./list";

//create your first component
const Home = () => {
	const [list,setList] = useState([]);

	const list_creatinator = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/diuca", {
				method: 'POST', 
				body: JSON.stringify([]),
				headers:{
					'Content-Type': 'application/json'
				}
			})
			.then(response => response.json())
			.then(result => console.log(result))
			.catch(error => console.log('error', error))
	}

	const list_get = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/diuca", {
			method: 'GET', 			
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(result => setList(result)	)
		.catch(error => console.log('error', error));
	}

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/diuca", {
				method: 'GET', 			
				headers:{
					'Content-Type': 'application/json'
				}
			})
			.then(response => {
				if (response.status >= 400){
					console.log(response.status)
					list_creatinator()
				}
				return response.json()})
			.then(result => 
					setList(result)				
			)
			.catch(error => console.log('error', error));

			
		},[])

		
			
	

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col d-flex justify-content-center">
					<h1>Todo</h1>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col d-flex justify-content-center">					
					<ul className="list-group">
						<Form list = {list} setList={setList} list_get ={list_get}/>
						<List list ={list} setList = {setList} list_get ={list_get}/>
					</ul>
				</div>				
			</div>
			
		</div>
	);
};

export default Home;
