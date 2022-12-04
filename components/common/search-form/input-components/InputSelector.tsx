import Grid from "@mui/material/Grid";
import SelectDialog from "../select-dialog/SelectDialog";
import {TextField} from "@mui/material";
import React from "react";

interface inputSelectorProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    value: string | null,
    setValue: React.Dispatch<React.SetStateAction<string | null>>,
    data: string[],
    label: string
}

export default function InputSelector({open, setOpen, value, setValue, data, label} : inputSelectorProps) {

    const handleClose = (value : string | null) => {
        setOpen(false);
        if (value){
            setValue(value);
        }
    };

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