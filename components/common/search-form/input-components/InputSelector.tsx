import React, {useCallback} from "react";
import SelectDialog from "../select-dialog/SelectDialog";

import {searchFromValue} from "../../../../model/searchFormValue.type";
import {data} from "../../../../model/data.type";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {swappableInputsDetailType} from "../../../../model/swappableInputsDetail.type";


// interfaces
interface inputSelectorProps {
    detail: swappableInputsDetailType,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    // data: data[],
    // label: string,
    // name: string,
    handleChange: (name: string, value: string) => void,
    form: searchFromValue,
    // iconName: string,
}

export default function InputSelector({open, setOpen, value, setValue, handleChange, form, detail} : inputSelectorProps) {

    const handleClose = useCallback((value : string) => {
        setOpen(false);
        if (value){
            setValue(value);
            handleChange(detail.name, value)
            console.log(detail.name, value, 'select')
        }
    }, [value, form]);

    return (
        <Grid width={'100%'}>
            <SelectDialog
                open={open}
                selectedValue={value}
                onClose={handleClose}
                data={detail.data}
                label={detail.label}
            />

            <TextField
                id="selectorInput"
                variant={"standard"}
                size={"small"}
                placeholder={detail.label}
                onClick={() => setOpen(true)}
                value={value}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" sx={{margin: 1}}>
                            <LocationOnOutlinedIcon />
                            {/*{iconMap.find(item => item.iconName === iconName).icon}*/}
                        </InputAdornment>
                    ),
                }}

                sx={{
                    padding: 1,

                    '& .MuiInputBase-root::before': {
                        borderColor: "grey.200",
                    },

                    '& .MuiInput-root::after': {
                        borderColor: "grey.300",
                    },

                    '& .MuiInput-input': {
                        height: '2.4rem',
                    },
                }}
            />

        </Grid>
    )
}