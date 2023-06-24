import styled from "@emotion/styled";
import { colors } from "styles/colors";
import { TextShadowWhite } from "styles/styled";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 70%;

`

export const WhiteTitle = styled.span`
    color: ${colors['primary-text']};
    ${TextShadowWhite()};
    font-size: 1.2em;
    align-self: center;
`