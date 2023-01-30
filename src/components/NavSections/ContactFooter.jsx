import React from "react";
import { Grid } from "@mui/material";

function ContactFooter() {
	return (
		<Grid sx={{ lineHeight: "15px", my: 5 }}>
			{/* Hardcoded: */}
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
			<p>
				Instagram:&nbsp;
				<a
					href={"https://www.instagram.com/_lateralus_/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					@_lateralus_
				</a>
			</p>
			<p>
				Linkedin:&nbsp;
				<a
					href={"https://www.linkedin.com/in/sbennur"}
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedin.com/in/sbennur
				</a>
			</p>
		</Grid>
	);
}

export default ContactFooter;
