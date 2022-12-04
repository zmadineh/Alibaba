
import React,{useState , useRef, useEffect} from 'react'

import Image from 'next/image'


import Grid from '@mui/material/Grid/Grid'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';


import TabPanel from './TabPanel'
import HeroSlider from './HeroSlider';

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
    const TabItem =[
        {id:0 , title:'پرواز داخلی' , icon:InternalFlightIcon},
        {id:1 , title:'پرواز خارجی' , icon:ExternalFlightIcon},
        {id:2 , title:'قطار' , icon:TrainIcon},
        {id:3 , title:'اتوبوس', icon:BusIcon},
        {id:4 , title:'تور' , icon:TourIcon}
    ]

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    }
    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

      const swiperRef = useRef<any>(null)
      
      useEffect(()=>{
        swiperRef.current.swiper.slideTo(value)
      },[value])

  return (
    <Grid container display={{xs:'none',md:'block'}} p={0} m={0}>
          <Grid position={'relative'} justifyContent={'center'}>
                <Grid position={'relative'} >
                  <HeroSlider  swiperRef={swiperRef}/>
                </Grid>
                <Grid container display={'flex'} justifyContent={'center'} position={'absolute'} zIndex={1500}bottom={'-75px'}>
                    <Grid item>
                          <Box  sx={{border: 2,borderRadius:'10px 10px 10px 10px',borderColor: 'divider', width: '1000px', bgcolor:'common.white' }}>
                            <Box sx={{ borderBottom: 2, borderColor: 'divider',borderRadius:'10px 10px 0 0',display:'flex',justifyContent:'space-around'}}>
                                <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example" 
                                textColor="secondary"indicatorColor="secondary" sx={{ borderBottom: '1px solid #e8e8e8'}}>
                                    {TabItem.map( (item:any) => (
                                        <Tab 
                                        key={item.id}
                                        icon={<Image src={item.icon} alt={'item.id'}/>}
                                        label={item.title} 
                                        {...a11yProps(item.id)}
                                        sx={{fontWeight:'bold',color:'grey.500'}}
                                        />
                                    ))}
                                </Tabs>
                            </Box>
                            {TabItem.map((item:any)=>(
                                <TabPanel key={item.id} value={value} index={item.id}>
                                    {item.title}
                                </TabPanel>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
          </Grid>
    </Grid>
  )
}

export default Tabview