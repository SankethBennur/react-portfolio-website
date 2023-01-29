import React from "react";
import { Grid } from "@mui/material";
import "./SectionSm.css";

function SectionSm({ heading }) {
	let content = [];

	// API Call to get information about Education or Certifications or Skills or Hobbies
	switch (heading) {
		case "Education":
			content.push({
				__title: "Royal Holloway University of London",
				__desc: [
					"SEPT, 2020 - SEPT, 2022",
					"Master of Science",
					"Data Science and Analytics",
				],
				__styling: "no_bullets",
			});
			content.push({
				__title: "Dayananda Sagar Academy of Technology",
				__desc: [
					"AUG, 2015 - AUG, 2019",
					"Bachelor of Engineering",
					"Computer Science & Engineering",
					"CGPA: 7.49/10",
					"Degree: First Class",
				],
				__styling: "no_bullets",
			});
			break;

		case "Certifications":
			content.push({});
			content.push({});
			content.push({});
			break;
		case "Skills":
			content.push({});
			content.push({});
			content.push({});
			break;
		case "Hobbies":
			content.push({
				__desc: [
					"Cycling",
					"Basketball",
					"Video Games",
					"Sketching",
					"Photography",
				],
				__styling: "bullets",
			});
			break;
		default:
			break;
	}

	let addContent = function (__style, __desc) {
		if (__desc && __desc.length > 0)
			switch (__style) {
				case "inline":
					return <div>{__desc.join(" | ")}</div>;
				case "no_bullets":
					return (
						<div>
							{__desc.map((point) => (
								<div>{point}</div>
							))}
						</div>
					);
				case "bullets":
					return (
						<ul>
							{__desc.map((point) => (
								<li>{point}</li>
							))}
						</ul>
					);
				default:
					return <></>;
			}
	};

	return (
		<Grid xs={6}>
			<h2>{heading}</h2>
			{content.map((elem) => {
				return (
					<Grid xs={10}>
						{elem.__title ? <h3>{elem.__title}</h3> : <></>}
						{addContent(elem.__styling, elem.__desc)}
					</Grid>
				);
			})}
		</Grid>
	);
}

export default SectionSm;
