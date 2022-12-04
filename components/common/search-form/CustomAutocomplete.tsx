import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
<<<<<<< HEAD
import React, {SyntheticEvent} from "react";
=======
import React from "react";
>>>>>>> f49780ae6b58049ca4811cca076914fa66980d99

// interface
interface autocompleteProps {
    value: string | null,
    setValue:  React.Dispatch<React.SetStateAction<string | null>>,
    input: string | undefined,
    setInput:  React.Dispatch<React.SetStateAction<string | undefined>>,
    dataArray: string[],
    label: string
}

export default function CustomAutocomplete({value, setValue, input, setInput, dataArray, label} : autocompleteProps) {

<<<<<<< HEAD
    const onChangeValue = (event : SyntheticEvent, newValue: string | null) => {
        setValue(newValue);
    }

    const onInputChange = (event : SyntheticEvent, newValue: string | undefined) => {
        setInput(newValue)
    }

    return(
      <Autocomplete
          value={value}
          onChange={(event, newValue) => onChangeValue(event, newValue)}
          inputValue={input}
          onInputChange={(event, newValue) => onInputChange(event, newValue)}
=======
    return(
      <Autocomplete
          value={value}
          onChange={(event, newValue) => {
              setValue(newValue);
          }}
          inputValue={input}
          onInputChange={(event, newInputValue) => {
              setInput(newInputValue);
          }}
>>>>>>> f49780ae6b58049ca4811cca076914fa66980d99
          id='origin-autoComplete'
          // freeSolo
          fullWidth
          options={dataArray}
          sx={{ width: 220 }}
          renderInput={(params) => (
              <TextField
                  {...params}
                  label={label}
                  InputProps={{
                      ...params.InputProps,
                      type: 'search',
                  }}
                  size={"small"}
              />
          )}
          />
    )
}