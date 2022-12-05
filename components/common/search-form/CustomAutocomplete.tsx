import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, {SyntheticEvent} from "react";

// interface
interface autocompleteProps {
    value: string | null,
    setValue:  React.Dispatch<React.SetStateAction<string | null>>,
    input: string | undefined,
    setInput:  React.Dispatch<React.SetStateAction<string | undefined>>,
    dataArray: string[],
    label: string,
    borderRadius: string,
}

export default function CustomAutocomplete({value, setValue, input, setInput, dataArray, label, borderRadius} : autocompleteProps) {

    const onChangeValue = (event : SyntheticEvent, newValue: string | null) => {
        setValue(newValue);
    }

    const onInputChange = (event : SyntheticEvent, newValue: string | undefined) => {
        setInput(newValue)
    }

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
                  // InputProps={{
                  //     ...params.InputProps,
                  //     type: 'search',
                  // }}
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