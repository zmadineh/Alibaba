import React, { useState } from 'react'

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import {filterSideItemDetailType, filterSideType} from "../../data/filterSidebarData";
import {filterStatesPropsType} from "../../model/filter/filterStateType";

import SliderItem from './SliderItem';
import ButtonGroupItem from './ButtonGroupItem';


interface FilterSidebarItemPropsType {
    item: filterSideType,
    filterStateProps: filterStatesPropsType,
    resetFunction: () => void,
    ticketCount: number,
}

const FilterSidebarItem = ({ item, filterStateProps, resetFunction, ticketCount }: FilterSidebarItemPropsType) => {
    const {
        allCompanies,
        setAllCompanies,
        companies,
        setCompanies,
        showAvailable,
        setShowAvailable,
        shoppingType,
        setShoppingType,
        priceRange,
        setPriceRange,
        departureTime,
        setDepartureTime,
        transportTypeId,
    } = filterStateProps

    const [state, setState] = useState(item)
    const [value2, setValue2] = useState<number[]>([2, 29]);
    const [btnFilter, setBtnFilter] = useState<string>("none")


    // handleClickBtnFilter
    const handleClickBtnFilter = () => {
        setBtnFilter("none")
        setValue2([2, 29])
        resetFunction();
    }

    const shoppingCheck = (label: string) => {
        if (label === 'systematic')
            return shoppingType['systematic']
        else if (label === 'chartered')
            return shoppingType['chartered']
    }

    const companyCheck = (label: string) => {
        return companies.includes(Number(label))
    }

    // checkboxes
    const handleChange = (accorDetail: filterSideItemDetailType) => {

        if(accorDetail.type === 'shopping'){
            setShoppingType({...shoppingType, [accorDetail.label]: !shoppingCheck(accorDetail.label)})
        }
        else if (accorDetail.type === 'company'){
            const accorCompanyId = Number(accorDetail.label)

            if (!companyCheck(accorDetail.label))
                setCompanies([...companies, accorCompanyId])
            else if(companyCheck(accorDetail.label)){
                const companyIndex = companies.findIndex(coItem => coItem === accorCompanyId)
                if(companyIndex !== -1)
                    setCompanies(companies.filter(coId => coId !== accorCompanyId))
            }
            setAllCompanies(false)
        }

        setBtnFilter("flex")
    }


    {/* Slider1 departureTime */ }
    const handleChange1 = (event: Event, newValue: number[]) => {
        setDepartureTime({min: {hours: newValue[0], minutes: 0}, max:{hours: newValue[1], minutes: 59}})
        setBtnFilter("flex")
    }


    {/* Slider2 travel time */ }
    const handleChange2 = (event: Event, newValue: number | number[]) => {
        setValue2(newValue as number[]);
        setBtnFilter("flex")
    }


    {/* Slider3 price */ }
    const handleChange3 = (event: Event, newValue: number[]) => {
        setPriceRange({min: newValue[0], max: newValue[1]});
        setBtnFilter("flex")
    };


    return (
        <Grid item container width={'100%'} bgcolor={'#fff'}>

            <Grid container item my={2} p={1} width={'100%'}>
                <Grid item xs={6}>
                    <Typography>نتایج: {ticketCount}</Typography>
                </Grid>
                <Grid item xs={6} display={"flex"} justifyContent={"flex-end"} sx={{width: '80px', height: '30px'}}>
                    <Button onClick={handleClickBtnFilter}
                            sx={{backgroundColor: 'inherit', color: "secondary.300", borderRadius: 5, display: btnFilter,
                                '&:hover': { backgroundColor: "secondary.100"}}}>
                        <Typography sx={{fontSize: 12 }}>لغو فیلتر ها</Typography>
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={12} borderTop={1} sx={{ borderColor: 'divider' }}>

                {/* Slider1 */}
                {state.slider2 ? "" :
                    <SliderItem
                        title={"ساعت حرکت"}
                        value={[departureTime.min.hours, departureTime.max.hours]}
                        min={0}
                        max={23}
                        handleChange={handleChange1}
                    />}
                {/* Slider1 */}

                {/* Slider2 airplane2 */}
                {state.slider ?
                    <SliderItem
                        title={"مدت زمان سفر"}
                        value={value2}
                        min={2}
                        max={29}
                        handleChange={handleChange2}
                    />
                    : ""
                }
                {/* Slider2 airplane2*/}

                {/* Slider3 price range*/}
                {state.slider ? "" :
                    <SliderItem
                        title={"بازه قیمت"}
                        value={[priceRange.min, priceRange.max]}
                        min={0}
                        max={1000000}
                        handleChange={handleChange3}
                    />}
                {/* Slider1 */}

                {state.Accor.map((accor, accorIndex) => (
                    (accor.AccorDetail.length) > 0 &&
                        <Accordion key={accorIndex} sx={{boxShadow: "none"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>{accor.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {accor.AccorDetail.map(
                                    (accorDetail, detailIndex) =>
                                        <Grid key={detailIndex} sx={{color: 'grey.300'}}>
                                            <Button onClick={() => handleChange(accorDetail)}>

                                                <Grid display={"flex"} alignItems={"center"} gap={1}>
                                                    {(accorDetail.type === 'shopping' && shoppingCheck(accorDetail.label)) ||
                                                    (accorDetail.type === 'company' && companyCheck(accorDetail.label))
                                                        ?
                                                        <Grid display={"flex"} alignItems={"center"}  sx={{color: 'grey.300'}}>
                                                            <CheckBoxIcon color={"secondary"}/>
                                                        </Grid> :
                                                        <Grid display={"flex"} alignItems={"center"}  sx={{color: 'grey.400'}}>
                                                            <CheckBoxOutlineBlankIcon/>
                                                        </Grid>
                                                    }

                                                    <Typography color={'gray'}>{accorDetail.body}</Typography>
                                                </Grid>
                                            </Button>
                                        </Grid>
                                )}
                            </AccordionDetails>
                        </Accordion>
                ))}

                {/*{state.title === "تور" ?*/}
                {/*    <>*/}
                {/*        <Accordion sx={{ boxShadow: "none" }}>*/}
                {/*            <AccordionSummary*/}
                {/*                expandIcon={<ExpandMoreIcon />}*/}
                {/*                aria-controls="panel1a-content"*/}
                {/*                id="panel1a-header"*/}
                {/*            >*/}
                {/*                <Typography>جست و جوی نام هتل</Typography>*/}
                {/*            </AccordionSummary>*/}
                {/*            <AccordionDetails>*/}
                {/*                <Box sx={{ display: 'flex', alignItems: 'center' }}>*/}
                {/*                    <Autocomplete*/}
                {/*                        freeSolo*/}
                {/*                        options={top100Films}*/}
                {/*                        sx={{ width: "90%", }}*/}
                {/*                        renderInput={(params) => <TextField {...params} label="جست و جوی نام هتل" color="secondary" />}*/}
                {/*                    />*/}
                {/*                </Box>*/}
                {/*            </AccordionDetails>*/}
                {/*        </Accordion>*/}
                {/*        /!* <ButtonGroupItem /> *!/*/}
                {/*        <ButtonGroupItem title={"ستاره هتل"} btn1={"ستاره 5"} btn2={"ستاره 4"} btn3={"کمتر از 3ستاره"} />*/}
                {/*        <Accordion sx={{ boxShadow: "none" }}>*/}
                {/*            <AccordionSummary*/}
                {/*                expandIcon={<ExpandMoreIcon />}*/}
                {/*                aria-controls="panel1a-content"*/}
                {/*                id="panel1a-header" >*/}

                {/*                <Typography> ستاره هتل</Typography>*/}
                {/*            </AccordionSummary>*/}
                {/*            <AccordionDetails>*/}
                {/*                <Box display={"flex"} alignItems={"flex-start"} justifyContent={"center"} flexDirection={"column"} >*/}
                {/*                    <ButtonGroup color="secondary" aria-label="medium secondary button group">*/}
                {/*                        <Button >5ستاره</Button>*/}
                {/*                        <Button >4ستاره</Button>*/}
                {/*                        <Button >کمتر از 3ستاره</Button>*/}
                {/*                    </ButtonGroup>*/}
                {/*                </Box>*/}
                {/*            </AccordionDetails>*/}
                {/*        </Accordion>*/}
                {/*        /!* sidebar3 *!/*/}
                {/*        <SliderItem title={"رنج قیمتی"} value={priceRange} min={0} max={10000000000} handleChange={handleChange3} />*/}
                {/*        /!* sidebar3 *!/*/}
                {/*        <Accordion sx={{ boxShadow: "none" }}>*/}
                {/*            <AccordionSummary*/}
                {/*                expandIcon={<ExpandMoreIcon />}*/}
                {/*                aria-controls="panel1a-content"*/}
                {/*                id="panel1a-header"*/}
                {/*            >*/}
                {/*                <Typography>نوع وسیله نقلیه</Typography>*/}
                {/*            </AccordionSummary>*/}
                {/*            <AccordionDetails>*/}
                {/*                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} >*/}
                {/*                    <ButtonGroup color="secondary" aria-label="medium secondary button group">*/}
                {/*                        <Button >پرواز</Button>*/}
                {/*                        <Button >قطار</Button>*/}
                {/*                        <Button >اتوبوس</Button>*/}
                {/*                    </ButtonGroup>*/}
                {/*                </Box>*/}
                {/*            </AccordionDetails>*/}
                {/*        </Accordion></>*/}
                {/*    : ""*/}
                {/*}*/}
            </Grid>
        </Grid>
    )
}
export default FilterSidebarItem