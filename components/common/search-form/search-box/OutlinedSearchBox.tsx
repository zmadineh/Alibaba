import React from "react";

import {styled} from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Search from "@mui/icons-material/Search";
<<<<<<< HEAD
import {theme} from "../../../../Theme/Theme";


const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    // color: theme.palette.text.secondary,
    height: '100%',
    '& .MuiOutlinedInput-notchedOutline' : {
        borderColor: theme.palette.grey['200'],
=======


const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    color: theme.palette.text.secondary,
    height: '100%',
    '& .MuiOutlinedInput-notchedOutline' : {
        borderColor: theme.palette.grey['100'],
>>>>>>> f49780ae6b58049ca4811cca076914fa66980d99
    }
}));

interface OutlinedSearchBoxProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    borderRadius: string,
}

export default function OutlinedSearchBox ({search, setSearch, borderRadius = '15px'} : OutlinedSearchBoxProps) {

    const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearch(e.target.value.toString().toLowerCase())
    }

    return (
<<<<<<< HEAD
        <FormControl variant="standard" fullWidth dir={'rtl'}
                     sx={{height: '100%', width: '100%', borderColor: 'divider', borderRadius: borderRadius, backgroundColor: theme.palette.secondary['100']}}>
=======
        <FormControl variant="standard" fullWidth dir={'rtl'} sx={{height: '100%', width: '100%', borderColor: 'divider'}}>
>>>>>>> f49780ae6b58049ca4811cca076914fa66980d99
            <StyledOutlinedInput id="search"
                                 value={search}
                                 onChange={handleSearch}
                                 sx={{borderRadius: borderRadius}}
                                 placeholder={'جستجو'}
                                 endAdornment={<InputAdornment position="end"> <Search /> </InputAdornment>} />
        </FormControl>
    )
}
