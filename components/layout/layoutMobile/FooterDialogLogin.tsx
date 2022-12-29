import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Myaccount from "../../../public/svg/Myaccount-icon.svg"
import MobileLoginFrom from "../../desktop_header/MobileLoginFrom"
export default function FooterDialogLogin() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Button sx={{ color: "common.black", '&:hover': { color: "secondary.300" } }} onClick={handleClickOpen}>
      <Grid item display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Myaccount />
              <Typography sx={{ fontSize: 12 }}>حساب کاربری</Typography>
            </Grid>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      
      >
         <Grid style={{width:"100%"}}>
         <MobileLoginFrom/>
         </Grid>
      </Dialog>
    </Grid>
  );
}
