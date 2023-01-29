import React from "react";
import { Grid, Divider } from "@mui/material";
import Greetings from "./sections/Greetings";
import ResumeSection from "./sections/ResumeSection";
import ResumeSectionPair from "./sections/ResumeSectionPair";

function Contents() {
	return (
		<Grid item xs={8} sx={{ pr: 5 }}>
			<Greetings />
			<Divider sx={{ width: "100%", bgcolor: "white" }} />

			<ResumeSection section={"Work Experience"} />
			<Divider sx={{ width: "100%", bgcolor: "white" }} />

			<ResumeSection section={"Projects"} />
			<Divider sx={{ width: "100%", bgcolor: "white" }} />

			<ResumeSectionPair sectionPairs={["Education", "Certifications"]} />
			<Divider sx={{ width: "100%", bgcolor: "white" }} />

			<ResumeSectionPair sectionPairs={["Skills", "Hobbies"]} />
		</Grid>
	);
}

export default Contents;
