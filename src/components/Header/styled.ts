import styled from '@emotion/styled'
import { TextShadowWhite } from 'styles/styled'



export const HeaderWrapper = styled.div`
    height: 70px;
    background-color: var(--header-background);
    display: flex;
    align-items: center;
    padding: 0 5%;
    @media (max-width: 870px) {
        padding: 0 30px;
    }
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

export const RightMenuWrapper = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 8px;
`

export const IconLogoutWrapper = styled.div`
    height: 24px;
`