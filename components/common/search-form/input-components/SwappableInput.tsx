import React, {useCallback, useState} from "react";
import CustomAutocomplete from "../CustomAutocomplete";
import InputSelector from "./InputSelector";

import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";


// data
const originCities : string[] = [
    'تهران', 'اصفهان', 'تبریز',
]

const destinationCities  : string[] = [
   'تبریز', 'تهران', 'اصفهان',
]


export default function SwappableInput() {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const [firstValue,setFirstValue] = useState<string | null>(originCities[0]);
    const [secValue,setSecValue] = useState<string | null>(destinationCities[0]);
    const [firstInput,setFirstInput] = useState<string | undefined>('');
    const [secInput,setSecInput] = useState<string | undefined>('');
    const [openFirst, setOpenFirst] = useState(false);
    const [openSec, setOpenSec] = useState(false);

    const flipCities = useCallback(() => {
        console.log(secValue, firstValue)

        if (secValue && firstValue) {
            const temp = secValue;
            setSecValue(firstValue)
            setFirstValue(temp)
        }
    }, [firstValue, secValue]);

    return (
        <Grid container>
            <Grid
                display={"flex"}
                flexDirection={{xs: 'column', sm: 'row'}}
                alignItems={{xs: 'flex-end', sm: 'center'}}
                justifyContent={"center"}
                position={"relative"}
            >

                {!mobileMatch &&
                    <CustomAutocomplete
                        value={firstValue}
                        setValue={setFirstValue}
                        input={firstInput}
                        setInput={setFirstInput}
                        dataArray={originCities}
                        label={'مبدا'}
                    />
                }
                {mobileMatch &&
                    <InputSelector
                        open={openFirst}
                        setOpen={setOpenFirst}
                        value={firstValue}
                        setValue={setFirstValue}
                        data={originCities}
                        label={'مبدا'}
                    />
                }

                <Box sx={{position: 'absolute', borderRadius: '50%', backgroundColor: '#fff',  zIndex: 100}}>
                    <IconButton sx={{width: '30px', height: '30px'}}
                                onClick={flipCities}
                    >
                        <FlipCameraAndroidIcon />
                    </IconButton>
                </Box>

                {!mobileMatch &&
                    <CustomAutocomplete
                        value={secValue}
                        setValue={setSecValue}
                        input={secInput}
                        setInput={setSecInput}
                        dataArray={destinationCities}
                        label={'مقصد'}
                    />
                }

                {mobileMatch &&
                    <InputSelector
                        open={openSec}
                        setOpen={setOpenSec}
                        value={secValue}
                        setValue={setSecValue}
                        data={destinationCities}
                        label={'مقصد'}
                    />
                }

            </Grid>
        </Grid>
    )
}