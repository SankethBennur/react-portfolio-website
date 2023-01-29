import React from "react";
import { Grid } from "@mui/material";
import "./ResumeSectionPair.css";
import SectionSm from "./SectionSm";

function ResumeSectionPair({ sectionPairs }) {
	return (
		<Grid item>
			<Grid container>
				<SectionSm heading={sectionPairs[0]}></SectionSm>
				<SectionSm heading={sectionPairs[1]}></SectionSm>
			</Grid>
		</Grid>
	);
}

export default ResumeSectionPair;
