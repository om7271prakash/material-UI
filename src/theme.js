import { createTheme } from "@material-ui/core";
import { green, purple, blue } from "@material-ui/core/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[200],
        },
        success: {
            main: blue[500],
        }
    }
});

export default theme;