import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from "components/Container/styled";
import * as S from './styled'

const InfoPage = () => {
  return (
    <Container>
      <S.Wrapper>
       <S.WhiteTitle>Вопросы&Ответы</S.WhiteTitle>
        <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Какие часы работы прачечной ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Прачечная общежития работает с 9:00 - 22:00 с понедельника по пятницу.
                </Typography>
                <Typography>
                  Обед в прачечной с 13:00 - 14:00. Учитывайте это, когда планируете время стирки
                </Typography>
              </AccordionDetails>
      </Accordion>
      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Как связаться с коммендантом общежития ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  
                </Typography>
              </AccordionDetails>
      </Accordion>

      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Что делать, если не работает оплата по QR-коду ? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  При неполадках при оплате или сбое при работе машинок можно обратиться по номеру компании,
                  обслуживающей оборудование - 8495557645
                </Typography>
              </AccordionDetails>
      </Accordion>

      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Какое есть ограничение по количеству записей ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  В день можно сделать не более двух записей на стиральную машинку и не более двух на сушилку
                </Typography>
              </AccordionDetails>
      </Accordion>

      <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>С кем мне связаться, если все еще остались вопросы ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  По вопросам, касающихся работы сайта, можно связаться с администратором 
                  в телеграме @laundromat-support                     
                </Typography>
              </AccordionDetails>
      </Accordion>
      
      </S.Wrapper>
    </Container>
  );
};


// Какое есть ограничение по количеству записей ? не больше двух записей в день
// С кем мне связаться, если все еще остались вопросы ?
export default InfoPage;