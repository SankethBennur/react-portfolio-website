import React from "react";
import { Grid } from "@mui/material";
import SideNav from "./SideNav";

function Navigation() {
	return (
		<Grid item xs={3} sx={{ border: 2, borderColor: "white" }}>
			<SideNav />
		</Grid>
	);
}

export default Navigation;
