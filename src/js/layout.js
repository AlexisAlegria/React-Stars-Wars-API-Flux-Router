import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Demo } from "./views/demo";
import { Single } from "./views/single";

import { Home } from "./views/home";
import { Personajes } from "./views/personajes";
import { Detpersonajes } from "./views/detpersonajes";
import { Vehiculos } from "./views/vehiculos";
import { Detvehiculos } from "./views/detvehiculos";
import { Planetas } from "./views/planetas";
import { Detplanetas } from "./views/detplanetas";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						<Route exact path="/people/:id">
							<Detpersonajes />
						</Route>
						<Route exact path="/vehiculos">
							<Vehiculos />
						</Route>
						<Route exact path="/vehicles/:id">
							<Detvehiculos />
						</Route>
						<Route exact path="/planetas">
							<Planetas />
						</Route>
						<Route exact path="/planets/:id">
							<Detplanetas />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
