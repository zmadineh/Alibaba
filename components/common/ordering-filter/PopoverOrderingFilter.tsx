import React from 'react';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from '@mui/icons-material/Check';
import GradingIcon from '@mui/icons-material/Grading';
import Grid from "@mui/material/Grid/Grid";


interface FilterDataType {
    label: string,
    filterLabel: string,
}

interface TripleSortingFilterProps {
    inputs: FilterDataType[],
    checked: number,
    setChecked: React.Dispatch<React.SetStateAction<number>>,
}

export default function PopoverOrderingFilter({inputs, checked, setChecked} : TripleSortingFilterProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    // const [checked, setChecked] = React.useState(0);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = (value: number) => () => {

        if (checked !== value) setChecked(value)
        else setChecked(0)
    };

    return (
        <div>
            <Button aria-describedby={id} variant="text" onClick={handleClick} sx={{color: 'grey.500'}}>
                <Grid display={"flex"} flexDirection={"row-reverse"} gap={1}>
                    <GradingIcon />
                    <Typography fontWeight={'600'}>ترتیب</Typography>
                </Grid>

            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                        backgroundColor: 'grey.100',
                        borderRadius: '20px',
                        border: "1px solid",
                        borderColor: 'grey.300',
                        boxShadow: 0,
                    }
                }}
            >
                <List>
                    {inputs.map((item, index) => (
                        <ListItemButton key={index} onClick={handleToggle(index)} dense>
                            <ListItemIcon sx={{minWidth: '30px'}}>
                                {(checked === index) ? <CheckIcon /> : null}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>
            </Popover>
        </div>
    );
}