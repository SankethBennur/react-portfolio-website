import React from "react";
import { Grid } from "@mui/material";
import "./ResumeSection.css";

function ResumeSection({ section }) {
	let content = [];

	// API call based on section - Work Experience
	if (section === "Work Experience") {
		content.push({
			title: "Kasmo Inc",
			links: [
				{
					text: "Company",
					url: "https://kasmo.co/",
				},
			],
			subHeading: {
				text: "Associate Software Engineer",
				date: "Jul 2023 - Present",
			},
			desc: [
				"Working on applications deployed on Heroku and integrated with Salesforce.",
				"Building applications with NodeJs, Express frameworks for backend and ReactJS for frontend of an application.",
				"Designing APIs and database entities with PostgresDB and Salesforce Objects.",
				"Utilized Salesforce Workflow Rules and Outbound Messages to automate various operations.",
			],
		});
		content.push({
			title: "Quickmetrix",
			links: [
				{
					text: "Company",
					url: "https://www.linkedin.com/company/quickmetrix/",
				},
			],
			subHeading: {
				text: "Software Engineer - Full Stack Developer",
				date: "Jan 2022 - Jun 2023",
			},
			desc: [
				"Quickmetrix is a web application that helps businesses in empowering their brands through Social Media Response Management and Brand Measurement.",
				"Worked with Python and Tornado Framework on the server-side and with ReactJS on the client-side on various systems of the application.",
				"Built Application Systems for cron job scheduling using Google Cloud Scheduler, sending and receiving mails for Gmail users using Gmail API, fetching Instagram Insights for client Business IDs using Facebook Graph API and many others.",
			],
		});
		content.push({
			title: "RSutra Analytics and Consulting",
			links: [
				{
					text: "Company",
					url: "https://www.linkedin.com/company/racpl/",
				},
			],
			subHeading: {
				text: "Robotic Process Automation Developer",
				date: "Jan 2020 - Jun 2020",
			},
			desc: [
				"Worked in a Mumbai-based startup company which facilitates IT and Business Intelligence to various clients.",
				"Trained on Robotic Process Automation in UiPath Studio to automate business procedures and tasks.",
				"Developed a robotic process in UiPath for Web-Scraping to extract Currency Exchange Rates from xe.com website and populate an Excel Spreadsheet with the currencies, and to perform Email-Automation.",
			],
		});
	}

	// API call based on section - Work Experience
	if (section === "Projects") {
		content.push({
			title: "Netflix",
			links: [
				{ text: "Demo", url: "https://netflix-e40b5.web.app/" },
				{
					text: "Link",
					url: "https://github.com/sankethbennur/netflix",
				},
			],
			subHeading: {
				text: "Technologies: MongoDB, Express, React, Node.js, JSON Web Tokens",
			},
			desc: [
				"Netflix Clone Web Application using RESTful APIs built on MERN Stack. 1",
				"Backend involved utilizing JWT Tokens to perform User- Authentication.",
				"Password Encryption is performed using Crypto-js Library.",
				"Frontend involved using functional components in React",
				"performed dynamic routing in the web application.",
			],
		});

		content.push({
			title: "Web Scraper with Node.js",
			links: [
				{
					text: "Link",
					url: "https://github.com/sankethbennur/nodejs-crawler",
				},
			],
			subHeading: {
				text: "Technologies: Node.js, Express, MongoDB, Cheerio, JSON",
			},
			desc: [
				"Performed Web-Scraping and HTML Parsing with Cheerio, built using Node.js.",
				"Crawled recursively through pages contained in Pagination of stackoverflow/questions webpage.",
				"Fetched individual elements as JSON objects and pushed into a CSV file and MongoDB Database.",
			],
		});

		content.push({
			title: "Google and EY - BrightNetwork Internship Experience UK",
			links: [
				{
					text: "Link",
					url: "https://www.brightnetwork.co.uk/certificates/internship-experience-uk-techn_p5ryyqu7j3v6ed/",
				},
			],
			subHeading: {
				text: "Technologies: Python, Node.js, Express",
			},
			desc: [
				"Took part in Internship Experience UK and worked on assignments from Google and EY in the frenetic 3 day event.",
				"Developed a YouTube CLI as part of the Google Assignment using Python to send requests and receive responses from a locally hosted server built using Express and Node.js.",
				"Demonstrated the use of Technology in Banking as part of the EY consulting assignment.",
			],
		});
	}

	const __id = section.split(" ").join("_").toLowerCase();

	return (
		<Grid id={__id}>
			<h2>{section}</h2>
			{content.map((c) => {
				return (
					<Grid>
						<Grid
							container
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<h3
								style={{
									marginTop: "10px",
									marginBottom: "8px",
								}}
							>
								{c.title}
							</h3>

							{c.links.map((__link) => {
								return (
									<div>
										&nbsp; &nbsp;
										<a
											href={__link.url}
											target="_blank"
											rel="noopener noreferrer"
										>
											{__link.text}
										</a>
									</div>
								);
							})}
						</Grid>

						<p style={{ margin: "0px" }}>
							<i>
								{c.subHeading.text}
							</i>
							{(section === "Work Experience")
								? <>
									&nbsp;|&nbsp;
									<i>
										{c.subHeading.date}
									</i>
								</>
								: <></>
							}
						</p>

						<ul style={{ margin: "3px" }}>
							{c.desc.map((__desc) => {
								return <li>{__desc}</li>;
							})}
						</ul>
						<br />
					</Grid>
				);
			})}
		</Grid>
	);
}

export default ResumeSection;
