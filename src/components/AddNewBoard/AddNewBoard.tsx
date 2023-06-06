import React, { useContext, useEffect, useRef, useState } from 'react'
import { Modal, ModalCOnt,NewBoardHeader,Lables,BoardNameInp,AddBtn,ModalCols,ModalCol, InputCont, SecondBtn } from './NewBoardStyles/newBoardStyles'
import AppContext from '../../contexts/Header';
import cross from '../../assets/icon-cross.svg'
import AddNewTask from '../AddNewTask/AddNewTask';
import MainContext from '../../contexts/MainContext';

function AddNewBoard() {
    const {setIsOpenAddModal,columnInputs,setColumnInputs,handleAddColumnInput,handleDeleteColumnInput,isToggled} = useContext(AppContext)
    const modalRef = useRef<HTMLDivElement>(null);
   

    useEffect(() => {
      const handleOutsideClick = (event:MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpenAddModal(false);
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);
    const {boardData,boardName,setBoardName,} = useContext(MainContext)
    const {setBoaredData,setActiveIndex} = useContext(MainContext)

    const handleAddNewBoard = () => {
      const updatedBoardData = [...boardData];
      const newBoard = {
        name: boardName,
        columns: columnInputs.map((columnName) => ({
          name: columnName,
          tasks: [],
        })),
      };
    
      updatedBoardData.push(newBoard);
    
      setBoaredData(updatedBoardData);
    
      // Set the activeIndex to the index of the newly created board
      const newIndex = updatedBoardData.length - 1;
      setActiveIndex(newIndex);
    console.log(newIndex)
      setIsOpenAddModal(false);
    };
    console.log(boardData)
  return (
    <ModalCOnt>
        <Modal ref={modalRef} isToggled={isToggled}>
            <NewBoardHeader isToggled={isToggled}>Add new Board</NewBoardHeader>
            <Lables isToggled={isToggled}>Board Name</Lables>
            <BoardNameInp isToggled={isToggled} onChange={(e) => setBoardName(e.target.value)}  type='text' />
            <Lables isToggled={isToggled}>Board Columns</Lables> 
            <ModalCols>
            {columnInputs.map((input,index) => (
                <ModalCol key={index}>
                 <InputCont>   
    <BoardNameInp
    isToggled={isToggled} 
    key={index}
    type='text'
    value={input}
    onChange={(e) => {
        const newInputs = [...columnInputs]
        newInputs[index] = e.target.value
        setColumnInputs(newInputs)
        console.log(newInputs)
    }}
    />
    </InputCont>
        <img src={cross} onClick={() => handleDeleteColumnInput(index)} />
    </ModalCol>
))}

            </ModalCols>
            <AddBtn onClick={handleAddColumnInput} isToggled={isToggled} >+ Add column</AddBtn>
            <SecondBtn onClick={handleAddNewBoard}>Create New Board</SecondBtn>
            
        </Modal>
    </ModalCOnt>
  )
}

export default AddNewBoard





