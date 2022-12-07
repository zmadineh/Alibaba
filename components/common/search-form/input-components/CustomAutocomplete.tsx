import React, {SyntheticEvent} from "react";

import {searchFromValue} from "../../../../model/searchFormValue.type";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import DataList from "../select-dialog/DataList";
import SelectDialogListItem from "../select-dialog/SelectDialogListItem";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid/Grid";
import {data} from "../../../../model/data.type";
import {getTitleArray} from "../../../../helper/getTitleArray.helper";


interface autocompleteProps {
    value: string,
    setValue:  React.Dispatch<React.SetStateAction<string>>,
    input: string,
    setInput:  React.Dispatch<React.SetStateAction<string>>,
    dataArray: data[],
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

    const handelItemClick = (newValue: string) => {
        setValue(newValue)
    }

    return(
      <Autocomplete
          value={value}
          onChange={(event, newValue) => onChangeValue(event, (newValue === null ? '' : newValue))}
          inputValue={input}
          onInputChange={(event, newInputValue) => onInputChange(event, newInputValue)}
          id='custom-autoComplete'
          fullWidth
          options={getTitleArray(dataArray)}
          renderInput={(params) => (
              <TextField
                  {...params}
                  label={label}
                  size={"medium"}
                  sx={{
                      color: "grey.400",
                      borderColor: "grey.200",

                      '& :hover': {
                          color: "grey.400",
                          '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: "grey.400",
                              borderWidth: '0.5px',
                          },
                      },

                      '& :focused': {
                          color: "grey.400",
                          '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: "grey.400",
                              borderWidth: '0.5px',
                          },
                      },

                      '& :selected': {
                          color: "grey.400",
                          '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: "grey.400",
                              borderWidth: '0.5px',
                          },
                      },

                      '& .MuiOutlinedInput-root.Mui-focused': {
                          '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: "grey.400",
                              borderWidth: '0.5px',
                          },
                      },

                      '& .MuiInputBase-root': {
                            borderRadius: borderRadius,
                            borderColor: "grey.200",
                      },

                      '& .MuiInputLabel-root.Mui-focused': {
                          color: "grey.400",
                      }
                  }}
              />
          )}

          renderOption={(props, option) => {
              const index = dataArray.findIndex(item => item.title === option)
              return (
                  <Grid container px={1} key={option}>
                      <SelectDialogListItem dataItem={dataArray[index]} selectedValue={''} handleListItemClick={handelItemClick} noDescription={false} />
                      <Divider sx={{color: '#000', width: '100%'}}/>
                  </Grid>
              );
          }}
          />
    )
}