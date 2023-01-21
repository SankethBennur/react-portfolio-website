import React from "react";
import { Grid } from "@mui/material";
import Greetings from "./Greetings";

function Contents() {
    return (
        <Grid xs={8} sx={{ border: 2, borderColor: "white" }}>
            <h2 style={{ color: "turquoise" }}>__Content__</h2>
            <Greetings />
        </Grid>
    );
}

export default Contents;
