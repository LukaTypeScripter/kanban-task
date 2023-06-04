import React, { useContext, useEffect, useRef, useState } from 'react'
import { Modal, ModalCOnt,NewBoardHeader,Lables,BoardNameInp,AddBtn,ModalCols,ModalCol, InputCont, SecondBtn } from './NewBoardStyles/newBoardStyles'
import AppContext from '../../contexts/Header';
import cross from '../../assets/icon-cross.svg'
import AddNewTask from '../AddNewTask/AddNewTask';

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
  return (
    <ModalCOnt>
        <Modal ref={modalRef} isToggled={isToggled}>
            <NewBoardHeader isToggled={isToggled}>Add new Board</NewBoardHeader>
            <Lables isToggled={isToggled}>Board Name</Lables>
            <BoardNameInp isToggled={isToggled}  type='text' />
            <Lables isToggled={isToggled}>Board Columns</Lables> 
            <ModalCols>
            {columnInputs.map((input,index) => (
                <ModalCol>
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
    }}
    />
    </InputCont>
        <img src={cross} onClick={() => handleDeleteColumnInput(index)} />
    </ModalCol>
))}

            </ModalCols>
            <AddBtn onClick={handleAddColumnInput} isToggled={isToggled} >+ Add column</AddBtn>
            <SecondBtn onClick={handleAddColumnInput}>Create New Board</SecondBtn>
            
        </Modal>
      {/**add New task modal */}
      

    </ModalCOnt>
  )
}

export default AddNewBoard





