import React, { useContext, useState } from 'react';
import {
  Board,
  Cols,
  ColName,
  Task,
  TaskTitle,
  NumOfSubTAsks,
  AddNewCol,
} from './MainPAgeStyles/mainPage';
import Data from '../../data.json';
import MainContext, { BoardData } from '../../contexts/MainContext';
import AppContext from '../../contexts/Header';
import { SideBarClosed, Toggle } from '../NavModal/NavModalStyles/navModal';
import uncrossedEye from '../../assets/icon-show-sidebar.svg'




const MainPage: React.FC = () => {
  const { board,EdiModalOpen,setSelectedTask,setIsOpenAboutModal,isOpenAboutModal,setBoaredData,boardData } = useContext(MainContext);
 const {isOpen,setIsOpen} = useContext(AppContext)
  
  const { isToggled } = useContext(AppContext);
  if (!board) return null;

 const handleOpenSpecificTask = (task:any) => {
  setSelectedTask(task);
  console.log('clicked ' , task)
  setIsOpenAboutModal(!isOpenAboutModal)
 }


  return (
    <>
  
      <Board key={board.name} isToggled={isToggled} isOpen={isOpen}>
        {!isOpen && (
 <SideBarClosed onClick={() => setIsOpen(!isOpen)}>
 <Toggle>
 <img src={uncrossedEye} alt="" />
 </Toggle>

</SideBarClosed>
        )}
     
        {board.columns.map((column) => (
          <Cols key={column.name}>
            <ColName>{column.name}</ColName>
            
            {column.tasks.map((task) => (
              <Task key={task.title} isToggled={isToggled} draggable  onClick={() => handleOpenSpecificTask(task)}>
                <TaskTitle isToggled={isToggled}>{task.title}</TaskTitle>
                <NumOfSubTAsks>
                  {task.subtasks.filter((subtask) => !subtask.isCompleted).length} of {task.subtasks.length} subtasks
                </NumOfSubTAsks>
              </Task>
            ))}
          </Cols>
        ))}
        
          <AddNewCol isToggled={isToggled} onClick={EdiModalOpen} >+ new column</AddNewCol>
         
      </Board>
    </>
  );
};

export default MainPage;
