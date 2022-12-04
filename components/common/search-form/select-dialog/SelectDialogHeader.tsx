import Grid from "@mui/material/Grid";
import * as React from "react";

interface SelectDialogHeaderProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    handleClose: object,
}

export default function SelectDialogHeader({search, setSearch, handleClose} : SelectDialogHeaderProps) {
    return (
        <Grid>
            header
        </Grid>
    )
}