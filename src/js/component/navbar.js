import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import starsWarsImage from "../../img/stars-wars-title.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const listFavorites =
		store.favoritesList &&
		store.favoritesList.map((item, index) => {
			return (
				<li className="lidropdown" key={index}>
					{item}
					<span>
						<a
							className="dropdown-item"
							onClick={() => {
								actions.setEliminarFavoritos(item);
							}}>
							<i className="far fa-trash-alt" />
						</a>
					</span>
				</li>
			);
		});

	return (
		<div className="container">
			<nav className="navbar navbar-dark bg-dark mb-3 px-1 justify-content-between">
				<div className="col-3">
					<Link to="/">
						<img className="logosw w-75 ms-3" src={starsWarsImage} />
					</Link>
				</div>
				<div className="col-6">
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
							className="btn btn-warning dropdown-toggle mx-3"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favorites {store.favoritesList.length > 0 && store.favoritesList.length}
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{listFavorites && listFavorites}
						</ul>
					</Link>
				</div>
			</nav>
		</div>
	);
};
