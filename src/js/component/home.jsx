import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Form from "./form";

//create your first component
const Home = () => {
	const [list,setList] = useState([]);

	useEffect(() => {

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify([]);

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
		};

		fetch("http://assets.breatheco.de/apis/fake/todos/user/diuca", requestOptions)
		.then(response => response.json())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
			}
		

	,[])

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
						<Form list = {list} setList={setList}/>

					</ul>
				</div>				
			</div>
			
		</div>
	);
};

export default Home;
