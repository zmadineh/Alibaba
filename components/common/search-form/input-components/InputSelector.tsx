import React, {useCallback, useState} from "react";import SelectDialog from "../select-dialog/SelectDialog";import {swappableInputsDetailType} from "../../../../model/form/swappableInputsDetail.type";import Grid from "@mui/material/Grid";import TextField from "@mui/material/TextField";import InputAdornment from "@mui/material/InputAdornment";import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';// interfacesinterface inputSelectorProps {    detail: swappableInputsDetailType,    open: boolean,    setOpen: React.Dispatch<React.SetStateAction<boolean>>,    values: {[key: string]: string},    error: boolean,    errorMessage: string,    validationData: (name:string, value: string) => boolean,}export default function InputSelector({open, setOpen, values, validationData, detail, error, errorMessage} : inputSelectorProps) {    const handleClose = (value : string) => {        setOpen(false);        const validate = validationData(detail.name, value)        if(!validate){            console.log('error')        }        else {            console.log('validate')        }    }    return (        <Grid width={'100%'}>            <SelectDialog                open={open}                setOpen={setOpen}                onClose={handleClose}                data={detail.data}                label={detail.label}            />            <TextField                id="selectorInput"                variant={"standard"}                size={"small"}                placeholder={detail.label}                onClick={() => setOpen(true)}                value={values[detail.name]}                fullWidth                error={error}                helperText={(error ? errorMessage : '')}                InputProps={{                    startAdornment: (                        <InputAdornment position="start" sx={{margin: 1}}>                            <LocationOnOutlinedIcon />                            {/*{iconMap.find(item => item.iconName === iconName).icon}*/}                        </InputAdornment>                    ),                }}                sx={{                    padding: 1,                    '& .MuiInputBase-root::before': {                        // borderColor: "grey.200",                    },                    '& .MuiInput-root::after': {                        // borderColor: "grey.400",                    },                    '& .MuiInput-input': {                        height: '2.4rem',                    },                }}            />        </Grid>    )}