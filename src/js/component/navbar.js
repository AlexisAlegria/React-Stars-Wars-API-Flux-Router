import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="logosw w-25"
						src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/personajes">
					<button className="btn btn-light mx-3">Characters</button>
				</Link>
				<Link to="/vehiculos">
					<button className="btn btn-light mx-3">Vehicles</button>
				</Link>
				<Link to="/planetas">
					<button className="btn btn-light mx-3">Planets</button>
				</Link>
			</div>
		</nav>
	);
};
