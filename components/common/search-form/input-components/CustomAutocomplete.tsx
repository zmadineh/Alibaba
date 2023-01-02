import React, {SyntheticEvent, useCallback, useState} from "react";

import {getTitleArray} from "../../../../helper/getTitleArray.helper";
import {swappableInputsDetailType} from "../../../../model/form/swappableInputsDetail.type";

import SelectDialogListItem from "../select-dialog/SelectDialogListItem";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid/Grid";


interface autocompleteProps {
    detail: swappableInputsDetailType,
    values: any,
    borderRadius: string,
    listWidth?: string,
    error: boolean,
    errorMessage: string,
    validationData: (name:string, value: string) => boolean,
}

export default function CustomAutocomplete({values, borderRadius, errorMessage,
                                               listWidth = '100%', detail, error, validationData} : autocompleteProps) {

    const [input, setInput] = useState<string>('');

    const onChangeValue = (event : SyntheticEvent, newValue: string) => {
        console.log('onChangeValue')
    }

    const onInputChange = (event : SyntheticEvent, newValue: string) => {
        setInput(newValue)
    }

    const handelItemClick = (newValue: string) => {
        const validate = validationData(detail.name, newValue)
        if(!validate){
            console.log('error')
        }
        else {
            setInput(newValue)
            console.log('validate')
        }
    }

    return(
      <Autocomplete
          id={detail.name}
          value={values[detail.name]}
          onChange={(event, newValue) => onChangeValue(event, (newValue === null ? '' : newValue))}
          inputValue={input}
          onInputChange={(event, newInputValue) => onInputChange(event, newInputValue)}

          fullWidth
          disableClearable
          forcePopupIcon={false}

          sx={{
              height: '2.5rem',
            }}
          options={getTitleArray(detail.data)}
          isOptionEqualToValue={(option, value) => option === value}

          renderInput={(params) => (
              <TextField
                  {...params}
                  label={detail.label + ' ' + '(' + detail.subLabel + ')'}
                  error={error}
                  helperText={(error ? errorMessage : '')}
                  size={"small"}
                  sx={{

                      color: "grey.400",
                      borderColor: "grey.200",

                      '& .MuiOutlinedInput-notchedOutline': {
                          padding: '0 10px',
                      },

                      "& .MuiOutlinedInput-root.Mui-error": {
                          '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'error.300',
                          }
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
                          padding: '0 10px',
                      },

                      '& .MuiInputLabel-root.Mui-focused': {
                          color: "grey.400",
                          padding: 0,
                      },

                      '& .MuiInputLabel-root': {
                          // padding: '0 10px',
                      }

                  }}
              />
          )}

          renderOption={(ind, option) => {
              const index = detail.data.findIndex(item => item.title === option)
              return (
                  <Grid container px={1} key={option}>
                      <SelectDialogListItem
                          dataItem={detail.data[index]}
                          selectedValue={''}
                          handleListItemClick={handelItemClick}
                          listDescription={detail.listDescription}
                      />
                      <Divider sx={{width: '100%'}}/>
                  </Grid>
              );
          }}

          componentsProps={{
              paper: {
                  sx: {
                      width: listWidth
                  }
              }
          }}
          />
    )
}