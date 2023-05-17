import Dryers from './Dryers/Dryers';
import Washers from './Washers/Washers';
import * as S from './styled';

const Main = () => {
  return (
    <S.Container>
      <Dryers/>
      <Washers/>
    </S.Container>
  );
};

export default Main;
