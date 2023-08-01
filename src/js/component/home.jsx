import React,{useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/index.css";

//create your first component
const Home = () => {
	const [tarea,setTarea] = useState("")
	const [list,setlist] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"])

	const handleInput = (e) => {
		let texto = e.target.value;
		if (e.keyCode == 13){
			setTarea(texto);

			//PRIMERA APROXIMACIÓN
			//let tempArr= list.slice(); //Copia de arreglo por valor
			//tempArr.push(texto);
			//setlist(tempArr);

			//SEGUNDA APROXIMACIÓN operador spread
			setlist([...list, texto]);
		}
	}

	const deleteTask = (index) => {
		//PRIMERA APROXIMACIÓN
		let tempArr= list.slice(); //Copia de arreglo por valor
		tempArr = tempArr.filter((item,index2)=>{ return index2 != index })
		setlist(tempArr);

	}

	return (
		<>
			<div className="container">
				<p className=" titulo d-flex justify-content-center">Todos</p>
				<ul class="list-group">
					<li class="list-group-item">
						<input className="form-control border-0 fs-4"  placeholder="What needs to be done?" 
							onKeyUp={
								(e) => {
									handleInput(e);
								}
							}
							
						/>
					</li>
					{list && list.length > 0 ? 
						<>{
							list.map((item,index)=>{
							return (
								<li className="list-group-item text-secondary " key={index}>
									<div className="row">
										<div className="col-10 ps-4 fs-5">
											{item}
										</div>
										<div className="col-2">
										<button className="btn btn-outline-danger border-0 me-2 ms-4" type="button" onClick={e=> {deleteTask(index)}}> X</button>
										</div>
									</div>
									
								</li>
							);
							})
						}</> : 
						<li className="list-group-item text-secondary"> The list is empty </li>
						}

					<li className="list-group-item">
					{list && list.length > 0 ? <p className="footer"> {list.length} item left</p> : <p className="footer"> You have no tasks to do </p>}
						 
					</li>
				</ul>
			</div>
		</>
	);
};

export default Home;
