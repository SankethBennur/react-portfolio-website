import React from "react";
import { Grid } from "@mui/material";

function ContactFooter() {
	return (
		<Grid sx={{ lineHeight: "15px", my: 5 }}>
			{/* Hardcoded: */}
			<h3>Connect with me</h3>
			<p>Phone:&nbsp;+91 6362 010 530</p>
			{/* <p>Email:&nbsp;sankethbennur@gmail.com</p> */}
			<p>
				Email:&nbsp;
				<a
					href={"mailto:sankethbennur@gmail.com"}
					target="_blank"
					rel="noopener noreferrer">
					sankethbennur@gmail.com
				</a>
			</p>
			<p>
				Github:&nbsp;
				<a
					href={"https://github.com/sankethbennur"}
					target="_blank"
					rel="noopener noreferrer">
					github.com/sankethbennur
				</a>
			</p>
			<p>
				Instagram:&nbsp;
				<a
					href={"https://www.instagram.com/_lateralus_/"}
					target="_blank"
					rel="noopener noreferrer">
					@_lateralus_
				</a>
			</p>
		</Grid>
	);
}

export default ContactFooter;
