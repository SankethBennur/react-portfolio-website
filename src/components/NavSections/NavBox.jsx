import React from "react";
import { Grid } from "@mui/material";
import { HashLink } from "react-router-hash-link";

function NavBox() {
	return (
		<Grid xs={12} sx={{ my: 3 }}>
			<ul>
				<b>
					<li>
						<HashLink to="#greetings" style={{ paddingLeft: 25 }}>
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
						<HashLink to="#projects" style={{ paddingLeft: 25 }}>
							Projects
						</HashLink>
					</li>
					<li>
						<HashLink to="#education" style={{ paddingLeft: 25 }}>
							Education
						</HashLink>
					</li>
					<li>
						<HashLink
							to="#certifications"
							style={{ paddingLeft: 25 }}
						>
							Certifications
						</HashLink>
					</li>
					<li>
						<HashLink to="#skills" style={{ paddingLeft: 25 }}>
							Skills
						</HashLink>
					</li>
					<li>
						<HashLink to="#hobbies" style={{ paddingLeft: 25 }}>
							Hobbies
						</HashLink>
					</li>
				</b>
			</ul>
		</Grid>
	);
}

export default NavBox;
