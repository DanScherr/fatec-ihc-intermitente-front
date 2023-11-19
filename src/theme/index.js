/** MUI */
import {createTheme} from '@mui/material';
import { teal, amber, grey } from '@mui/material/colors';

const color1 = teal;
const colo2 = amber;

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            navBar: '#D9D9D9', //#212121
            footBox: grey[600], //#424242
            card: grey[900],
            accordionHeader: grey[300]
        },
        primary: {
            main: color1[200], //#d500f9
            lightMain: color1[500], //#eeff41
            veryLightMain: color1['A100'], //#f4ff81
            lightestMain: color1['50'], //#f9fbe7
        },
        secondary: {
            main: colo2['A700'], //#00bfa5
            veryLightMain: colo2[600], //#00897b
        },
        font: {
            main: grey[800], //#424242
            emphasis: grey[900]
        }
    }
});