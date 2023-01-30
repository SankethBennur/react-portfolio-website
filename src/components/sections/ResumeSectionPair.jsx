import React from "react";
import { Divider, Grid } from "@mui/material";
import "./ResumeSectionPair.css";
import SectionSm from "./SectionSm";

function ResumeSectionPair({ sectionPairs }) {
	return (
		<Grid item>
			<Grid container>
				<SectionSm heading={sectionPairs[0]}></SectionSm>
				<Divider
					sx={{
						width: "100%",
						bgcolor: "white",
						display: { xs: "block", sm: "none", md: "none" },
					}}
				/>
				<SectionSm heading={sectionPairs[1]}></SectionSm>
			</Grid>
		</Grid>
	);
}

export default ResumeSectionPair;
