import React, {useState} from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography/Typography";


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    padding: '0 4px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: theme.palette.grey['100'],

    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: '8px',
        },
        '&:first-of-type': {
            borderRadius: '8px',
        },
    },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
    "& :hover": {
        color: '#fff',
            backgroundColor: '#fff',
    },
    "&.Mui-selected, &.Mui-selected:hover": {
        color: '#0077DB',
        backgroundColor: '#fff',
    },
}));

const useStyles = () => ({
    withDivider: {
        borderTop: '1px solid #000',
    },
});

interface FilterDataType {
    label: string,
    filterLabel: string,
}

interface TripleSortingFilterProps {
    inputs: FilterDataType[]
}

export default function TripleSortingFilter({inputs} : TripleSortingFilterProps) {

    const [value, setValue] = useState(0)
    const tempArray = Array.from({length: inputs.length*2},  (elm, index) => {
        return index;
    });
    const maxLength = tempArray.length-1

    const onChangeValue = (e: any, newValue: number) => {
        console.log(value)
        setValue(newValue)
    }

    return (
        <Box sx={{border: '1px solid', borderColor: 'grey.200', borderRadius: '25px', padding: '1px 20px'}}>
            <Tabs
                value={value}
                onChange={onChangeValue}
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"

            >

                {inputs.map((item, index) => (
                        <Tab key={index} disableFocusRipple disableTouchRipple
                             // label={(item%2) === 0 ? <Typography fontSize={'13px'} fontWeight={'600'} noWrap>{inputs[item/2].label}</Typography> : ''}
                             // icon={((item%2) !== 0 && item !== maxLength) ? <Divider orientation={"vertical"}/> : ''}
                             // disabled={(item%2) !== 0 && item !== maxLength}
                             // sx={{display: (item !== maxLength ? 'flex' : 'none'), borderLeft: "1px solid #000"}}
                             label={<Typography fontSize={'13px'} fontWeight={'600'} noWrap>{item.label}</Typography>}
                             sx={{borderRight: (index<inputs.length-1 ? "1px solid" : 0), borderColor: 'grey.200'}}
                        />
                ))}
            </Tabs>
        </Box>
    );
}
//((item%2) !== 0 && item !== maxLength ? '0' : '10px'