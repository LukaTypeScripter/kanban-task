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
import NavModal from '../NavModal/NavModal';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const MainPage: React.FC = () => {
  const { board, EdiModalOpen, setSelectedTask, setIsOpenAboutModal, isOpenAboutModal, setBoaredData, boardData } = useContext(MainContext);
  const { isOpen, setIsOpen } = useContext(AppContext);

  const { isToggled } = useContext(AppContext);
  if (!board) return null;

  const handleOpenSpecificTask = (task: any) => {
    setSelectedTask(task);
    console.log('clicked ', task);
    setIsOpenAboutModal(!isOpenAboutModal);
  };

  const handleDragEnd = (result: any) => {
    const { destination, source } = result;
  
    // შევამოწმოთ თუ კონტეინერი გარეთ არის
    if (!destination) {
      return;
    }
  
    // შევამოწმოთ თუ კონტეინერი გარეთ დაიდროპა
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
  
    // ვიპოვოთ source და destinationColumn ი
    const sourceColumn = board.columns.find(
      (column) => column.name === source.droppableId
    ) || { tasks: [] }; // Provide a default value if sourceColumn is not found
  
    const destinationColumn = board.columns.find(
      (column) => column.name === destination.droppableId
    );
  
    // წავშალოთ სხვა კოლუმში წასულის პირვანდელი ადგილი
    const [task] = sourceColumn.tasks.splice(source.index, 1);
  
    // დავამატოთ კოლუმნში
    if (destinationColumn) {
      destinationColumn.tasks.splice(destination.index, 0, task);
    } else {
      sourceColumn.tasks.splice(destination.index, 0, task);
    }
  
    // Update the board data
    setBoaredData([...boardData]); // Use the spread operator to create a new array
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Board key={board.name} isToggled={isToggled} isOpen={isOpen}>
          {isOpen && (
            <NavModal />
          )}
          {!isOpen && (
            <SideBarClosed isToggled={isToggled} onClick={() => setIsOpen(!isOpen)}>
              <Toggle>
                <img src={uncrossedEye} alt="" />
              </Toggle>
            </SideBarClosed>
          )}

{board.columns.map((column) => (
  <Cols key={column.name}>
    <ColName>{column.name}</ColName>
    <Droppable droppableId={column.name}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {column.tasks.map((task, index) => {
            // Generate a unique draggableId for each task
            const draggableId = `${column.name}-${task.title}`;

            return (
              <Draggable key={draggableId} draggableId={draggableId} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Task key={task.title} isToggled={isToggled} draggable onClick={() => handleOpenSpecificTask(task)}>
                      <TaskTitle isToggled={isToggled}>{task.title}</TaskTitle>
                      <NumOfSubTAsks>
                        {task.subtasks.filter((subtask) => !subtask.isCompleted).length} of {task.subtasks.length} subtasks
                      </NumOfSubTAsks>
                    </Task>
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Cols>
))}

          <AddNewCol isToggled={isToggled} onClick={EdiModalOpen}>+ new column</AddNewCol>

        </Board>
      </DragDropContext>
    </>
  );
};

export default MainPage;
