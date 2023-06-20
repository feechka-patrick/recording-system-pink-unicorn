import styled from "@emotion/styled";
import { colors } from "styles/colors";
import { TextShadowGreen, BoxShadow } from "styles/styled";


export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 10px;
    align-self: flex-start;
`

export const GreenTitle = styled.span`
    color: ${colors['accent-text']};
    &:hover{
        ${TextShadowGreen()};
    };
    margin-right: auto;
`

export const CardList = styled.div`
    display: flex;
    padding-top: 15px;
`

export const Card = styled.div`
    background-color: ${colors['disabled-text']};
    height: 150px;
    width: 200px;
    border-radius: 15px;
    &:hover{
        ${BoxShadow(colors['accent-text'])};
    };

    margin-right: 10px
`

