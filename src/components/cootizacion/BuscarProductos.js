import React from "react";
import { Grid, Divider, Typography, Button } from "@mui/material";


export default function Home(props) {
    return(
        <Grid container spacing={4} justifyContent="center" alignItems="center" color={"primary"}>
            <Grid item xs={12} sm={6} lg={4}>
                <Typography variant="h1" component="div" gutterBottom>A painting of my life.</Typography>
                <Button size="large" variant="outlined" style={{ borderRadius: 50, fontSize: 40 }} href="/blog">Peek My Diary</Button>
            </Grid>
        </Grid>
    );
}