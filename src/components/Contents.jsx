import React from "react";
import { Grid } from "@mui/material";
import Greetings from "./sections/Greetings";
import ResumeSection from "./sections/ResumeSection";

function Contents() {
	return (
		<Grid item xs={8} sx={{ pl: 3 }}>
			<Greetings />

			<ResumeSection section={"Work Experience"} />

			<ResumeSection section={"Projects"} />
		</Grid>
	);
}

export default Contents;
