import styled from "styled-components";
import { DefaultStyles } from "../../../RootStyles";

const {DarkGray,White} = DefaultStyles.colors


export const HeaderCont = styled.header<{isToggled:boolean}>`
width: 100%;
display: flex;
padding:  16px;
background-color: ${props => props.isToggled ? "" : DarkGray};
`

export const Imgs = styled.img`

`

export const HeaderName = styled.div<{isToggled:boolean}>`
align-items: center;
display: flex;
gap: 8px;
margin-left: 16px;
margin-right: auto;
color: ${props => props.isToggled ? "" : White};
`
export const AddBtn = styled.button`
align-items: center;
display: flex;
justify-content:center;
color: ${DefaultStyles.colors.White};
border-radius: 24px;
background-color: ${DefaultStyles.colors.MainPurple};
padding:10px 18px;
margin-right: 16px;
outline: none;
border:none;
&:hover {
    background-color: ${DefaultStyles.colors.MainPurpleHover};
}
`
export const VerticalImg = styled.img`
height: 16px;
cursor: pointer;
margin-top: 8px;
`
export const AddToDos = styled.div`

`