import React from 'react'
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterSidebar = () => {




    return (
        <Grid container md={3} p={2} >
            <Grid item md={12} p={2} >
                <Grid item md={12} my={2} ><Typography>نتایج:15</Typography></Grid>
                <Grid item md={12} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Grid item md={10} display={"flex"} justifyContent={"space-between"} border={1} p={0.5} borderRadius={5}>
                        <Grid item md={5}  > <Button variant="Button2" > <Typography> رفت</Typography></Button></Grid>
                        <Grid item md={5} > <Button sx={{ color: "black" }} ><Typography>برگشت</Typography></Button></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12}  >
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>ساعت حرکت</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid > <Slider /></Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>نوع بلیط</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="سیستمی" />
                            <FormControlLabel disabled control={<Checkbox />} label="چارتر" />
                        </FormGroup>

                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>شرکت های هواپیمایی</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        1

                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>موارد دیگر</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="نمایش بلیط های تکراری " />
                            <FormControlLabel control={<Checkbox />} label="نمایش بلیط های موجود" />

                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}

export default FilterSidebar