import React from 'react'
import Accordion from '@mui/material/Accordion';
import { AccordionSummary, Box, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import ButtonGroup from '@mui/material/ButtonGroup';

type ButtonGroupItemType = {
    title: string;
    btn1: string;
    btn2: string;
    btn3: string;

}

const ButtonGroupItem = ({ title }: ButtonGroupItemType) => {

    return (
        <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box display={"flex"} alignItems={"flex-start"} justifyContent={"center"} flexDirection={"column"} >
                    <ButtonGroup color="secondary" aria-label="medium secondary button group">
                        <Button>5ستاره</Button>
                        <Button >4ستاره</Button>
                        <Button >کمتر از 3ستاره</Button>
                    </ButtonGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default ButtonGroupItem