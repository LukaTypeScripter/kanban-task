import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Modal,
  NewBoardHeader,
  Lables,
  InputCont,
  BoardNameInp,
  ModalCOnt,
  ModalCols,
  ModalCol,
  AddBtn,
  SecondBtn,
} from "../AddNewBoard/NewBoardStyles/newBoardStyles";
import AppContext from "../../contexts/Header";
import {
  DescCont,
  Description,
  OptSelection,
  Options,
  SelectCont,
} from "./NewTaskStyles/newTask";
import cross from "../../assets/icon-cross.svg";
import MainContext, { Task } from "../../contexts/MainContext";
import DelateMOdal from "../DelateModal/DelateMOdal";


function AddNewTask() {
  const {
    isToggled,
    handleDeleteSubTasks,
    setSubTasks,
    subTasks,
    handleAddSubTask,
    setIsNewTask,
  } = useContext(AppContext);
  const {activeIndex } = useContext(MainContext);
  const {boardData,setBoaredData } = useContext(MainContext);
  //taking value and then makin sure that everything is valid then creating newTask also making sure index is not null
 
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");

  const handleCreateTask = () => {
    const newTask: Task = {
      title: taskName,
      description,
      status,
      subtasks: subTasks.map((subTaskTitle) => ({
        title: subTaskTitle,
        isCompleted: false,
      })),
    };

    setBoaredData(prevBoardData => {
      const updatedBoardData = [...prevBoardData];
      console.log("updt " + updatedBoardData)
      if (activeIndex !== null) {
        const selectedBoard = updatedBoardData[activeIndex];
        console.log(selectedBoard )
        console.log(selectedBoard)
        if (selectedBoard) {
          const columnIndex = selectedBoard.columns.findIndex(
            (column) => column.name === status
          );
            console.log("culumindex " + columnIndex)
          if (columnIndex !== -1) {
            if (!selectedBoard.columns[columnIndex].tasks) {
              selectedBoard.columns[columnIndex].tasks = []; // Initialize tasks array if it doesn't exist
            }
            selectedBoard.columns[columnIndex].tasks.push(newTask);
          }
        }
      }

      return updatedBoardData;
    });

    // Reset the form fields and subtasks
    setTaskName("");
    setDescription("");
    setStatus("Todo");
    setSubTasks([""]);

    setIsNewTask(false);
  };

  const renderOptions = () => {
    if (activeIndex !== null) {
      const selectedBoard = boardData[activeIndex];
      if (selectedBoard) {
        return selectedBoard.columns.map((column) => (
          <OptSelection key={column.name}>{column.name}</OptSelection>
        ));
      }
    }
    return null;
  };
  return (
    <ModalCOnt>
      <Modal isToggled={isToggled}>
        <NewBoardHeader isToggled={isToggled}>
          Add New Task
          <img src={cross} alt="" onClick={() => setIsNewTask(false)} />
        </NewBoardHeader>
        <Lables isToggled={isToggled}>Task Name</Lables>
        <InputCont>
          <BoardNameInp
            id="taskNameInput"
            isToggled={isToggled}
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </InputCont>
        <DescCont>
          <Lables isToggled={isToggled}>Description</Lables>
          <Description
            id="descriptionInput"
            isToggled={isToggled}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DescCont>
        <Lables isToggled={isToggled}>SubTasks</Lables>
        <ModalCols>
          {subTasks.map((input, index) => (
            <ModalCol key={index}>
              <InputCont>
                <BoardNameInp
                  isToggled={isToggled}
                  key={index}
                  type="text"
                  value={input}
                  onChange={(e) => {
                    const newInputs = [...subTasks];
                    newInputs[index] = e.target.value;
                    setSubTasks(newInputs);
                  }}
                />
              </InputCont>
              <img
                src={cross}
                onClick={() => handleDeleteSubTasks(index)}
                alt=""
              />
            </ModalCol>
          ))}
          <AddBtn onClick={handleAddSubTask} isToggled={isToggled}>
            + Add SubTask
          </AddBtn>
        </ModalCols>
        <SelectCont>
          <Lables isToggled={isToggled}>Current Status</Lables>
          <Options
            isToggled={isToggled}
            id="statusInput"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
           {renderOptions()}
          </Options>
        </SelectCont>
        <SecondBtn onClick={handleCreateTask}>Create Task</SecondBtn>
      </Modal>
      
    </ModalCOnt>
  );
}

export default AddNewTask;
