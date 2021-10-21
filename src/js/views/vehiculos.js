import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchVehiculos();
	}, []);

	return (
		<div className="container">
			<h1 className="mb-3">Vehicles</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.vehiclesList.map((item, index) => {
					const dataVehicles = [
						{
							label: "Model",
							value: item.model
						},
						{
							label: "Manufacturer",
							value: item.manufacturer
						}
					];
					return (
						<Card
							key={index}
							title={item.name}
							imagen="https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C1%2C1536%2C864&width=768"
							link={item.url}
							contenido={dataVehicles}
							category={"/vehicles/"}
							id={index}
						/>
					);
				})}
			</div>
		</div>
	);
};
