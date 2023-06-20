import styled from "@emotion/styled";
import { colors } from "styles/colors";
import { BoxShadow } from "styles/styled";

export const CardWrapper = styled.div`
    background-color: ${colors['disabled-text']};
    width: 200px;
    border-radius: 15px;
    &:hover{
        ${BoxShadow(colors['accent-text'])};
    };

    margin-right: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const CardTitle = styled.span`
    color: ${colors['primary-text']};
`

export const CardBody = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
`

export const ButtonWrapper = styled.div`
    padding-bottom: 10px;
    width: 100%;
`

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`