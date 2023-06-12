import styled from "styled-components";
import { DefaultStyles } from "../../../RootStyles";

const { DarkGray, White } = DefaultStyles.colors;

export const HeaderCont = styled.header<{ isToggled: boolean }>`
  width: 100%;
  display: flex;
  padding: 16px;
  background-color: ${(props) => (props.isToggled ? "" : DarkGray)};
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1;
`;
export const LogoCont = styled.div`
  @media only screen and (min-width: 768px) {
    align-items: center;
    display: flex;
    gap: 15px;
    padding-left: 10px;
    width: 245px;
  }
`;
export const ProjectName = styled.h3<{ isToggled: boolean }>`
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    color: ${(props) => (props.isToggled ? "" : White)};
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Imgs = styled.img``;
export const ImgsPlus = styled.img`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const AddNewTasks = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const HeaderName = styled.div<{ isToggled: boolean }>`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-left: 16px;
  margin-right: auto;
  color: ${(props) => (props.isToggled ? "" : White)};
  img {
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;
export const AddBtn = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${DefaultStyles.colors.White};
  border-radius: 24px;
  background-color: ${DefaultStyles.colors.MainPurple};
  padding: 10px 18px;
  margin-right: 16px;
  outline: none;
  border: none;
  &:hover {
    background-color: ${DefaultStyles.colors.MainPurpleHover};
  }
  @media only screen and (min-width: 768px) {
    height: 48px;
    margin-right: 24px;
    width: 164px;
  }
`;
export const VerticalImg = styled.img`
  height: 16px;
  cursor: pointer;
  margin-top: 8px;
  @media only screen and (min-width: 768px) {
    height: 20px;
    width: 5px;
  }
`;
export const AddToDos = styled.div``;
