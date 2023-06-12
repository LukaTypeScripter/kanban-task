import styled from "styled-components";
import { DefaultStyles } from "../../../RootStyles";
const { White,VeryDarkGray} = DefaultStyles.colors

export const TaskModalCOnt = styled.div`
align-items: center;
display: flex;
gap: 16px;
justify-content: space-between;
margin-bottom: 24px;
position: relative;
`

export const Title = styled.p<{isToggled:boolean}>`
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    color: ${props => props.isToggled ? "" : White};
`

export const Desc = styled.p<{isToggled:boolean}>`
    color: ${props => props.isToggled ? "#828fa3" : White};
    margin-bottom: 24px;
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
`

export const SubTasksCompleted = styled.p<{isToggled:boolean}>`
    color: ${props => props.isToggled ? "#828fa3" : White};
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4px;
    line-height: 15px;
`
export const Subtasks = styled.div<{isToggled:boolean}>`
    align-items: center;
    background: ${props => props.isToggled ? "#f4f7fd" :VeryDarkGray };
    border-radius: 4px;
    display: flex;
    gap: 16px;
    margin-top: 8px;
    padding: 13px 12px;
`
export const SubTasksCheckBox = styled.input`
    min-height: 16px;
    min-width: 16px;
    &:checked{
        accent-color: #635fc7; 
    }
`
export const Todo = styled.p<{isToggled:boolean}>`
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    color: ${props => props.isToggled ? "" : White};
`

export const SelectCont = styled.div`
    margin-top: 24px;
`
export const Status = styled.label<{isToggled:boolean}>`
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    color: ${props => props.isToggled ? "" : White};
`
