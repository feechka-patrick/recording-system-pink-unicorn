import { css } from "@emotion/react";
import { colors } from "./colors";


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