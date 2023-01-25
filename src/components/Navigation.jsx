import React from "react";
import { Grid } from "@mui/material";
import SideNav from "./SideNav";

function Navigation() {
	return (
		<Grid item xs={4}>
			<SideNav />
		</Grid>
	);
}

export default Navigation;
