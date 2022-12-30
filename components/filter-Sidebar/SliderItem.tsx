import React, { Dispatch } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box, Grid, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
type SliderItemProps = {
    title: string;
    // handleChange: () => number | number[];
    // value: Dispatch<React.SetStateAction<number[]>>
    value: any;
    handleChange: any;
    min: number;
    max: number;
}

const SliderItem = ({ title, handleChange, value, min, max }: SliderItemProps) => {
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
                <Box sx={{ width: '100%', padding: 1}} >
                    <Grid display={"flex"} width={"100%"} justifyContent={"space-between"} >
                        <Typography >
                            {value[0]}
                        </Typography>
                        <Typography >
                            {value[1]}
                        </Typography>
                    </Grid>
                    <Slider sx={{ color: "secondary.main" }}
                        min={min}
                        max={max}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        disableSwap
                        isRtl
                    />
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

export default SliderItem