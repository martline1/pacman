import React from "react";

import {
	Button,
} from "@material-ui/core";

// Import Own Components
import GrafoImg          from "~/Resources/grafo.png";
import AngleLeft         from "~/Resources/icons/AngleLeft.svg";
import { useRedirectTo } from "~/Util/Hooks";
import useStyles         from "./styles";

const ChartView = () => {
	const classes    = useStyles();
	const redirectTo = useRedirectTo();

	return (
		<div className={classes.root}>
			<div className="backBtnContainer">
				<Button onClick={redirectTo("/")}>
					<img src={AngleLeft} alt="Back" />
					<span className="text">
						Volver al inicio
					</span>
				</Button>		
			</div>

			<div className="algContainer">
				<div className="titleContainer">
					<h2>Algoritmo de Dijkstra</h2>
				</div>

				<p className="algDescription">
					El algoritmo de Dijkstra, también llamado algoritmo de caminos mínimos, es un algoritmo para la determinación del camino más corto, dado un vértice origen, hacia el resto de los vértices en un grafo que tiene pesos en cada arista. Su nombre alude a Edsger Dijkstra, científico de la computación de los Países Bajos que lo concibió en 1956 y lo publicó por primera vez en 1959.
				</p>
			</div>

			<div className="card">
				
				<div className="graph">
					<div className="imageContainer">
						<img src={GrafoImg} alt="Grafo" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartView;
