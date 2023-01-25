import { Drawer, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./SideNav.css";
import myPhoto from "../assets/images/me.jpg";

function SideNav() {
	return (
		<Grid
			sx={{
				border: 1,
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
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: "33vw",
						backgroundColor: "rgba(0,0,0, 0)",
						color: "rgba(180,180,180,1)",
					},
				}}
				open
			>
				<>
					<Box sx={{ p: 10 }}>
						<Box
							component="img"
							src={myPhoto}
							alt={"post"}
							width="100%"
							position="relative"
							display="flex"
							zIndex={0}
							sx={{ objectFit: "contain" }}
						/>
					</Box>
					<Grid>
						<p>loc_1</p>
						<p>loc_2</p>
						<p>loc_3</p>
						<p>loc_4</p>
						<p>loc_5</p>
						<p>loc_1</p>
						<p>loc_2</p>
						<p>loc_3</p>
						<p>loc_4</p>
						<p>loc_5</p>
						<p>=====</p>
						<p>loc_1</p>
						<p>loc_2</p>
						<p>loc_3</p>
						<p>loc_4</p>
						<p>loc_5</p>
						<p>loc_1</p>
						<p>loc_2</p>
						<p>loc_3</p>
						<p>loc_4</p>
						<p>loc_5</p>
						<p>=====</p>
						<p>loc_1</p>
						<p>loc_2</p>
						<p>loc_3</p>
						<p>loc_4</p>
						<p>loc_5</p>
						<p>loc_1</p>
						<p>loc_2</p>
						<p>loc_3</p>
						<p>loc_4</p>
						<p>loc_5</p>
					</Grid>
				</>
			</Drawer>
		</Grid>
	);
}

export default SideNav;
