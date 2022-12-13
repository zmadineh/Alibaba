import React, {useState} from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography/Typography";
import DropDownOrderingFilter from "./DropDownOrderingFilter";
import FilterPopover from "./FilterPopover";
import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


interface FilterDataType {
    label: string,
    filterLabel: string,
}

interface TripleSortingFilterProps {
    inputs: FilterDataType[]
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>,
}

export default function OrderingFilter({inputs, value, setValue} : TripleSortingFilterProps) {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const laptopMatch = useMediaQuery(theme.breakpoints.up('md'));

    const tempArray = Array.from({length: inputs.length*2},  (elm, index) => {
        return index;
    });
    const maxLength = tempArray.length-1

    const onChangeValue = (e: any, newValue: number) => {
        console.log(value)
        setValue(newValue/2)
    }

    return (
        <Box >
            {laptopMatch &&
                <Tabs
                    value={value * 2}
                    onChange={onChangeValue}
                    textColor="secondary"
                    indicatorColor="secondary"
                    sx={{
                        border: '1px solid',
                        borderColor: 'grey.200',
                        borderRadius: '25px',
                        padding: '0 20px',
                        width: '100%',
                        minHeight: '38px'
                    }}
                >
                    {tempArray.map((item) => (
                        <Tab key={item} disableFocusRipple disableTouchRipple
                             label={(item % 2) === 0 ? <Typography fontSize={'14px'} fontWeight={'600'}
                                                                   noWrap>{inputs[item / 2].label}</Typography> : ''}
                             icon={((item % 2) !== 0 && item !== maxLength) ? <Divider orientation={"vertical"}/> : ''}
                             disabled={(item % 2) !== 0 && item !== maxLength}
                             sx={{
                                 minWidth: 0, minHeight: '38px', display: (item !== maxLength ? 'flex' : 'none'),
                                 padding: ((item % 2) !== 0 ? '10px 15px' : '0 10px')
                             }}
                        />
                    ))}
                </Tabs>
            }
            {tabletMatch && !mobileMatch &&
                <DropDownOrderingFilter inputs={inputs} value={value} setValue={setValue} />
            }

            {mobileMatch &&
                <FilterPopover inputs={inputs} checked={value} setChecked={setValue} />
            }
        </Box>
    );
}
//((item%2) !== 0 && item !== maxLength ? '0' : '10px'