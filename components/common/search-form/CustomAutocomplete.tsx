import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

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