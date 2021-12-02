import React from "react";
import { Grid } from "@material-ui/core";
import CoffieCard from "./CoffieCard";

const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <CoffieCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffieCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffieCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffieCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffieCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffieCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <CoffieCard />
            </Grid>
        </Grid>
    );
}

export default Content;