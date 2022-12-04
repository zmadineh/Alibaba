import * as React from "react";

import OutlinedSearchBox from "../search-box/OutlinedSearchBox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";

interface SelectDialogHeaderProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    handleClose: () => void,
    label: string,
}

export default function SelectDialogHeader({search, setSearch, handleClose, label} : SelectDialogHeaderProps) {
    return (
        <Grid container p={2} zIndex={1000} flexDirection={"column"}>
            <Grid container item alignItems={"center"} justifyContent={"center"}>
                <IconButton onClick={handleClose}><Close /></IconButton>
                <Typography variant={'h6'}>{`انتخاب ${label}`}</Typography>
            </Grid>
            <Grid container item my={1}>
                <OutlinedSearchBox
                    search={search}
                    setSearch={setSearch}
                    borderRadius={'15px'}
                />
            </Grid>
        </Grid>
    )
}