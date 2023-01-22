import React from "react";
import { Grid } from "@mui/material";
import Greetings from "./Greetings";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";

function Contents() {
	return (
		<Grid xs={8} sx={{ border: 2, borderColor: "white" }}>
			<h2 style={{ color: "turquoise" }}>__Content__</h2>
			<Greetings />
			<WorkExperience />
			<Projects />
		</Grid>
	);
}

export default Contents;
