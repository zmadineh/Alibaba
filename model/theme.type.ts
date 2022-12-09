import {TypographyOptions} from "@mui/material/styles/createTypography";
import {PaletteOptions} from "@mui/material/styles";
import {Palette} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
        fontFamily: string

        primary: {
            light: string,
            main: string,
            dark: string,
        },
        secondary: {
            '100': string,
            '200': string,
            '300': string,
            main: string,
            '500': string,
            '600': string,
            '700': string
        },
        success: {
            '100': string,
            '200': string,
            '300': string,
            '400': string,
            '500': string,

        },
        warning: {
            '100': string,
            '200': string,
            '300': string,
            '400': string,
            '500': string,
        },
        info: {
            '100': string,
            '200': string,
            '300': string,
            '400': string,
            '500': string,
        },
        error: {
            '100': string,
            '200': string,
            '300': string,
            '400': string,
            '500': string,
        },
        grey: {
            '100': string,
            '200': string,
            '300': string,
            '400': string,
            '500': string,
            '600': string,
            '700': string,
            '800': string,
            '900': string
        },
    }

    // allow configuration using `createTheme`
    // interface ThemeOptions {
    //     typography :  TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined
    //     palette: PaletteOptions | undefined
    // }
}