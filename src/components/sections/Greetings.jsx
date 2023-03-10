import React from "react";
import { Grid } from "@mui/material";
import "./Greetings.css";

function Greetings() {
	return (
		<Grid container id="greetings" sx={{ my: 3 }}>
			<Grid
				item
				xs={12}
				sm={6}
				md={6}
				sx={{
					display: "flex",
					flexDirection: "column",
					// alignItems: "flex-end",
					alignItems: {
						xs: "center",
						sm: "flex-end",
						md: "flex-end",
					},
					justifyContent: "auto",
					pr: 3,
				}}
			>
				{/* <h1 style={{ color: "lightGreen", alignSelf: "flex-end" }}> */}
				<h1
					style={{
						color: "lightGreen",
						// alignSelf: {
						// 	xs: "flex-start",
						// 	sm: "flex-end",
						// 	md: "flex-end",
						// },
					}}
				>
					Greetings!
				</h1>
				<p>I am Sanketh Bennur</p>
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				md={6}
				sx={{
					pl: 3,
					pt: 5,
					display: "flex",
					flexDirection: "column",
					margin: "auto",
				}}
			>
				<div> {">"}&nbsp; Technology enthusiast</div>
				<div> {">"}&nbsp; Enjoy great stories and art</div>
				<div> {">"}&nbsp; Love adventures and outdoors</div>
			</Grid>
		</Grid>
	);
}

export default Greetings;
