import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from "react";

// interfaces
interface city {
    id: number,
    name : string,
}

// data
const originCities : city[] = [
    {id: 1, name: 'tehran'},
    {id: 2, name: 'isfahan'},
    {id: 3, name: 'tabriz'},
]

const destinationCities  : city[] = [
    {id: 1, name: 'tehran'},
    {id: 2, name: 'isfahan'},
    {id: 3, name: 'tabriz'},
]

export default function SwappableInput() {

    const [originCity,setOriginCity] = useState<city>({
        id: 0,
        name: '',
    });

    const [destCity,setDestCity] = useState<city>({
        id: 0,
        name: '',
    });

    const [selected, setSelected] = useState<string>('origin');



    return (
        // <ToggleButtonGroup
        //     value={selected}
        //     exclusive
        //     onChange={handleAlignment}
        //     aria-label="text alignment"
        // >
        //     <ToggleButton
        //         value="origin"
        //         selected={selected}
        //         onChange={() => {
        //             setSelected(!selected);
        //         }}
        //     >
        //         <Autocomplete
        //             freeSolo
        //             id="free-solo-2-demo"
        //             disableClearable
        //             options={originCity.map((option) => option.name)}
        //             renderInput={(params) => (
        //                 <TextField
        //                     {...params}
        //                     label="Search input"
        //                     InputProps={{
        //                         ...params.InputProps,
        //                         type: 'search',
        //                     }}
        //
        //                     size={"small"}
        //                 />
        //             )}
        //         />
        //     </ToggleButton>
        //
        // </ToggleButtonGroup>
    )
}