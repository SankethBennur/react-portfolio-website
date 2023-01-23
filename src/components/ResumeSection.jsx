import React from "react";
import { Grid } from "@mui/material";
import "./ResumeSection.css";

function ResumeSection({ section }) {
	let content = [];

	// API call based on section - Work Experience
	if (section === "Work Experience")
		content.push({
			title: "Quickmetrix",
			links: [{ text: "Company", url: "www.google.com" }],
			subHeading: {
				text: "Software Engineer - Full Stack Developer",
				date: "Jan 2022 - Present",
			},
			desc: [
				"Quickmetrix is a web application that helps businesses in empowering their brands through Social Media Response Management and Brand Measurement.",
				"Worked with Python and Tornado Framework on the server-side and with vanilla Javascript on the client-side on various systems of the application.",
				"Overhauled the Application Dashboard using React to aid clients in Brand Performance, User Engagement, Competition Benchmarking etc.",
				"Built Application Systems for cron job scheduling using Google Cloud Scheduler, sending and receiving mails for Gmail users using Gmail API, fetching Instagram Insights for client Business IDs using Facebook Graph API and many others.",
			],
		});

	// API call based on section - Work Experience
	if (section === "Projects") {
		content.push({
			title: "Netflix",
			links: [
				{ text: "Demo", url: "www.google.com" },
				{ text: "Link", url: "www.google.com" },
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
			links: [{ text: "Link", url: "www.google.com" }],
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
			links: [{ text: "Link", url: "www.google.com" }],
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

	// console.log(section);
	// console.log(content);

	return (
		<Grid sx={{ border: 1 }}>
			<h2>{section}</h2>
			{content.map((c) => {
				return (
					<Grid>
						<Grid container>
							<h3 style={{ marginTop: 0, marginBottom: 0 }}>
								{c.title}
							</h3>

							{c.links.map((__link) => {
								return (
									<>
										&nbsp;
										<a
											href="https://www.google.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											{__link.text}
										</a>
									</>
								);
							})}
						</Grid>

						<i>
							<p>{c.subHeading.text}</p>
						</i>

						{c.desc.map((__desc) => {
							return <p>&nbsp; - {__desc}</p>;
						})}
					</Grid>
				);
			})}
		</Grid>
	);
}

export default ResumeSection;
