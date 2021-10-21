import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="logosw w-125"
						// src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg"
						src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
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
				<Link className="dropdown">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites {store.favoritesList.length}
					</button>
					<ul className="dropdown-menu  dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
						{store.favoritesList.map((item, index) => {
							return (
								<li
									key={index}
									className="list-group-item list-group-item-action d-flex justify-content-between">
									{item}
									<span>
										<a>
											<i
												onClick={() => {
													actions.setEliminarFavoritos(item);
												}}
												className="far fa-trash-alt"
											/>
										</a>
									</span>
								</li>
							);
						})}
					</ul>
				</Link>
			</div>
		</nav>
	);
};
