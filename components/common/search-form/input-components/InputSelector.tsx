import Grid from "@mui/material/Grid";
import SelectDialog from "../select-dialog/SelectDialog";
import {TextField} from "@mui/material";
import React, {useCallback} from "react";

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
}

export default function InputSelector({open, setOpen, value, setValue, data, label, name, handleChange} : inputSelectorProps) {

    const handleClose = useCallback((value : string | null) => {
        setOpen(false);
        if (value){
            setValue(value);
            handleChange(name, value)
        }
    }, [value]);

    return (
        <Grid>
            <SelectDialog
                open={open}
                selectedValue={value}
                onClose={handleClose}
                data={data}
                label={label}
            />
            <TextField
                id="selectorInput"
                // label={label}
                variant="standard"
                placeholder={label}
                onClick={() => setOpen(true)}
                value={value}
            />
        </Grid>
    )
}