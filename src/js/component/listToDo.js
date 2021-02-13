import React, { useState } from "react";
import Borrar from "./borrar.js";

const ListaToDo = () => {
	// para nueva tarea
	const [tarea, setTarea] = useState({});
	//para nuestras tareas anteriores
	const [tareas, setTareas] = useState([]);
	//captura el evento y actualiza el estado para tarea
	const cambioTarea = x => setTarea({ [x.target.name]: x.target.value });

	//comprobacion si la lista esta vacia
	const comproLista = x => {
		if (Object.keys(tarea).length === 0 || tarea.tarea.trim() === "") {
			alert("Por favor ingrese una tarea");
			return;
		}
		//actualiza el estado de tareas existentes y nuevas
		tareas.push(tarea);
		setTareas([...tareas]);
		console.log(tareas, tarea);
	};

	//metodo que elimina tareas existentes
	const borrarTareas = index => {
		const nuevaTareas = [...tareas];
		//usando la funcion splice()
		nuevaTareas.splice(index, 1);
		//devuelve un array con la tarea eliminada
		setTareas(nuevaTareas);
	};

	return (
		<>
			<form onSubmit={x => x.preventDefault()}>
				<br />
				<input
					className="form-control mb-2 input"
					type="text"
					name="tarea"
					onChange={cambioTarea}
				/>
				<button
					onClick={comproLista}
					className="btn btn-info btn-block">
					Salvar Tarea
				</button>
			</form>

			{tareas.map((value, index) => (
				<Borrar
					tarea={value.tarea}
					key={index}
					index={index}
					borrarTareas={borrarTareas}
				/>
			))}

			<div className="items-left">
				<strong>{tareas.length} Tareas por completar</strong>
			</div>
		</>
	);
};

export default ListaToDo;
