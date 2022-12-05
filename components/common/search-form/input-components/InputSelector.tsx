import SelectDialog from "../select-dialog/SelectDialog";
import React, {useCallback} from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {iconMap} from "../../../../data/iconMap";

// interfaces
interface passenger {
    adult: number,
    child: number,
    baby: number,
}

interface searchFromValue {
    originCity: string,
    destinationCity: string,
    departureDate: string,
    passengerCount: passenger,
}

interface inputSelectorProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    value: string | null,
    setValue: React.Dispatch<React.SetStateAction<string | null>>,
    data: string[],
    label: string,
    name: string,
    handleChange: (name: string, value: string) => void,
    form: searchFromValue,
    iconName: string,
}

export default function InputSelector({open, setOpen, value, setValue, data, label, name, handleChange, form, iconName} : inputSelectorProps) {

    const handleClose = useCallback((value : string | null) => {
        setOpen(false);
        if (value){
            setValue(value);
            handleChange(name, value)
            console.log(name, value, 'select')
        }
    }, [value, form]);

    return (
        <Grid width={'100%'}>
            <SelectDialog
                open={open}
                selectedValue={value}
                onClose={handleClose}
                data={data}
                label={label}
            />

            <TextField
                id="selectorInput"
                variant={"standard"}
                size={"small"}
                placeholder={label}
                onClick={() => setOpen(true)}
                value={value}
                sx={{padding: 1}}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" sx={{margin: 1}}>
                            {iconMap.find(item => item.iconName === iconName).icon}
                        </InputAdornment>
                    ),
                }}
            />

        </Grid>
    )
}