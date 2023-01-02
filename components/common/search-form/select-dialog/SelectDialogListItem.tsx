import React from "react";

import LocationDataCard from "../LocationDataCard/LocationDataCard";

import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {data} from "../../../../model/form/data.type";


interface SelectDialogListItemProps {
    dataItem: data,
    selectedValue: string,
    handleListItemClick: (value: string) => void,
    listDescription: boolean,
}

const SelectDialogListItem = ({dataItem, selectedValue, handleListItemClick, listDescription} : SelectDialogListItemProps) => {
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
                <Grid item xs={10}>
                    <LocationDataCard
                        icon={<LocationOnOutlinedIcon />}
                        title={dataItem.title}
                        description={dataItem.description}
                        withDescription={listDescription}
                    />
                </Grid>
            </Grid>
        </ListItemButton>
    )
}

export default SelectDialogListItem;