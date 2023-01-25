import { Drawer, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./SideNav.css";
// import myPhoto from "../assets/images/me.jpg";
import myPhoto from "../assets/images/db.jpg";

function SideNav() {
	return (
		<Grid
			sx={{
				// border: 1,
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
					<Box
						sx={{
							py: 10,
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Box
							component="img"
							src={myPhoto}
							alt={"post"}
							width="50%"
							position="relative"
							display="flex"
							zIndex={0}
							sx={{ objectFit: "contain" }}
						/>
					</Box>
					<Grid>
						<h3>
							<a href="#greetings">Back to Top</a>
						</h3>
						<h3>
							<a href="#work_experience">Work Experience</a>
						</h3>
						<h3>
							<a href="#projects">Projects</a>
						</h3>
					</Grid>
				</>
			</Drawer>
		</Grid>
	);
}

export default SideNav;
