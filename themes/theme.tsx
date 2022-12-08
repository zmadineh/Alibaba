import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        Button1: true;
        Button2: true;
    }
}

export const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'Alibaba'
    },

    palette: {
        primary: {
            light: '#FFE19C',
            main: '#FDB713',
            dark: '#E3A107'
        },
        secondary: {
            '100': '#F2F9FF',
            '200': '#C9E3F8',
            '300': '#51A2E7',
            main: '#0077DB',
            '500': '#00569E',
            '600': '#004075',
            '700': '#001C33'
        },
        success: {
            '100': '#EAFAEE',
            '200': '#84E199',
            '300': '#28A745',
            '400': '#1E7B33',
            '500': '#11461D',

        },
        warning: {
            '100': '#FFF5E5',
            '200': '#FFCE85',
            '300': '#FF9800',
            '400': '#A85D00',
            '500': '#4D2800',
        },
        info: {
            '100': '#E8F9FC',
            '200': '#A0E8F3',
            '300': '#17A2B8',
            '400': '#0F697A',
            '500': '#072F36',
        },
        error: {
            '100': '#FDF2F3',
            '200': '#F2B5BB',
            '300': '#DC3545',
            '400': '#871722',
            '500': '#410B10',
        },
        grey: {
            '100': '#F8FAFB',
            '200': '#E2E6E9',
            '300': '#BEC6CC',
            '400': '#959EA6',
            '500': '#6C7680',
            '600': '#4B5259',
            '700': '#2B2F33',
            '800': '#0A0B0C',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'Button1' },
                    style: {
                        color: '#fff',
                        backgroundColor: '#FFF',
                        borderRadius: '5px',
                        width: "100%",
                        justifyContent: "flex-start",
                        '&:hover': {
                            backgroundColor: '#F8FAFB',
                        },
                        '&:active': {
                            boxShadow: "0 0 5px 2px inset #00000026",
                        }
                    }
                }, {
                    props: { variant: 'Button2' },
                    style: {
                        color: '#fff',
                        backgroundColor: '#0077DB',
                        borderRadius: '20px',
                        width: "100%",
                        justifyContent: "center",
                        border: "1px solid",
                        borderColor: "rgba(0, 0, 0, .12)",
                        '&:hover': {
                            backgroundColor: '#0077DB',
                            color: '#fff',
                        }
                    },
                },

            ]
        }
    },
}

);