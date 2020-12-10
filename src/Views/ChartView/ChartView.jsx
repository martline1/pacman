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

				<p className="algDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur quibusdam id error animi, sit vero illum reprehenderit nobis! Libero a expedita voluptas, illum perspiciatis molestias porro mollitia! Amet eaque nemo facere similique eos est, eligendi corrupti sed cum dolorum! Atque ex quos sequi, esse vel obcaecati officia molestias hic!</p>
			</div>

			<div className="card">
				
				<div className="graph">
					<div className="imageContainer">
						<img src={GrafoImg} alt="Grafo" />
					</div>

					<div className="tableContainer">
						<table>
							<tbody>
								<tr>
									<th>Vértice</th>
									<th>Min. Distancia a A</th>
									<th>Vértice Previo</th>
								</tr>
								<tr>
									<td>a</td>
									<td>a</td>
									<td>a</td>
								</tr>
								<tr>
									<td>a</td>
									<td>a</td>
									<td>a</td>
								</tr>
								<tr>
									<td>a</td>
									<td>a</td>
									<td>a</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartView;
