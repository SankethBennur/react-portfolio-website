import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./SideNav.css";
import myPhoto from "../assets/images/me.jpg";

function SideNav() {
    return (
        <Grid sx={{ border: 1 }}>
            <Box
                component="img"
                sx={{ height: "50%", width: "50%" }}
                alt="Sanketh Bennur"
                src={myPhoto}
            />
            <Grid>
                <p>loc_1</p>
                <p>loc_2</p>
                <p>loc_3</p>
                <p>loc_4</p>
                <p>loc_5</p>
            </Grid>
        </Grid>
    );
}

export default SideNav;
