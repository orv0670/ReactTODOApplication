import React from "react";
import PropTypes from "prop-types";

const Borrar = ({ tarea, index, borrarTareas }) => {
	console.log(tarea);

	return (
		<>
			<div className="tarea">
				<h5>
					<strong>{tarea}</strong>
				</h5>
				<button
					className="btn-delete btn btn-danger"
					onClick={() => borrarTareas(index)}>
					<i className="fas fa-trash"></i>
				</button>
			</div>
			<div className="line" />
		</>
	);
};

//validacion de PropTypes
Borrar.propTypes = {
	tarea: PropTypes.string,
	index: PropTypes.number,
	borrarTareas: PropTypes.func
};

export default Borrar;
