import React, {useCallback, useState} from "react";
import CustomAutocomplete from "./CustomAutocomplete";
import InputSelector from "./InputSelector";

import {searchFromValue} from "../../../../model/searchFormValue.type";

import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";


interface SwappableInputProps {
    firstInputName: string,
    secondInputName: string,
    firstData: string[],
    secondData: string[],
    firstLabel: string,
    secondLabel: string,
    handleChange: (name: string, value: string | null) => void,
    form: searchFromValue,
    setForm: React.Dispatch<React.SetStateAction<searchFromValue>>,
}

export default function SwappableInput({firstInputName, secondInputName, handleChange, firstData, secondData, firstLabel, secondLabel, form, setForm} : SwappableInputProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const [firstValue,setFirstValue] = useState<string | null>('');
    const [secValue,setSecValue] = useState<string | null>('');
    const [firstInput,setFirstInput] = useState<string | undefined>('');
    const [secInput,setSecInput] = useState<string | undefined>('');
    const [openFirst, setOpenFirst] = useState(false);
    const [openSec, setOpenSec] = useState(false);

    const flipCities = useCallback(() => {
        console.log(secValue, firstValue)

        if (secValue && firstValue) {
            const temp1 = firstValue;
            const temp2 = secValue;
            setSecValue(temp1)
            setFirstValue(temp2)
            setForm({...form, [firstInputName] : temp2, [secondInputName] : temp1});
            console.log(firstInputName, temp2, secondInputName, temp1)
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
                        dataArray={firstData}
                        label={firstLabel}
                        name={firstInputName}
                        handleChange={handleChange}
                        borderRadius={'0 8px 8px 0'}
                    />
                }

                {mobileMatch &&
                    <InputSelector
                        open={openFirst}
                        setOpen={setOpenFirst}
                        value={firstValue}
                        setValue={setFirstValue}
                        data={secondData}
                        label={firstLabel}
                        name={firstInputName}
                        handleChange={handleChange}
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
                        dataArray={secondData}
                        label={secondLabel}
                        name={secondInputName}
                        handleChange={handleChange}
                        borderRadius={'8px 0 0 8px'}
                    />
                }

                {mobileMatch &&
                    <InputSelector
                        open={openSec}
                        setOpen={setOpenSec}
                        value={secValue}
                        setValue={setSecValue}
                        data={secondData}
                        label={secondLabel}
                        name={secondInputName}
                        handleChange={handleChange}
                    />
                }

            </Grid>
        </Grid>
    )
}