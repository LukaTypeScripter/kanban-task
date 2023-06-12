import styled from "styled-components";
import { DefaultStyles } from "../../../RootStyles";
import arrowDown from '../../../assets/icon-chevron-down.svg'
const {MediumGray,DarkGray,White} = DefaultStyles.colors
export const Description = styled.textarea<{isToggled:boolean}>`

margin-bottom: 24px;
border: 1px solid rgba(130,143,163,.25);
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    height: 40px;
    padding: 8px 16px;
    width: 100%;
    height: 135px;
    resize: none;
    background-color: ${props => props.isToggled ? '' : DarkGray};
`



export const SelectCont = styled.div`
margin-top: 24px;
`

export const DescCont = styled.div`
margin-top: 24px;
`

export const Options = styled.select<{isToggled:boolean}>`

-webkit-appearance: none;
    appearance: none;
width: 100%;
background-image: url(${arrowDown});
background-position: right 16px top 50%;
background-repeat: no-repeat;
border: 1px solid #828fa340;
    border-radius: 4px;
    padding: 10px 20px;
background-color: ${props => props.isToggled ? "" : DarkGray};
color: ${props => props.isToggled ? "" : White};
`

export const OptSelection = styled.option`
    color:${MediumGray};
`