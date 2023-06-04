import styled from "styled-components";
import { DefaultStyles } from "../../../RootStyles";
const {DarkGray,LigthGray,VeryDarkGray,White,MediumGray} = DefaultStyles.colors
export const DropDownContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: -100vh;
  left: 0;
  padding: 24px 55px;
  position: absolute;
  right: 0;
  top: 64px;
`;

export const DropDownModal = styled.div<{isToggled:boolean}>`
  padding: 16px 0;
  background-color: ${props => props.isToggled ?  White: DarkGray};
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;
  color: ${DefaultStyles.colors.MediumGray};
  margin: 0 0 24px 19px;
`;

export const DropDownBoards = styled.div``;

export const DropDownBoard = styled.div<{ active: boolean }>`
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  margin-right: 24px;
  padding: 15px 24px;
  transition: 0.3s;
  background-color: ${(props) => (props.active ? "blue" : "none")};
  color: ${(props) => (props.active ? "white" : MediumGray)};
  background: ${(props) => (props.active ? "#635FC7" : "")};
  border-radius: ${(props) => (props.active ? "0px 100px 100px 0px" : "")};
`;

export const BoardIcon = styled.img`
  margin-right: 14px;
`;

export const AddNewTask = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  margin-right: 24px;

  padding: 15px 24px;
  transition: 0.3s;
`;

export const AddBoardIcon = styled.img`
  margin-right: 14px;

  -webkit-filter: invert(39%) sepia(47%) saturate(748%) hue-rotate(203deg)
    brightness(94%) contrast(93%);
  filter: invert(39%) sepia(47%) saturate(748%) hue-rotate(203deg)
    brightness(94%) contrast(93%);
`;

export const AddBoardText = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: ${DefaultStyles.colors.MainPurple};
`;

export const TogglerTheme = styled.div<{isToggled:boolean}>`
  align-items: center;
  background-color: ${({isToggled}) => isToggled ? LigthGray : VeryDarkGray };
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 16px 16px 0;
  padding: 14px;
  border-radius: 6px;
`;

export const Switch = styled.label`
  display: inline-block;
  height: 20px;
  margin: 0;
  position: relative;
  width: 40px;
 
`;

export const Inputs = styled.input`
 height: 0;
    opacity: 0;
    width: 0;
`

export const Slider = styled.span<{isToggled: boolean}>`
    background-color: ${DefaultStyles.colors.MainPurple};
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
    border-radius: 34px;
    &::before {
        background-color: #fff;
    bottom: 3px;
    content: "";
    height: 14px;
    left: 3px;
    position: absolute;
    transition: .4s;
    width: 14px;
    border-radius: 50%;
    transform: ${({ isToggled }) => (isToggled ? "translateX(0)" : "translateX(120%)")};
    }
    
`
