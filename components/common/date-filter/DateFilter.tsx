import React,{useState} from 'react'

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import {searchFromValue} from "../../../model/searchFormValue.type";
import Grid from "@mui/material/Grid";

interface DateFilterPropsTyp {
    departureDate: Date,
    setDepartureDate: React.Dispatch<React.SetStateAction<Date>>,
}

export default function DateFilter ({departureDate, setDepartureDate}:DateFilterPropsTyp) {

    const days = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
    const months = ['اسفند','بهمن','دی','آذر','آبان','مهر','شهریور','مرداد','تیر','خرداد','اردیبهشت','فروردین',];

    const dateOptionCreator = () => {
        let index = 0;
        let dateOption = [];

        for (let i=1; i<=4; ++i){
            let tomorrow = new Date(departureDate);
            tomorrow.setDate(tomorrow.getDate() - i)
            dateOption.push({id: index++, value: tomorrow, title: tomorrow.toLocaleDateString('fa-IR'), dayNum: tomorrow.getDay(), day: days[tomorrow.getDay()], month: months[tomorrow.getMonth()]})
        }

        const today = new Date(departureDate);
        dateOption.push({id: index++, value: today, title: today.toLocaleDateString('fa-IR'), dayNum: today.getDay(), day: days[today.getDay()], month: months[today.getMonth()]});

        for (let i=1; i<=4; ++i){
            let tomorrow = new Date(departureDate);
            tomorrow.setDate(tomorrow.getDate() + i)
            dateOption.push({id: index++, value: tomorrow, title: tomorrow.toLocaleDateString('fa-IR'), dayNum: tomorrow.getDay(), day: days[tomorrow.getDay()], month: months[tomorrow.getMonth()]})
        }

        return dateOption
    }


    const [value, setValue] = useState((dateOptionCreator().length-1)/2);

    const handleClick = (id: number) => {
        const selectedDate = dateOptionCreator()[id].value
        setDepartureDate(new Date(selectedDate))

        // setValue(id)

        const currDateOptions = dateOptionCreator()
        const selectedDateIndex = currDateOptions.findIndex(item => item.value === selectedDate)
        setValue((selectedDateIndex !== -1 ? selectedDateIndex : (currDateOptions.length-1)/2));

        // console.log(selectedDateIndex);
      };

  return (
    <Grid item container width={'100%'} sx={{ bgcolor:'grey.900',display:'flex',justifyContent:'center' }}>
      <Tabs
          value={value}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          textColor="secondary" 
          indicatorColor="secondary"
          sx={{ bgcolor:'common.white',width:'100%',height:'62px',border:'1px solid', borderColor:'divider',borderRadius:'10px',
          [`& .${tabsClasses.scrollButtons}`]: {'&.Mui-disabled': { opacity: 0.3 }},
          }}
        
      >
        {dateOptionCreator().map((item:any)=>(
          <Tab 
              key={item.id}
              label={`${item.title} ${item.day}`}
              onClick={()=>handleClick(item.id)}
              sx={{width: '70px', height:'62px',borderLeft:'1px solid',borderColor:'divider',fontWeight:'bold',
                    '&.Mui-selected':{border:'2px solid',borderColor:'secondary',borderRadius:'5px'}
                }}
          />
        ))}
        
      </Tabs>
    </Grid>
  )
}