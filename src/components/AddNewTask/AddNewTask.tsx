import React, { useContext, useEffect, useRef } from "react";
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
function AddNewTask() {
    const {
        isToggled,
        handleDeleteSubTasks,
        setSubTasks,
        subTasks,
        handleAddSubTask,
        setIsNewTask

      } = useContext(AppContext);
   

  return (
    <ModalCOnt>
      <Modal isToggled={isToggled} >
        <NewBoardHeader isToggled={isToggled}>
            Add New Task
            <img src={cross} alt="" onClick={() => setIsNewTask(false)} />
        </NewBoardHeader>
        <Lables isToggled={isToggled}>Task Name</Lables>
        <InputCont>
          <BoardNameInp isToggled={isToggled} type="text" />
        </InputCont>
        <DescCont>
        <Lables isToggled={isToggled}>Description</Lables>
          <Description isToggled={isToggled} />
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
              <img src={cross} onClick={() => handleDeleteSubTasks(index)} />
            </ModalCol>
          ))}
          <AddBtn onClick={handleAddSubTask} isToggled={isToggled}>
            + Add SubTask
          </AddBtn>
        </ModalCols>
        <SelectCont>
          <Lables isToggled={isToggled}>Current Status</Lables>
          <Options isToggled={isToggled}>
            <OptSelection>Todo</OptSelection>
            <OptSelection>Doing</OptSelection>
            <OptSelection>Done</OptSelection>
          </Options>
        </SelectCont>
        <SecondBtn>Create Task</SecondBtn>
      </Modal>
    </ModalCOnt>
  );
}

export default AddNewTask;
