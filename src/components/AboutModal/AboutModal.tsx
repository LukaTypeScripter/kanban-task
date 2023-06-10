import React, { useContext, useEffect, useRef, useState } from 'react';
import { ModalCOnt } from '../AddNewBoard/NewBoardStyles/newBoardStyles';
import { DelateModal } from '../DelateModal/DelateStyles/delate';
import { Desc, SelectCont, Status, SubTasksCheckBox, SubTasksCompleted, Subtasks, TaskModalCOnt, Title, Todo } from './aboutStyles/aboutModal';
import verticalDots from '../../assets/icon-vertical-ellipsis.svg';
import { OptSelection, Options } from '../AddNewTask/NewTaskStyles/newTask';
import MainContext from '../../contexts/MainContext';
import AppContext from '../../contexts/Header';
import TaskDElateElapsis from '../TaskDelateElapsis/TaskDElateElapsis';

function AboutModal() {
  const { selectedTask, setIsOpenAboutModal, boardData, activeIndex,setBoaredData,setIsOpenDelElapsis,isOpenTaskDel,isOpenDelElapsis } = useContext(MainContext);
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
        const options = selectedBoard.columns.map((column, index) => {
          const isSelectedColumn =
            column.tasks.findIndex((task) => task === selectedTask) !== -1;
          const columnLabel = isSelectedColumn
            ? `${column.name} (!)`
            : column.name;
  
          return {
            label: columnLabel,
            value: index.toString(),
          };
        });
        const currentColumnIndex = options.findIndex(
          (option) => option.label.includes('(!)')
        );
        if (currentColumnIndex !== -1) {
          const currentColumnOption = options.splice(currentColumnIndex, 1);
          options.unshift(currentColumnOption[0]);
        }
  
        return options.map((option) => (
          <OptSelection key={option.value} value={option.value}>
            {option.label}
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
  const moveTaskToColumn = (columnIndex: number) => {
    const updatedBoardData = [...boardData];
    const selectedBoard = updatedBoardData[activeIndex];
    console.log(columnIndex)
    const selectedTaskIndex = selectedBoard.columns.findIndex(
      (column) => column.tasks.includes(selectedTask)
    );

    if (selectedTaskIndex !== -1) {
      const removedTask = selectedBoard.columns[selectedTaskIndex].tasks.splice(
        selectedBoard.columns[selectedTaskIndex].tasks.indexOf(selectedTask),
        1
      );
      selectedBoard.columns[columnIndex].tasks.push(removedTask[0]);
      setBoaredData(updatedBoardData);
    }
  };
  return (
    <ModalCOnt>
      <DelateModal ref={modalRef}>
        <TaskModalCOnt>
          <Title>{(selectedTask as any).title}</Title>
          <img src={verticalDots} alt="" onClick={() => setIsOpenDelElapsis(!isOpenDelElapsis)}/>
          {isOpenDelElapsis && (
    <TaskDElateElapsis/>
  )
  }
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
          <Options isToggled={isToggled} onChange={(e) => moveTaskToColumn(Number(e.target.value))}>
            {renderOptions()}
          </Options>
        </SelectCont>
      </DelateModal>
    </ModalCOnt>
  );
}

export default AboutModal;
