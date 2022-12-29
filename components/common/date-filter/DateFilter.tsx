import React,{useState} from 'react'

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import {searchFromValue} from "../../../model/searchFormValue.type";

interface DateFilterPropsTyp {
    departureDate: Date,
    setDepartureDate: React.Dispatch<React.SetStateAction<Date>>,
}

export default function DateFilter ({departureDate, setDepartureDate}:DateFilterPropsTyp) {

    const days = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];

    const dateOptionCreator = () => {
        // const today = new Date(departureDate);
        let index = 0;
        let dateOption = [];

        for (let i=1; i<=5; ++i){
            let tomorrow = new Date(departureDate);
            tomorrow.setDate(tomorrow.getDate() - i)
            dateOption.push({id: index++, title: tomorrow.toLocaleDateString(), day: days[tomorrow.getDay()]})
        }

        const today = new Date(departureDate);
        dateOption.push({id: index++, title: today.toLocaleDateString(), day: days[today.getDay()]});

        for (let i=1; i<=5; ++i){
            let tomorrow = new Date(departureDate);
            tomorrow.setDate(tomorrow.getDate() + i)
            dateOption.push({id: index++, title: tomorrow.toLocaleDateString(), day: days[tomorrow.getDay()]})
        }

        console.log(dateOption.length)
        return dateOption
    }


    const [value, setValue] = useState(dateOptionCreator().length-1/2);

    const handleClick = (id:number) => {
        setValue(id);
      };

  return (
    <Box sx={{ bgcolor:'grey.900',display:'flex',justifyContent:'center' }}>
      <Tabs
          value={value}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          textColor="secondary" 
          indicatorColor="secondary"
          sx={{ bgcolor:'common.white',width:'850px',height:'62px',border:'1px solid', borderColor:'divider',borderRadius:'10px',
          [`& .${tabsClasses.scrollButtons}`]: {'&.Mui-disabled': { opacity: 0.3 }},
          }}
        
      >
        {dateOptionCreator().map((item:any)=>(
          <Tab 
              key={item.id}
              label={`${item.title} ${item.day}`}
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