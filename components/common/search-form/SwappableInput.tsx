import React, {useCallback, useState} from "react";
import LocationAutocomplete from "./CustomAutocomplete";

import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import {IconButton} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import CustomAutocomplete from "./CustomAutocomplete";


// data
const originCities : string[] = [
    'تهران', 'اصفهان', 'تبریز',
]

const destinationCities  : string[] = [
   'تبریز', 'تهران', 'اصفهان',
]


export default function SwappableInput() {

    const [firstValue,setFirstValue] = useState<string | null>(originCities[0]);
    const [secValue,setSecValue] = useState<string | null>(destinationCities[0]);
    const [firstInput,setFirstInput] = useState<string | undefined>('');
    const [secInput,setSecInput] = useState<string | undefined>('');

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
                <Grid>
                    <CustomAutocomplete
                        value={firstValue}
                        setValue={setFirstValue}
                        input={firstInput}
                        setInput={setFirstInput}
                        dataArray={originCities}
                        label={'مبدا'} />
                </Grid>

                <Box sx={{position: 'absolute', borderRadius: '50%', backgroundColor: '#fff',  zIndex: 100}}>
                    <IconButton sx={{width: '30px', height: '30px'}}
                                onClick={flipCities}
                    >
                        <FlipCameraAndroidIcon />
                    </IconButton>
                </Box>

                <Grid>
                  <CustomAutocomplete
                      value={secValue}
                      setValue={setSecValue}
                      input={secInput}
                      setInput={setSecInput}
                      dataArray={destinationCities}
                      label={'مقصد'} />
                </Grid>

            </Grid>
        </Grid>
    )
}