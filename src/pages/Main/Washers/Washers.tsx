import CardCat from '../../../components/CardCat/CardCat';
import * as S from './styled';


const Washers = () => {
  return (
    <>
      <S.SectionWrapper>
        <S.GreenTitle>Оборудование ##24351</S.GreenTitle>
        <S.CardList>
            <CardCat title='washer#1'/>
            <CardCat title='washer#2'/>
            <CardCat title='washer#3'/>
        </S.CardList>
      </S.SectionWrapper>
    </>
  );
};

export default Washers;