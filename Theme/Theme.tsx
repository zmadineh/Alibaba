import { createTheme } from '@mui/material/styles';


export const theme = createTheme({

    typography: {
        fontFamily:'Alibaba'
    },
    
    palette: {
    primary: {
        light:'#FFE19C',
        main: '#FDB713',
        dark: '#E3A107'
    },
    secondary: {
        '100':'#F2F9FF',
        '200':'#C9E3F8',
        '300':'#51A2E7',
        main:'#0077DB',
        '500':'#00569E',
        '600':'#004075',
        '700':'#001C33'
    },
    success:{
        '100':'#EAFAEE',
        '200':'#84E199',
        '300':'#28A745',
        '400':'#1E7B33',
        '500':'#11461D',

    },
    warning: {
        '100':'#FFF5E5',
        '200':'#FFCE85',
        '300':'#FF9800',
        '400':'#A85D00',
        '500':'#4D2800', 
    },
    info: {
        '100':'#E8F9FC',
        '200':'#A0E8F3',
        '300':'#17A2B8',
        '400':'#0F697A',
        '500':'#072F36', 
    },
    error: {
        '100':'#FDF2F3',
        '200':'#F2B5BB',
        '300':'#DC3545',
        '400':'#871722',
        '500':'#410B10', 
    },
    grey: {
        '100':'#F8FAFB',
        '200':'#E2E6E9',
        '300':'#BEC6CC',
        '400':'#959EA6',
        '500':'#6C7680',
        '600':'#4B5259',
        '700':'#2B2F33',
        '800':'#0A0B0C',
        '900':'#F6F6F6'
    },
  },


    // zahra madineh
    components: {

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        transformOrigin: "right !important",
                        left: "inherit !important",
                        right: "1.75rem !important",
                        overflow: "unset",
                    },
                    "& legend": {textAlign: "right",},
                }
            }
        }
    },

});