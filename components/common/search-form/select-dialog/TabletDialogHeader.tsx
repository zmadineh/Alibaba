import React, {ReactNode} from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";


interface SelectDialogHeaderProps {
    handleClose: () => void,
    label: string,
    children: ReactNode,
}

export default function TabletDialogHeader({children, handleClose, label} : SelectDialogHeaderProps) {

    return (
        <Grid container p={2} zIndex={1000} flexDirection={"column"}>
            <Grid container item alignItems={"center"} justifyContent={"center"}>
                <IconButton onClick={handleClose}><Close /></IconButton>
                <Typography variant={'h6'}>{`انتخاب ${label}`}</Typography>
            </Grid>
            <Grid container item my={1}>
                {children}
            </Grid>
        </Grid>
    )
}