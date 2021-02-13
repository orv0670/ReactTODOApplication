import React from "react";
import ListaToDo from "./listToDo.js";

//create your first component
export function Home() {
	return (
		<div className="Home">
			<h1>
				<strong>Tareas por hacer</strong>
			</h1>
			<div className="Home-content">
				<ListaToDo />
			</div>
		</div>
	);
}
