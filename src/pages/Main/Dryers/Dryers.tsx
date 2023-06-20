import Card from 'components/Card/Card';
import * as S from './styled';


const Dryers = () => {
  return (
    <>
       <S.SectionWrapper>
        <S.GreenTitle>Сушилки</S.GreenTitle>
        <S.CardList>
            <Card title='#1'/>
            <Card title='#2'/>
        </S.CardList>
      </S.SectionWrapper>
    </>
  );
};

export default Dryers;