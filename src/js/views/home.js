import React from "react";
import "../../styles/home.scss";

import { Personajes } from "../views/personajes";
// import { Planetas } from "../views/planetas";
import { Vehiculos } from "../views/vehiculos";

export const Home = () => {
	return (
		<div>
			<div className="personajespage">
				<Personajes />
			</div>
			<div className="vehiculospage">
				<Vehiculos />
			</div>
		</div>
	);
};
