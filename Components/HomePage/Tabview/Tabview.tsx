
import React,{useState} from 'react'

import Image from 'next/image'


import Grid from '@mui/material/Grid/Grid'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel'

import InternalFlightIcon from '/public/Assets/Images/Hero/InternalFlightIcon.svg'
import ExternalFlightIcon from '/public/Assets/Images/Hero/ExternalFlightIcon.svg'
import TrainIcon from '/public/Assets/Images/Hero/TrainIcon.svg'
import BusIcon from '/public/Assets/Images/Hero/BusIcon.svg'
import TourIcon from '/public/Assets/Images/Hero/TourIcon.svg'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

type Props = {}

const Tabview = (props: Props) => {
    
    const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    }
    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
  return (
    <Grid>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab 
                    icon={<Image src={InternalFlightIcon} alt={''}/>}
                    label="پرواز داخلی" 
                    {...a11yProps(0)} 
                    />
                    <Tab
                    icon={<Image src={ExternalFlightIcon} alt={''}/>} 
                    label="پرواز خارجی" 
                    {...a11yProps(1)} 
                    />
                    <Tab 
                    icon={<Image src={TrainIcon} alt={''}/>}
                    label="قطار" 
                    {...a11yProps(2)} 
                    />
                    <Tab 
                    icon={<Image src={BusIcon} alt={''}/>}
                    label="اتوبوس" 
                    {...a11yProps(3)} 
                    />
                    <Tab 
                    icon={<Image src={TourIcon} alt={''}/>}
                    label="تور" 
                    {...a11yProps(4)} 
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {'پرواز داخلی'}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {'پرواز خارجی'}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {'قطار'}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {'اتوبوس'}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {'تور'}
            </TabPanel>
        </Box>
    </Grid>
  )
}

export default Tabview