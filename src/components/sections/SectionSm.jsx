import React from "react";
import { Grid, Box } from "@mui/material";
import "./SectionSm.css";

import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

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
			content.push({
				__title: "AWS Certified Cloud Practitioner",
				__link: "https://www.credly.com/badges/a589778e-89a4-4a5e-8b71-c48d6bcfb5c0/public_url",
				__styling: "no_bullets",
			});
			content.push({
				__title: "Microsoft DAT203.2x Machine Learning",
				__link: "https://courses.edx.org/certificates/9efd776a4d6d4355af7630514aac77ff",
				__styling: "no_bullets",
			});
			content.push({
				__title: "Data Science and ML Bootcamp",
				__link: "https://www.udemy.com/certificate/UC-92e2692a-0f60-4853-9554-c61d3befd924/",
				__styling: "no_bullets",
			});
			break;

		case "Skills":
			content.push({
				__title: "Programming",
				__desc: [
					"Python",
					"JavaScript",
					"C#",
					"Java",
					"R",
					"C++",
					"BASH",
					"Git",
					"SQL",
					"Elixir",
					"HTML5",
					"CSS3",
				],
				__styling: "inline",
			});
			content.push({
				__title: "Tools and Technologies",
				__desc: [
					"AWS ELB",
					"AWS EC2",
					"MongoDB",
					"Express",
					"React",
					"Node.js",
					"Tornado",
					"JQuery",
				],
				__styling: "inline",
			});
			content.push({
				__title: "Soft Skills",
				__desc: [
					"Active Listening",
					"Creativity",
					"Root-Cause Problem Analysis",
					"Dedicated",
					"Detail-Oriented",
				],
				__styling: "inline",
			});
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
				__styling: "no_bullets",
			});
			break;

		default:
			break;
	}

	let addIcon = function (__key) {
		switch (__key.split(" ").join("").toLowerCase()) {
			case "cycling":
				return <DirectionsBikeIcon fontSize="large" sx={{ py: 2 }} />;
			case "basketball":
				return <SportsBasketballIcon fontSize="large" sx={{ py: 2 }} />;
			case "videogames":
				return <SportsEsportsIcon fontSize="large" sx={{ py: 2 }} />;
			case "sketching":
				return <BorderColorIcon fontSize="large" sx={{ py: 2 }} />;
			case "photography":
				return <CameraAltIcon fontSize="large" sx={{ py: 2 }} />;
			default:
				return <></>;
		}
	};

	let addContent = function (__style, __desc, __include_icons) {
		// Hardcoded hobbies icons part
		if (__desc)
			switch (__style) {
				case "inline":
					return <div>{__desc.join(" | ")}</div>;
				case "no_bullets":
					return (
						<div>
							{__desc.map((point) => (
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									{__include_icons ? addIcon(point) : <></>}
									&nbsp; &nbsp;
									{point}
								</div>
							))}
						</div>
					);
				case "bullets":
					return (
						<ul>
							{__desc.map((point) => (
								<li
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									{__include_icons ? addIcon(point) : <></>}
									&nbsp; &nbsp;
									{point}
								</li>
							))}
						</ul>
					);
				default:
					return <></>;
			}
	};

	return (
		<Grid id={heading ? heading.toLowerCase() : null} xs={6}>
			<h2>{heading}</h2>
			{content.map((elem) => {
				return (
					<Grid xs={10}>
						{elem.__title ? <b>{elem.__title}</b> : <></>}
						{addContent(elem.__styling, elem.__desc, () => {
							return elem.__title === "Hobbies";
						})}
						{/* Hardcoded hobbies icons part */}
						<div>
							{elem.__link ? (
								<a
									href={elem.__link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i>Certificate Link</i>
								</a>
							) : (
								<></>
							)}
						</div>
						<br />
					</Grid>
				);
			})}
		</Grid>
	);
}

export default SectionSm;
