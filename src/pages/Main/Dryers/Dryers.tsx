import Card from '../../../components/Card/Card';
import * as S from './styled';


const Dryers = () => {
  return (
    <>
       <S.SectionWrapper>
        <S.GreenTitle>Оборудование ##24351dryer</S.GreenTitle>
        <S.CardList>
            <Card title='#1'/>
            <Card title='#2'/>
            <Card title='#3'/>
        </S.CardList>
      </S.SectionWrapper>
    </>
  );
};

export default Dryers;