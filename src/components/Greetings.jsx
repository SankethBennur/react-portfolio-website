import React from "react";
import { Grid } from "@mui/material";
import "./Greetings.css";

function Greetings() {
	return (
		<Grid id="greetings" sx={{ border: 1 }}>
			<h1 style={{ color: "lightGreen" }}>Greetings!</h1>
			<p>I am Sanketh Bennur</p>
		</Grid>
	);
}

export default Greetings;
