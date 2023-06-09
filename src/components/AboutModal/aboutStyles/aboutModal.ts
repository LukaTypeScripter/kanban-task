import styled from "styled-components";


export const TaskModalCOnt = styled.div`
align-items: center;
display: flex;
gap: 16px;
justify-content: space-between;
margin-bottom: 24px;
position: relative;
`

export const Title = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
`

export const Desc = styled.p`
    color: #828fa3;
    margin-bottom: 24px;
    font-size: 13px;
    font-weight: 500;
    line-height: 23px;
`

export const SubTasksCompleted = styled.p`
    color: #828fa3;
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.4px;
    line-height: 15px;
`
export const Subtasks = styled.div`
    align-items: center;
    background: #f4f7fd;
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
export const Todo = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
`

export const SelectCont = styled.div`
    margin-top: 24px;
`
export const Status = styled.label`
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
`
