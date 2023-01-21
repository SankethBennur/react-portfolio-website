import React from "react";
import { Grid } from "@mui/material";
import SideNav from "./SideNav";

function Navigation() {
    return (
        <Grid xs={4} sx={{ border: 2, borderColor: "white" }}>
            <h2 style={{ color: "turquoise" }}>Navigation</h2>
            <SideNav />
        </Grid>
    );
}

export default Navigation;
