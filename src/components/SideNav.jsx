import React from "react";
import { Drawer, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { HashLink } from "react-router-hash-link";
import "./SideNav.css";
import myPhoto from "../assets/images/me.jpg";
// import myPhoto from "../assets/images/db.jpg";

function SideNav() {
	return (
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
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: "33%",
						backgroundColor: "rgba(0,0,0, 0)",
						color: "rgba(255,255,255,1)",
						border: 0,
						px: 10,
					},
				}}
				open
			>
				<Box
					sx={{
						my: 3,
						py: 9,
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Box
						component="img"
						src={myPhoto}
						alt={"post"}
						width="67%"
						position="relative"
						display="flex"
						zIndex={100}
						sx={{
							objectFit: "contain",
							boxShadow: "0 0 100px rgba(0, 255, 210, 1)",
							borderRadius: "100%",
						}}
					/>
				</Box>
				<Grid xs={12} sx={{ my: 3 }}>
					<ul>
						<b>
							<li>
								<HashLink
									to="#greetings"
									style={{ paddingLeft: 25 }}
								>
									Back to Top
								</HashLink>
							</li>
							<li>
								<HashLink
									to="#work_experience"
									style={{ paddingLeft: 25 }}
								>
									Work Experience
								</HashLink>
							</li>
							<li>
								<HashLink
									to="#projects"
									style={{ paddingLeft: 25 }}
								>
									Projects
								</HashLink>
							</li>
						</b>
					</ul>
				</Grid>
				<Grid sx={{ lineHeight: "15px" }}>
					<h3>Connect with me</h3>
					<p>Phone:&nbsp;+91 6362 010 530</p>
					<p>Email:&nbsp;sankethbennur@gmail.com</p>
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
