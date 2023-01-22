import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./Projects.css";

function Projects() {
	const content = [];

	content.push({
		title: "Netflix Clone",
		links: { text: "Demo", url: "www.google.com" },
		tech: ["MongoDB", "Express", "React", "Node.js"],
		desc: ["desc line 1", "desc line 2", "desc line 3", "desc line 4"],
	});
	content.push({
		title: "Web Scraper with Node.js",
		links: { text: "Link", url: "www.google.com" },
		tech: ["MongoDB", "Express", "React", "Node.js"],
		desc: ["desc line 1", "desc line 2", "desc line 3", "desc line 4"],
	});
	content.push({
		title: "Google and EY - BrightNetwork Internship Experience UK",
		links: { text: "Certificate", url: "www.google.com" },
		tech: ["Python", "Node.js", "Express"],
		desc: ["desc line 1", "desc line 2", "desc line 3", "desc line 4"],
	});

	const contentRender = content.map((__content) => {
		<>
			<h3>{__content.title}</h3>;
			<i>
				<p>{__content.tech.join(", ")}</p>;
			</i>
			{/* __content.desc.map((__desc) => {<p>{__desc}</p>}); */}
		</>;
		// console.log(__content.title);
		// console.log(__content.links);
		// console.log(__content.tech);
		// console.log(__content.desc);
	});

	return <Grid>{contentRender}</Grid>;
}

export default Projects;
