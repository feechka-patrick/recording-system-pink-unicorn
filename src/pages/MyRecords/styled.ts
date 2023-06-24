import styled from "@emotion/styled";
import { colors } from "styles/colors";
import { BoxShadow } from "styles/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    color: ${colors['primary-text']};
`

export const CardWrapper = styled.div`
    background-color: ${colors['disabled-text']};
    width: 700px;
    height: 50px;
    border-radius: 15px;
    &:hover{
        ${BoxShadow(colors['accent-text'])};
    };

    margin-right: 10px;
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 60px;
`

export const DateWrapper = styled.div`
    color: ${colors['primary-text']};
    font-size: 1.2rem;`


export const EquipmentInfoWrapper = styled.div`
    color: ${colors['primary-text']};
    font-size: 1.2rem;    
`

export const ButtonsWrapper = styled.div`
    margin-left: auto;
    align-self: center;
    display: flex;
    gap: 10px;
    
`

