import {  ReactNode } from 'react'
import * as S from './styled'

const Container = (children: ReactNode) => {
  return (
    <S.Container>
        <S.Content>
            {children}
        </S.Content>
    </S.Container>
  );
};

export default Container;