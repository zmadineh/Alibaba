import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '../../public/Assets/Images/common_question/expand.svg'
import Question_icon from '../../public/Assets/Images/common_question/question_icon.svg'
import getQuestion from '../../data/common_questions/Questions_data';

interface propsType{
  category:string
}

const Quetions = (props:propsType) => {
  const {category} = props;
  const values = getQuestion(category);
   return(
    
    <>
    {values.map(item=>{
      return(
        <Accordion disableGutters square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            padding:'16px',
            '& .MuiAccordionSummary-content' : {
              margin : 0
            }
          }}
        >
          <Question_icon backgorundColor='yellow' color='#17a2b8'/>
          <Typography fontWeight={600} sx={{color:'#4b5259',marginLeft:'12px'}}>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            padding:'16px 64px'
          }}>
          <Typography>
            {item.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
    })}
    </>
   )
}
export default Quetions