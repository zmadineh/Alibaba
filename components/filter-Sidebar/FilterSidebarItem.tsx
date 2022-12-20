import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import { filterSideType } from "../../data/filterSidebarData"

import ButtonGroup from '@mui/material/ButtonGroup';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SliderItem from './SliderItem';
import ButtonGroupItem from './ButtonGroupItem';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const FilterSidebarItem = ({ item }: { item: filterSideType }) => {
    const [state, setState] = useState(item)
    console.log(state)
    const [value2, setValue2] = useState<number[]>([2, 29]);
    const [btnFilter, setBtnFilter] = useState<string>("none")
    const [companies, setCompanies] = useState<string[]>([])
    const [showAvailable, setShowAvailable] = useState<boolean>(false)
    const [shoppingType, setShoppingType] = useState<string>("all")
    const [priceRange, setPriceRange] = useState<number[]>([0, 10000000000])
    const [departureTime, setDepartureTime] = useState<number[]>([6, 23])

    const [sistemch, setsistemch] = useState<boolean>(false)
    const [avch, setavch] = useState<boolean>(false)



    // handleclicBtnFilter
    const handleclicBtnFilter = () => {
        setBtnFilter("none")
        setDepartureTime([6, 23])
        setValue2([2, 29])
        setPriceRange([22550000, 70507000])
        setCompanies([])
        setShowAvailable(false)
        setShoppingType("all")
    }
    //checkbox


    const handleChange = (id: number) => {
        const t: any = state?.Accor?.map(accor => accor.AccorDetail?.map(accorDetail => accorDetail.id === id ? { ...accorDetail, check: !accorDetail.check } : accorDetail))
        console.log(t)
        // setState(state.Accor.map(accor => accor.AccorDetail?.map(accorDetail => accorDetail.id === id ? { ...accorDetail, check: !accorDetail.check } : accorDetail)))      
    }

    {/* Slider1 departureTime */ }
    const handleChange1 = (event: Event, newValue: number | number[]) => {
        setDepartureTime(newValue as number[]);
        setBtnFilter("flex")
    };
    {/* Slider2  price*/ }
    const handleChange2 = (event: Event, newValue: number | number[]) => {
        setValue2(newValue as number[]);
        setBtnFilter("flex")
    };
    {/* Slider3 tour */ }
    const handleChange3 = (event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
        setBtnFilter("flex")

    };

    const top100Films = [
        { label: 'The Shawshank Redemption' },
        { label: 'The Godfather' },
        { label: 'The Godfather: Part II' },
        { label: 'The Dark Knight' },
        { label: '12 Angry Men' },
        { label: "Schindler's List" },
        { label: 'Pulp Fiction' },
        {
            label: 'The Lord of the Rings: The Return of the King',

        },
        { label: 'The Good, the Bad and the Ugly' },
        { label: 'Fight Club' },
        {
            label: 'The Lord of the Rings: The Fellowship of the Ring',

        },
        {
            label: 'Star Wars: Episode V - The Empire Strikes Back',

        },]
    return (
        <Grid container width={300} sx={{ border: 2, borderRadius: '10px 10px 10px 10px', borderColor: 'divider' }} m={2}>
            <Grid item xs={12} my={2} p={1} display={"flex"} >
                <Grid item xs={6}  ><Typography>نتایج:15</Typography></Grid>
                <Grid item xs={6} display={btnFilter} justifyContent={"flex-end"}><Button onClick={handleclicBtnFilter} sx={{ color: "secondary.300", borderRadius: 5, '&:hover': { backgroundColor: "secondary.100" } }}><Typography sx={{ fontSize: 12 }}>لغو فیلتر ها</Typography></Button></Grid>
            </Grid>
            <Grid item xs={12} borderTop={1} sx={{ borderColor: 'divider' }}>
                {/* Slider1 */}
                {state.silider2 ? "" :
                    <SliderItem title={"ساعت حرکت"} value={departureTime} min={6} max={23} handleChange={handleChange1} />}
                {/* Slider1 */}
                {/* Slider2 aireplan2 */}
                {state.silider ?
                    <SliderItem title={"مدت زمان سفر"} value={value2} min={2} max={29} handleChange={handleChange2} /> : ""}
                {/* Slider2 aireplan2*/}
                {state.Accor?.map((accor, index) => (

                    <Accordion key={index} sx={{ boxShadow: "none" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>{accor.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            {/* <FormGroup> */}
                            {accor.AccorDetail?.map(
                                (accorDetail, index) =>
                                    // <FormControlLabel key={index} sx={{ '& 	.Mui-checked .MuiSvgIcon-root': { color: "secondary.main" } }} control={<Checkbox checked={accorDetail.check ? false : true}
                                    //     onClick={() => handleChange(accorDetail.id)}
                                    //     inputProps={{ 'aria-label': 'controlled' }} />} label={accorDetail.body}

                                    // />
                                    // </FormGroup>
                                    <Box key={index}>
                                        <Button onClick={() => handleChange(accorDetail.id)} sx={{ color: "grey" }}><CheckBoxOutlineBlankIcon /> {accorDetail.body}</Button>
                                        <Button sx={{ color: "secondary.main" }}><CheckBoxIcon />
                                            <Typography sx={{ color: "grey" }}>
                                                {accorDetail.body}
                                            </Typography>
                                        </Button>
                                    </Box>



                            )}

                        </AccordionDetails>
                    </Accordion>
                ))}
                {state.title === "تور" ?
                    <>
                        <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>جست و جوی نام هتل</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Autocomplete
                                        freeSolo
                                        options={top100Films}
                                        sx={{ width: "90%", }}
                                        renderInput={(params) => <TextField {...params} label="جست و جوی نام هتل" color="secondary" />}
                                    />
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        {/* <ButtonGroupItem /> */}
                        <ButtonGroupItem title={"ستاره هتل"} btn1={"ستاره 5"} btn2={"ستاره 4"} btn3={"کمتر از 3ستاره"} />
                        <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" >

                                <Typography> ستاره هتل</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box display={"flex"} alignItems={"flex-start"} justifyContent={"center"} flexDirection={"column"} >
                                    <ButtonGroup color="secondary" aria-label="medium secondary button group">
                                        <Button >5ستاره</Button>
                                        <Button >4ستاره</Button>
                                        <Button >کمتر از 3ستاره</Button>
                                    </ButtonGroup>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        {/* sidebar3 */}
                        <SliderItem title={"رنج قیمتی"} value={priceRange} min={0} max={10000000000} handleChange={handleChange3} />
                        {/* sidebar3 */}
                        <Accordion sx={{ boxShadow: "none" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>نوع وسیله نقلیه</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} >
                                    <ButtonGroup color="secondary" aria-label="medium secondary button group">
                                        <Button >پرواز</Button>
                                        <Button >قطار</Button>
                                        <Button >اتوبوس</Button>
                                    </ButtonGroup>
                                </Box>
                            </AccordionDetails>
                        </Accordion></>
                    : ""
                }
            </Grid>
        </Grid >
    )
}
export default FilterSidebarItem