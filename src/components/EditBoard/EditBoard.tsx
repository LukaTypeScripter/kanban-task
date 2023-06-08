import React, { useContext, useEffect, useRef, useState } from 'react'
import { Modal, ModalCOnt, NewBoardHeader, Lables, BoardNameInp, AddBtn, ModalCols, ModalCol, InputCont, SecondBtn } from '../AddNewBoard/NewBoardStyles/newBoardStyles'
import AppContext from '../../contexts/Header';
import MainContext from '../../contexts/MainContext';
import cross from '../../assets/icon-cross.svg'

function EditBoard() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isToggled, handleDeleteColumnInput, columnInputs, setColumnInputs,setIsSmallModalOpen } = useContext(AppContext);
  const { setBoardName, setEditModal, activeIndex, boardData, boardName, setBoaredData, HandlePlatformChange } = useContext(MainContext);
  const activeBoard = boardData[activeIndex ?? 0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setEditModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const [boardNameInput, setBoardNameInput] = useState(activeBoard?.name || '');

  useEffect(() => {
    const columnNames = activeBoard?.columns.map(column => column.name) ?? [];
    setColumnInputs(columnNames);
  }, [activeBoard]);
// error adding new columns
  const handleEditBoard = () => {
    const updatedBoardData = [...boardData];
    updatedBoardData[activeIndex].name = boardNameInput;
    updatedBoardData[activeIndex].columns = columnInputs.map((input, index) => {
      const column = activeBoard?.columns[index];
      return {
        ...column, // Keep all properties of the original column
        name: input // Update only the name property
      };
    });
    setBoaredData(updatedBoardData);
    setEditModal(false);
    HandlePlatformChange(boardNameInput);
    setIsSmallModalOpen(false)
  };

  return (
    <ModalCOnt>
      <Modal ref={modalRef} isToggled={isToggled}>
        <NewBoardHeader isToggled={isToggled}>Edit Board</NewBoardHeader>
        <Lables isToggled={isToggled}>Board Name</Lables>
        <BoardNameInp isToggled={isToggled} value={boardNameInput} onChange={(e) => setBoardNameInput(e.target.value)} type='text' />
        <Lables isToggled={isToggled}>Board Columns</Lables>
        <ModalCols>
          {columnInputs.map((input, index) => (
            <ModalCol key={index}>
              <InputCont>
                <BoardNameInp
                  isToggled={isToggled}
                  key={index}
                  type='text'
                  value={input}
                  onChange={(e) => {
                    const newInputs = [...columnInputs];
                    newInputs[index] = e.target.value;
                    setColumnInputs(newInputs);
                    console.log(newInputs);
                  }}
                />
              </InputCont>
              <img src={cross} onClick={() => handleDeleteColumnInput(index)} />
            </ModalCol>
          ))}
        </ModalCols>
        <AddBtn isToggled={isToggled}>+ Add column</AddBtn>
        <SecondBtn onClick={handleEditBoard}>Save Changes</SecondBtn>
      </Modal>
    </ModalCOnt>
  );
}

export default EditBoard;
