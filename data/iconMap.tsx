import React, {ReactNode} from "react";

import Search from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


interface iconMapItem  {
    iconName: string,
    icon: ReactNode,
}

export const iconMap: iconMapItem[] = [
    {iconName: 'location', icon: <LocationOnOutlinedIcon />},
    {iconName: 'calender', icon: <CalendarMonthOutlinedIcon />},

]
