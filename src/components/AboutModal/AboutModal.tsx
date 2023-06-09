import React, { useContext, useEffect, useRef } from 'react';
import { ModalCOnt } from '../AddNewBoard/NewBoardStyles/newBoardStyles';
import { DelateModal } from '../DelateModal/DelateStyles/delate';
import { Desc, SelectCont, Status, SubTasksCheckBox, SubTasksCompleted, Subtasks, TaskModalCOnt, Title, Todo } from './aboutStyles/aboutModal';
import verticalDots from '../../assets/icon-vertical-ellipsis.svg';
import { OptSelection, Options } from '../AddNewTask/NewTaskStyles/newTask';
import MainContext from '../../contexts/MainContext';
import AppContext from '../../contexts/Header';

function AboutModal() {
  const { selectedTask, setIsOpenAboutModal, boardData, activeIndex,setBoaredData } = useContext(MainContext);
  const { isToggled } = useContext(AppContext);

  if (!selectedTask) return null;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpenAboutModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  
  
  const renderOptions = () => {
    if (activeIndex !== null) {
      const selectedBoard = boardData[activeIndex];
      if (selectedBoard) {
        return selectedBoard.columns.map((column, index) => (
          <OptSelection key={column.name}>
            {column.name}
          </OptSelection>
        ));
      }
    }
    return null;
  };

 

  const handleSubtaskToggle = (subtask: any) => {
    const updatedBoardData = [...boardData];
    const selectedBoard = updatedBoardData[activeIndex];
  
    selectedBoard.columns.some((column) => {
      return column.tasks.some((task) => {
        const selectedSubtask = task.subtasks.find((s: any) => s === subtask);
        if (selectedSubtask) {
          selectedSubtask.isCompleted = !selectedSubtask.isCompleted;
          setBoaredData(updatedBoardData);
          return true; // Exit the loop after updating the subtask
        }
        return false;
      });
    });
  };

  return (
    <ModalCOnt>
      <DelateModal ref={modalRef}>
        <TaskModalCOnt>
          <Title>{(selectedTask as any).title}</Title>
          <img src={verticalDots} alt="" />
        </TaskModalCOnt>
        <Desc>{(selectedTask as any).description}</Desc>
        <SubTasksCompleted>{(selectedTask as any).subtasksCompleted}</SubTasksCompleted>

        {(selectedTask as any).subtasks.map((subtask: any,index:any) => (
          <Subtasks key={index}>
            <SubTasksCheckBox
              checked={!subtask.isCompleted}
              type='checkbox'
              onChange={() => handleSubtaskToggle( subtask)}
            >
              {subtask.name}
            </SubTasksCheckBox>
            <Todo>{subtask.title}</Todo>
          </Subtasks>
        ))}

        <SelectCont>
          <Status>Current Status</Status>
          <Options isToggled={isToggled}>
            {renderOptions()}
          </Options>
        </SelectCont>
      </DelateModal>
    </ModalCOnt>
  );
}

export default AboutModal;
