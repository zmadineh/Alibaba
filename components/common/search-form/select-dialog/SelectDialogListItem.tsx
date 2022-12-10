import React from "react";

import LocationDataCard from "../LocationDataCard/LocationDataCard";

import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {data} from "../../../../model/data.type";


interface SelectDialogListItemProps {
    dataItem: data,
    selectedValue: string,
    handleListItemClick: (value: string) => void,
    noDescription: boolean,
}

const SelectDialogListItem = ({dataItem, selectedValue, handleListItemClick, noDescription} : SelectDialogListItemProps) => {
    return (
        <ListItemButton
            key={dataItem.id} selected={(selectedValue === dataItem.title)}
            sx={{
                '&:hover': {
                    backgroundColor: 'secondary.100'
                },
                '&.Mui-selected':{
                    backgroundColor: 'secondary.100'
                },
            }}
        >
            <Grid container dir={'rtl'} sx={{padding: 0}} onClick={() => handleListItemClick(dataItem.title)}>
                <Grid item xs={6}>
                    <LocationDataCard
                        icon={<LocationOnOutlinedIcon />}
                        title={dataItem.title}
                        description={dataItem.description}
                        noDescription={noDescription}
                    />
                </Grid>
            </Grid>
        </ListItemButton>
    )
}

export default SelectDialogListItem;