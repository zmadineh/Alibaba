import React from "react";

import {data} from "../../../../model/form/data.type";

import SelectDialogListItem from "./SelectDialogListItem";

import List from '@mui/material/List';
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid/Grid";
import {ListItem} from "@mui/material";
import Typography from "@mui/material/Typography/Typography";


interface selectDialogProps {
    data: data[],
    search: string,
    handelItemClick: (value: string) => void,
    listDescription: boolean,
}

export default function DataList( props : selectDialogProps) {
    const {data, search, handelItemClick, listDescription} = props;

    return (
        <List>
            <ListItem sx={{backgroundColor: 'grey.100', height:'30px'}}>
                <Typography variant={"body2"}>
                    پرتردد
                </Typography>
            </ListItem>
            <Grid px={2}>
                {data ? data.filter(item => item.title.toLowerCase().includes(search)).map(item => (
                        <Grid container key={item.id}>
                            <SelectDialogListItem
                                dataItem={item}
                                selectedValue={''}
                                handleListItemClick={handelItemClick}
                                listDescription={listDescription} />
                            <Divider sx={{color: '#000', width: '100%'}}/>
                        </Grid>
                    ))
                    : null}
            </Grid>
        </List>
    );
}