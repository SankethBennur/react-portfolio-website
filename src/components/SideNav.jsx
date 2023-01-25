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
						width: "25vw",
						// backgroundColor: "rgba(0,0,0, 0)",
					},
				}}
				open
			>
				<div>
					{/* <Box
						component="img"
						sx={{ objectFit: "contain" }}
						alt="Sanketh Bennur"
						src={myPhoto}
					/> */}
					<Box
						component="img"
						src={myPhoto}
						alt={"post"}
						width="100%"
						// height="50%"
						position="relative"
						display="flex"
						zIndex={0}
						sx={{ objectFit: "contain" }}
					/>
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
				</div>
			</Drawer>
		</Grid>
	);
}

export default SideNav;
