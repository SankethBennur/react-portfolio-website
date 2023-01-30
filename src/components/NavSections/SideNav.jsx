import React from "react";
import { Grid } from "@mui/material";
import "./SideNav.css";

import PortfolioPicture from "./PortfolioPicture";
import NavBox from "./NavBox";
import ContactFooter from "./ContactFooter";

function SideNav() {
	return (
		<Grid
			xs={12}
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<PortfolioPicture />

			<NavBox />

			<ContactFooter />
		</Grid>
	);
}

export default SideNav;
