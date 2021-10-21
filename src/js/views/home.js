import React from "react";
import "../../styles/home.scss";

import { Personajes } from "../views/personajes";
import { Vehiculos } from "../views/vehiculos";
import { Planetas } from "../views/planetas";

export const Home = () => {
	return (
		<div>
			<div className="personajespage">
				<Personajes />
			</div>
			<div className="vehiculospage">
				<Vehiculos />
			</div>
			<div className="planetaspage">
				<Planetas />
			</div>
		</div>
	);
};
