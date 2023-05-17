import styled from '@emotion/styled'
import { TextShadowWhite } from '../../styles/styled'



export const HeaderWrapper = styled.div`
    height: 70px;
    background-color: var(--header-background);
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`


export const ItemListWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

export const ItemWrapper = styled.div`
    color: var(--primary-text);
    padding: 10px;
`

export const Item = styled.div`
    color: var(--primary-text);
    cursor: pointer;
    text-decoration: none;
    &:hover {
        ${TextShadowWhite()}
    }
`

export const AvatarWrapper = styled.div`
    margin-left: auto;
`