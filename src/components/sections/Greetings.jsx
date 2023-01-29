import React from "react";
import { Grid } from "@mui/material";
import "./Greetings.css";

function Greetings() {
	return (
		<Grid container id="greetings">
			<Grid
				item
				xs={5}
				sx={{
					px: 5,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-end",
					justifyContent: "auto",
					// marginTop: "auto",
				}}
			>
				<h1 style={{ color: "lightGreen" }}>Greetings!</h1>
				<p>I am Sanketh Bennur</p>
			</Grid>
			<Grid
				item
				xs={7}
				sx={{
					borderLeft: 2,
					pl: 3,
					display: "flex",
					flexDirection: "column",
					// alignItems: "center",
					margin: "auto",
				}}
			>
				<div>Technology enthusiast</div>
				<div>Enjoy great stories and Art</div>
				<div>Love Adventures and Outdoors</div>
			</Grid>
		</Grid>
	);
}

export default Greetings;
