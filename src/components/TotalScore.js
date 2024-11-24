// src/TotalScore.js
import React from "react";
import { Grid, Typography } from "@mui/material";

const TotalScore = ({ totalScore }) => (
  <Grid item xs={12}>
    <Typography variant="h6">Total Score: {totalScore}</Typography>
  </Grid>
);

export default TotalScore;
