import React from "react";
import { Grid } from "@mui/material";
import Greetings from "./Greetings";
import ResumeSection from "./ResumeSection";

function Contents() {
	return (
		<Grid item xs={8} sx={{ border: 2, borderColor: "white" }}>
			<Greetings />

			<ResumeSection section={"Work Experience"} />

			<ResumeSection section={"Projects"} />
		</Grid>
	);
}

export default Contents;
