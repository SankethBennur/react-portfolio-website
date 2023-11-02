import React from "react";
import { Box } from "@mui/material";
import myPhoto from "../../assets/images/me.jpg";

function PortfolioPicture() {
	return (
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
					borderRadius: "5%",
				}}
			/>
		</Box>
	);
}

export default PortfolioPicture;
