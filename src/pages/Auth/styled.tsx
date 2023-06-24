import styled from "@emotion/styled";
import { colors } from "styles/colors";
import { BoxShadow, TextShadowWhite } from "styles/styled";

export const AuthWrapper = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    height: 100%;

`

export const AuthBox = styled.div`
    display: flex;
    
    flex-direction: column;
    

    @media (min-width: 500px) {
        min-height: 300px;
        min-width: 400px;
    }

    border-radius: 15px;

    padding: 40px;
`

export const WhiteTitle = styled.div`
    color: ${colors['primary-text']};
    &:hover{
        ${TextShadowWhite()};
    };
    font-size: 1.2em;
    align-self: center;
    cursor: default;
`