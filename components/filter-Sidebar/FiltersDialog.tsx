import React, {ReactNode} from 'react';
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction={'left'} ref={ref} {...props} />;
});


interface FiltersDialogPropsType {
    open: boolean,
    onClose?: (value: string) => void,
    children: ReactNode,
    fullScreen?: boolean
}


export default function FiltersDialog({open, onClose, children, fullScreen = false} : FiltersDialogPropsType) {

   
    return (
        <Dialog
            onClose={onClose}
            open={open}
            role={"presentation"}
            TransitionComponent={Transition}
            fullScreen={fullScreen}
            sx={{zIndex: 2000}}
        >
            {children}
       
        </Dialog>
    );
}