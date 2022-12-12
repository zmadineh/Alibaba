import React, {useState} from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography/Typography";


interface FilterDataType {
    label: string,
    filterLabel: string,
}

interface TripleSortingFilterProps {
    inputs: FilterDataType[]
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>,
}

export default function TripleSortingFilter({inputs, value, setValue} : TripleSortingFilterProps) {

    // const [value, setValue] = useState(0)
    const tempArray = Array.from({length: inputs.length*2},  (elm, index) => {
        return index;
    });
    const maxLength = tempArray.length-1

    const onChangeValue = (e: any, newValue: number) => {
        console.log(value)
        setValue(newValue/2)
    }

    return (
        <Box sx={{border: '1px solid', borderColor: 'grey.200', borderRadius: '25px', padding: '0 30px', minWidth: '500px'}}>
            <Tabs
                value={value*2}
                onChange={onChangeValue}
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"
            >

                {/*{inputs.map((item, index) => (*/}
                {tempArray.map((item) => (
                        <Tab key={item} disableFocusRipple disableTouchRipple
                             label={(item%2) === 0 ? <Typography fontSize={'13px'} fontWeight={'600'} noWrap>{inputs[item/2].label}</Typography> : ''}
                             icon={((item%2) !== 0 && item !== maxLength) ? <Divider orientation={"vertical"}/> : ''}
                             disabled={(item%2) !== 0 && item !== maxLength}
                             sx={{display: (item !== maxLength ? 'flex' : 'none'), padding: ((item%2) !== 0  ? '10px 0' : '0 25px')}}
                             // label={<Typography fontSize={'13px'} fontWeight={'600'} noWrap>{item.label}</Typography>}
                             // sx={{borderRight: (index<inputs.length-1 ? "1px solid" : 0), borderColor: 'grey.200'}}
                        />
                ))}
            </Tabs>
        </Box>
    );
}
//((item%2) !== 0 && item !== maxLength ? '0' : '10px'