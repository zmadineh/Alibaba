import React, {SyntheticEvent} from "react";

import {searchFromValue} from "../../../../model/searchFormValue.type";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


interface autocompleteProps {
    value: string,
    setValue:  React.Dispatch<React.SetStateAction<string>>,
    input: string,
    setInput:  React.Dispatch<React.SetStateAction<string>>,
    dataArray: string[],
    label: string,
    borderRadius: string,
    name: string,
    handleChange: (name: string, value: string) => void,
    // selectInput: boolean,
}

export default function CustomAutocomplete({value, setValue, input, setInput, dataArray, label, borderRadius, name, handleChange} : autocompleteProps) {

    const onChangeValue = (event : SyntheticEvent, newValue: string) => {
        setValue(newValue);
        handleChange(name, newValue)
        console.log(newValue)
    }

    const onInputChange = (event : SyntheticEvent, newValue: string) => {
        setInput(newValue)
    }

    return(
      <Autocomplete
          value={value}
          onChange={(event, newValue) => onChangeValue(event, (newValue === null ? '' : newValue))}
          inputValue={input}
          onInputChange={(event, newInputValue) => onInputChange(event, newInputValue)}
          id='custom-autoComplete'
          fullWidth
          options={dataArray}
          renderInput={(params) => (
              <TextField
                  {...params}
                  label={label}
                  size={"small"}
                  sx={{
                      '& .MuiInputBase-root': {
                          borderRadius: borderRadius
                      }
                  }}
              />
          )}
          />
    )
}