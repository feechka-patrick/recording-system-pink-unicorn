
import { Container } from 'components/Container/styled';
import Dryers from './Dryers/Dryers';
import Washers from './Washers/Washers';
import * as S from './styled';

const Main = () => {
  return (
    <Container>
      <S.MainWrapper>
        <Dryers/>
        <Washers/>
      </S.MainWrapper>
      
    </Container>
  );
};

export default Main;
