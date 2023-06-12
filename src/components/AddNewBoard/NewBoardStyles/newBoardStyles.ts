import styled from "styled-components";
import { DefaultStyles } from "../../../RootStyles";
const {DarkGray,White,MediumGray,Black,MainPurple} = DefaultStyles.colors
export const ModalCOnt = styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9;
    background-color: rgba(0,0,0,.5);
`


export const Modal = styled.div <{isToggled:boolean}>`
background-color: ${props => props.isToggled ?  White : DarkGray };
border-radius: 6px;
max-height: 90%;
overflow-y: scroll;

padding: 24px;
width: 343px;
@media only screen and (min-width: 768px){
    padding: 32px;
    width: 480px;
}
   
`


export const NewBoardHeader = styled.h3 <{isToggled:boolean}>`
 margin-bottom: 24px;
 color: ${props => props.isToggled ? "" : White};
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const  Lables = styled.label<{isToggled:boolean}>`
display: block;
color: ${props => props.isToggled ? MediumGray: White};
font-weight: 700;
font-size: 12px;
line-height: 15px;
margin-bottom: 8px;
`

export const BoardNameInp = styled.input<{isToggled:boolean}>`
border: 1px solid rgba(130, 143, 163, 0.25);
border-radius: 4px;
font-size: 15px;
font-weight: 500;
height: 40px;
padding: 8px 16px;
width: 100%;
text-transform: capitalize;
color: ${props => props.isToggled ? Black : White};
background-color: ${props => props.isToggled ? "" : DarkGray};
`
export const ModalCols = styled.div`

`


export const ModalCol = styled.div`
display: flex;
gap:16px;
align-items: center;
margin-bottom: 12px;
`
export const InputCont = styled.div`
    position: relative;
    width: 100%;
`






export const AddBtn = styled.button<{isToggled:boolean}>`
    align-items: center;
    display: flex;
    font-size: 16px;
    height: 40px;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.isToggled ? MainPurple: White};
    border-radius: 24px;
    color: ${props => props.isToggled ? White: MainPurple};
    font-size: 14px;
    font-weight: 700;
    margin-top: 24px;
    padding: 15px 18px;
    outline: none;
    border: none;
`
export const SecondBtn = styled.button`
 align-items: center;
    display: flex;
    font-size: 13px;
    height: 40px;
    justify-content: center;
    width: 100%;
    background-color: ${MainPurple};
    border-radius: 24px;
    color:${White};
    font-size: 14px;
    font-weight: 700;
    margin-top: 24px;
    padding: 15px 18px;
    outline: none;
    border: none;
    &:hover{
        background: #A8A4FF;
    }

`