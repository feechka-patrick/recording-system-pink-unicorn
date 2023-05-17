import Button from '@mui/material/Button';
import * as S from './styled'
import { PropsWithChildren } from 'react';

type PropsType = {
    title: string;
    onPaymentClick?: () => {};
    onRecordClick?: () => {};
} 

const Card = (props: PropsWithChildren<PropsType>) => {
  return (
    <>
      <S.CardWrapper>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardBody>
            <Button sx={{ marginBottom: 1, borderRadius: 3 }} color="primary" variant="outlined">Запись</Button>
            <Button sx={{ marginBottom: 1, borderRadius: 3 }} color="primary" variant="outlined">Оплата</Button>
        </S.CardBody>
        <S.CardFooter>
            { props.children }
        </S.CardFooter>
      </S.CardWrapper>
    </>
  );
};

export default Card;