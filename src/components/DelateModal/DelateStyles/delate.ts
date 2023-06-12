import styled from "styled-components";
import { DefaultStyles } from "../../../RootStyles";
const {DarkGray} = DefaultStyles.colors
export const DelateModal = styled.div<{isToggled:boolean}>`
  background-color: ${props => props.isToggled ? "#fff" : DarkGray};
  border-radius: 6px;
  max-height: 90%;
  padding: 24px;
  width: 343px;
  @media only screen and (min-width: 768px){

    padding: 32px;
    width: 480px;
  }


`;

export const DelateHeader = styled.h3`
  color: ${DefaultStyles.colors.Red};
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
`;

export const Premisinon = styled.p`
  color: ${DefaultStyles.colors.MediumGray};
  margin: 24px 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
`;

export const DelateModalBtn = styled.div`
 @media only screen and (min-width: 768px){
  display: flex;
    gap: 16px;
 }
   


`
export const CancelBtn = styled.button<{isToggled:boolean}>`
   background-color: ${props => props.isToggled ? "rgba(99,95,199,.1)" :"#fff"};
    color: ${DefaultStyles.colors.MainPurple};
    margin-bottom: 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    height: 40px;
    line-height: 23px;
    padding: 8px;
    width: 100%;
    outline: none;
    border: none;
`
export const DelateBtn = styled.button`
background-color: ${DefaultStyles.colors.Red};
    color: ${DefaultStyles.colors.White};
margin-bottom: 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    height: 40px;
    line-height: 23px;
    padding: 8px;
    width: 100%;
    outline: none;
    border: none;
    &:hover{
      background: #FF9898;
    }
`