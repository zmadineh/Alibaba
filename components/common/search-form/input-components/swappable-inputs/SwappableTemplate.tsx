import Grid from "@mui/material/Grid/Grid";
import React, {ReactNode} from "react";
import Box from "@mui/system/Box";
import IconButton from "@mui/material/IconButton";
import FlipIcon from "../../../../../public/svg/Flip-icon.svg";

interface swappableTemplateProps {
    children1: ReactNode,
    children2: ReactNode,
    flipData: () => void,
}

export default function SwappableTemplate({children1, children2, flipData} : swappableTemplateProps) {

    return (
        <Grid
            display={"flex"}
            flexDirection={{xs: 'column', md: 'row'}}
            alignItems={{xs: 'flex-end', md: 'center'}}
            justifyContent={"center"}
            position={"relative"}
            width={'100%'}
        >
            {children1}

            <Box sx={{position: 'absolute', borderRadius: '50%', backgroundColor: 'grey.100',  zIndex: 100, border: '0.6px solid', borderColor: 'grey.300'}}>
                <IconButton sx={{width: '30px', height: '30px'}}
                            onClick={flipData}
                >
                    <FlipIcon />
                </IconButton>
            </Box>

            {children2}
        </Grid>
    )
}