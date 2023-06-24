import { css } from "@emotion/react";
import { colors } from "./colors";
import styled from "@emotion/styled";


export const BoxShadow = (color : string) => css`
    -moz-box-shadow:0 0 10px ${color};
    -webkit-box-shadow:0 0 10px ${color};
    box-shadow:0 0 10px ${color};
`

export const TextShadow = (color : string) => css`
    -moz-text-shadow:0 0 10px ${color};
    -webkit-text-shadow:0 0 10px ${color};
    text-shadow: 0 0 10px ${color};
`


export const TextShadowWhite = () => TextShadow(colors['primary-text'])
export const TextShadowGreen = () => TextShadow(colors['accent-text'])

export const GreenTitle = styled.span`
    color: ${colors['accent-text']};
    &:hover{
        ${TextShadowGreen()};
    };
    margin-right: auto;
`
export const WhiteTitle = styled.span`
    color: ${colors['primary-text']};
    &:hover{
        ${TextShadowWhite()};
    };
    font-size: 1.2em;
`