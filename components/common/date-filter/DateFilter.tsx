import React,{useState} from 'react'

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

type Props = {}

const DateFilter = (props: Props) => {

    const [value, setValue] = useState(0);
    const Date =[
        {id:0,title:'پنجشنبه - 1/10'},
        {id:1,title:'جمعه - 2/10'},
        {id:2,title:'شنبه - 3/10'},
        {id:3,title:'یکشنبه - 4/10'},
        {id:4,title:'دوشنبه - 5/10'},
        {id:5,title:'سه شنبه - 6/10'},
        {id:6,title:'چهارشنبه - 7/10'},
        {id:7,title:'پنجشنبه - 8/10'},
        {id:8,title:'جمعه - 9/10'},
    ]
    const handleClick = (id:number) => {
    setValue(id);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper',display:'flex',justifyContent:'center' }}>
      <Tabs
          value={value}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          textColor="secondary" 
          indicatorColor="secondary"
          sx={{width:'850px',height:'62px',border:'1px solid', borderColor:'divider',borderRadius:'10px',
          [`& .${tabsClasses.scrollButtons}`]: {'&.Mui-disabled': { opacity: 0.3 }},
          }}
        
      >
        {Date.map((item:any)=>(
          <Tab 
          key={item.id} 
          label={item.title}
          onClick={()=>handleClick(item.id)}
          sx={{width:'116px',height:'62px',borderLeft:'1px solid',borderColor:'divider',fontWeight:'bold',
                '&.Mui-selected':{border:'2px solid',borderColor:'secondary',borderRadius:'5px'}
              }}
          />

        ))}
        
      </Tabs>
    </Box>
  )
}

export default DateFilter