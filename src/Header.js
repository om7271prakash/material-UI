import React from "react";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    typographyStyle: {
        flex: "auto",
    }
});

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyle}>this is our header</Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Header;