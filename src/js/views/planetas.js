import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Planetas = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPlanetas();
	}, []);

	return (
		<div className="container mt-5">
			<h1 className="mb-3">Planets</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.planetsList.map((item, index) => {
					const dataPlanetas = [
						{
							label: "Climate",
							value: item.climate
						},
						{
							label: "Terrain",
							value: item.terrain
						}
					];
					return (
						<Card
							key={index}
							title={item.name}
							imagen="https://starwarsblog.starwars.com/wp-content/uploads/2015/01/Coruscant.jpeg"
							/*gravity={item.gravity}
							terrain={item.terrain}*/
							link={item.url}
							contenido={dataPlanetas}
							category={"/planets/"}
							id={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
