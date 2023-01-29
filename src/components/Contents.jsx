import React from "react";
import { Grid } from "@mui/material";
import Greetings from "./sections/Greetings";
import ResumeSection from "./sections/ResumeSection";
import ResumeSectionPair from "./sections/ResumeSectionPair";

function Contents() {
	return (
		// <Grid item xs={8} sx={{ pl: 3 }}>
		<Grid item xs={8}>
			<Greetings />

			<ResumeSection section={"Work Experience"} />

			<ResumeSection section={"Projects"} />

			<ResumeSectionPair sectionPairs={["Education", "Certifications"]} />

			<ResumeSectionPair sectionPairs={["Skills", "Hobbies"]} />
		</Grid>
	);
}

export default Contents;
