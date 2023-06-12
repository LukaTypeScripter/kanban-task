import styled from "styled-components";
import { DefaultStyles } from "../../../RootStyles";
const {VeryDarkGray} = DefaultStyles.colors
export const ElapsisMenu = styled.div<{isToggled:boolean}>`
background-color: ${props => props.isToggled ? "#fff" : VeryDarkGray};
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(54,78,126,.25);
    color: #828fa3;
    padding: 16px;
    position: absolute;
    right: -10%;
    top: 150%;
    width: 40%;
    right: 2%;
    top: 100%;
    width: 150px;
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
    text-transform: capitalize;
`

export const Delate = styled.p`
    color: #ea5555;
    margin-top: 16px;
    cursor: pointer;
`
