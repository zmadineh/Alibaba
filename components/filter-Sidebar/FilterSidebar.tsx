import React, {useCallback, useState} from 'react'

import FilterSidebarItems from "./FilterSitdebarItems";
import FilterButton from "./FilterButton";
import FiltersDialog from "./FiltersDialog";

import {filterStatesPropsType} from "../../model/filter/filterStateType";

import FilterSidebarItem from './FilterSidebarItem';
import { filterSidebarAirplaneData } from "../../data/filterSidebarData"
import { filterSidebarAirplaneTwoData } from "../../data/filterSidebarData"
import { filterSidebarTrainData } from "../../data/filterSidebarData"
import { filterSidebarBusData } from "../../data/filterSidebarData"
import { filterSidebarTourData } from "../../data/filterSidebarData"

import Grid from '@mui/material/Grid'
import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import GradingIcon from "@mui/icons-material/Grading";
import Typography from "@mui/material/Typography";
import Drawer from '@mui/material/Drawer';



interface FilterSidebarProps {
    travelType: number,
    resetFunction: () => void,
    filterStateProps: filterStatesPropsType
    ticketCount: number,
}

const FilterSidebar = ({travelType, resetFunction, filterStateProps, ticketCount} : FilterSidebarProps) => {

    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const tabletMatch = useMediaQuery(theme.breakpoints.down('md'));
    const laptopMatch = useMediaQuery(theme.breakpoints.up('md'));

    // filters ->
    const [openFilterDialog, setOpenFilterDialog] = useState<boolean>(false)

    const getFiltersDataArray = useCallback((travelType: number) => {
        if(travelType === 0)
            return filterSidebarAirplaneData
        else if(travelType === 1)
            return filterSidebarAirplaneTwoData
        else if(travelType === 2)
            return filterSidebarTrainData
        else if(travelType === 3)
            return filterSidebarBusData
        else
            return []
    }, [])

    return (
        <Grid container width={'100%'}>
            {laptopMatch &&
                <Grid sx={{ border: 2, borderRadius: '10px', borderColor: 'divider', padding: 1, bgcolor: '#fff'}}>
                    <FilterSidebarItems
                        getData={getFiltersDataArray}
                        travelType={travelType}
                        filterStateProps={filterStateProps}
                        resetFunction={resetFunction}
                        ticketCount={ticketCount}
                    />
                </Grid>
            }
            {tabletMatch && !mobileMatch &&
                <>
                    <FilterButton onClick={() => setOpenFilterDialog(!openFilterDialog)} />
                    <Drawer
                        anchor={'left'}
                        open={openFilterDialog}
                        onClose={() => setOpenFilterDialog(!openFilterDialog)}
                        sx={{zIndex: 2000, width: '500px'}}
                    >
                        <FilterSidebarItems
                            getData={getFiltersDataArray}
                            travelType={travelType}
                            filterStateProps={filterStateProps}
                            resetFunction={resetFunction}
                            ticketCount={ticketCount}
                       />
                    </Drawer>
                </>
            }
            {mobileMatch &&
                <>
                    <Button variant="text" onClick={() => setOpenFilterDialog(!openFilterDialog)} sx={{color: 'grey.500'}}>
                        <Grid display={"flex"} flexDirection={"row-reverse"} gap={1}>
                            <GradingIcon />
                            <Typography fontWeight={'600'}>فیلترها</Typography>
                        </Grid>

                    </Button>
                    <FiltersDialog
                        open={openFilterDialog}
                        onClose={() => setOpenFilterDialog(!openFilterDialog)}
                        fullScreen={true}
                    >
                        <FilterSidebarItems
                            getData={getFiltersDataArray}
                            travelType={travelType}
                            filterStateProps={filterStateProps}
                            resetFunction={resetFunction}
                            ticketCount={ticketCount}
                        />
                    </FiltersDialog>
                </>
            }

        </Grid>
    )
}

export default FilterSidebar