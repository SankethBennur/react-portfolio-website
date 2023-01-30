import React from "react";
import { Grid, Divider } from "@mui/material";

import Greetings from "./sections/Greetings";
import ResumeSection from "./sections/ResumeSection";
import ResumeSectionPair from "./sections/ResumeSectionPair";

import PortfolioPicture from "./NavSections/PortfolioPicture";
import NavBox from "./NavSections/NavBox";
import ContactFooter from "./NavSections/ContactFooter";

function Contents() {
	return (
		// <Grid item sm={12} md={8} xs={8} sx={{ px: 4 }}>
		<Grid item xs={12} sm={8} md={8} sx={{ px: 4 }}>
			{/* Portfolio Picture */}
			<Grid sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
				<PortfolioPicture />
				<Divider sx={{ width: "100%", bgcolor: "white" }} />
			</Grid>

			<Greetings />
			<Divider sx={{ width: "100%", bgcolor: "white" }} />

			{/* Navigation Box */}
			<Grid sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
				<NavBox />
				<Divider sx={{ width: "100%", bgcolor: "white" }} />
			</Grid>

			<ResumeSection section={"Work Experience"} />
			<Divider sx={{ width: "100%", bgcolor: "white" }} />

			<ResumeSection section={"Projects"} />
			<Divider sx={{ width: "100%", bgcolor: "white" }} />

			<ResumeSectionPair sectionPairs={["Education", "Certifications"]} />
			<Divider sx={{ width: "100%", bgcolor: "white" }} />

			<ResumeSectionPair sectionPairs={["Skills", "Hobbies"]} />

			<Grid sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
				<Divider sx={{ width: "100%", bgcolor: "white" }} />
				<ContactFooter />
			</Grid>
		</Grid>
	);
}

export default Contents;
