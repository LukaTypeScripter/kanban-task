import React, { useContext } from 'react'
import { ModalCOnt } from '../AddNewBoard/NewBoardStyles/newBoardStyles'
import { CancelBtn, DelateBtn, DelateHeader, DelateModal, DelateModalBtn, Premisinon } from '../DelateModal/DelateStyles/delate'
import MainContext from '../../contexts/MainContext';

function TaskDelateModal() {
    const {selectedTask,activeIndex,boardData,setBoaredData,setIsOpenTaskDel,isOpenTaskDel,} = useContext(MainContext)
    const handleDeleteTask = () => {
        if (selectedTask && activeIndex !== null) {
          const updatedBoardData = [...boardData];
          const selectedBoard = updatedBoardData[activeIndex];
          const columnIndex = selectedBoard.columns.findIndex((column) =>
            column.tasks.includes(selectedTask)
          );
    
          if (columnIndex !== -1) {
            const taskIndex = selectedBoard.columns[columnIndex].tasks.findIndex(
              (task) => task === selectedTask
            );
    
            if (taskIndex !== -1) {
              selectedBoard.columns[columnIndex].tasks.splice(taskIndex, 1);
              setBoaredData(updatedBoardData);
            }
          }
        }
      };
  return (
    <ModalCOnt>
    <DelateModal>
      <DelateHeader>Delate this Task ?</DelateHeader>
      <Premisinon>
      Are you sure you want to delete the "{ (selectedTask as any).title }" task and its subtasks? This action cannot be reversed.
      </Premisinon>
      <DelateModalBtn>
        <DelateBtn onClick={handleDeleteTask} >Delate</DelateBtn>
        <CancelBtn onClick={() => setIsOpenTaskDel(!isOpenTaskDel)}>Cancel</CancelBtn>
      </DelateModalBtn>
    </DelateModal>
    </ModalCOnt>
  )
}

export default TaskDelateModal