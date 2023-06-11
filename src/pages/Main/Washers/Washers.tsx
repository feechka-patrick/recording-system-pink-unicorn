import CardCat from '@components/CardCat/CardCat';
import * as S from './styled';


const Washers = () => {
  return (
    <>
      <S.SectionWrapper>
        <S.GreenTitle>Стиральные машины</S.GreenTitle>
        <S.CardList>
            <CardCat title='#1'/>
            <CardCat title='#2'/>
            <CardCat title='#3'/>
        </S.CardList>
      </S.SectionWrapper>
    </>
  );
};

export default Washers;