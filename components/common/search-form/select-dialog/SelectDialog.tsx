import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {useState} from "react";
import SelectDialogHeader from "./SelectDialogHeader";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


interface selectDialogProps {
    open: boolean,
    data: string[],
    selectedValue: string | null,
    onClose: (value: string | null) => void,
    label: string,
}

export default function SelectDialog({open, data, onClose, selectedValue, label} : selectDialogProps) {

    const [search, setSearch] = useState<string>('');

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handelItemClick = (value : string) => {
        console.log(value, selectedValue)
        onClose(value);
    };

    return (
        <div>
            <Dialog
                onClose={handleClose}
                open={open}
                role={"presentation"}
                TransitionComponent={Transition}
                fullScreen
            >
                <SelectDialogHeader
                    search={search}
                    setSearch={setSearch}
                    handleClose={handleClose}
                    label={label}
                />
                <div style={{overflow: "hidden", height: '1px'}}></div>
                <List>
                    {data ? data.filter(item => item.toLowerCase().includes(search)).map(item => (
                            <Typography key={item} onClick={() => handelItemClick(item)}>{item}</Typography>
                        ))
                        : null}
                </List>
            </Dialog>
        </div>
    );
}