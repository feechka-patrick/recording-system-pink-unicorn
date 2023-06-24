
import { Container } from "components/Container/styled";
import { WhiteTitle } from "styles/styled";
import * as S from './styled';

import RecordCard from "./components/RecordCard";
import Divider from '@mui/material/Divider';

const MyRecords = () => {
  
  return (
    <>
    <Container>
        <S.Wrapper>
            <WhiteTitle>Мои записи</WhiteTitle>
            <Divider sx={{width: '630px' }}>Сегодня</Divider>
            <RecordCard/>
            <RecordCard/>
            <RecordCard/>
        </S.Wrapper>
    </Container>
    </>
  );
};

export default MyRecords;