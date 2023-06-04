import styled from "styled-components";

import { DefaultStyles } from "../../../RootStyles";
const { LigthGray, MediumGray,VeryDarkGray,DarkGray } = DefaultStyles.colors;
export const Board = styled.div<{isToggled:boolean}>`
  display: flex;
  overflow-x: scroll;
  gap: 24px;
  padding: 88px 16px 24px;
  background-color: ${props => props.isToggled ?   LigthGray : VeryDarkGray };
  min-height: 100vh;
`;

export const Cols = styled.div`
  min-width: 280px;
`;

export const ColName = styled.p`
  color: ${MediumGray};
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  line-height: 15px;
`;

export const Task = styled.div<{isToggled:boolean}>`
background-color: ${props => props.isToggled ? '#fff' : DarkGray};
border-radius: 8px;
box-shadow: 0 4px 6px rgba(54,78,126,.102);
    margin-bottom: 20px;
    padding: 23px 16px;
    width: 280px;
`

export const TaskTitle = styled.p<{isToggled:boolean}>`
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    color: ${props => props.isToggled ? "" : '#fff'};
`
export const NumOfSubTAsks = styled.p`
   color: ${MediumGray};
    margin-top: 8px;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
`