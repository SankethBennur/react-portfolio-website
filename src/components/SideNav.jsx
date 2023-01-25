import React from "react";
import { Drawer, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { HashLink } from "react-router-hash-link";
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
						<HashLink to="#greetings">Back to Top</HashLink>
					</h3>
					<h3>
						<HashLink to="#work_experience">
							Work Experience
						</HashLink>
					</h3>
					<h3>
						<HashLink to="#projects">Projects</HashLink>
					</h3>
				</Grid>
				<Grid>
					<h3>Connect with me</h3>
					<p>Phone:&nbsp;+91 9876 543 210</p>
					<p>Email:&nbsp;xyz@gmail.com</p>
					<p>
						Github:&nbsp;
						<a
							href={"https://github.com/sankethbennur"}
							target="_blank"
							rel="noopener noreferrer"
						>
							github.com/sankethbennur
						</a>
					</p>
				</Grid>
			</Drawer>
		</Grid>
	);
}

export default SideNav;
