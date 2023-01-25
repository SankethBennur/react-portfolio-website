import React from "react";
import { Grid } from "@mui/material";
import Greetings from "./Greetings";
import ResumeSection from "./ResumeSection";

function Contents() {
	return (
		<Grid item xs={8}>
			<Greetings id="greetings" />

			<ResumeSection id="work_experience" section={"Work Experience"} />

			<ResumeSection id="projects" section={"Projects"} />
		</Grid>
	);
}

export default Contents;
