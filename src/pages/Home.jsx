import React from "react";
import "./Home.css";
import { Grid } from "@mui/material";
import Navigation from "../components/Navigation";
import Contents from "../components/Contents";

function Home() {
  return (
    <Grid container>
      <Navigation />
      <Contents />
    </Grid>
  );
}

export default Home;
