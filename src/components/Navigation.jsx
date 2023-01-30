import React from "react";
import { Grid, Drawer } from "@mui/material";
import SideNav from "./NavSections/SideNav";

function Navigation() {
	return (
		// <Grid item xs={4}>
		<Grid item xs={12} sm={4} md={4}>
			<Grid
				sx={{
					display: "flex",
					flexDirection: "column",
					overflowY: "auto",
					maxHeight: "100vh",
					color: "rgba(0, 0, 0, 1)",
				}}
			>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block", md: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: "33%",
							backgroundColor: "rgba(0,0,0, 0)",
							color: "rgba(255,255,255,1)",
							border: 0,
							px: 5,
						},
					}}
					open
				>
					<SideNav />
				</Drawer>
			</Grid>
		</Grid>
	);
}

export default Navigation;
