import React, { useContext } from "react";
import { DelateHeader, DelateModal, Premisinon,DelateModalBtn,DelateBtn,CancelBtn } from "./DelateStyles/delate";
import MainContext from "../../contexts/MainContext";
import { ModalCOnt } from "../AddNewBoard/NewBoardStyles/newBoardStyles";
import AppContext from "../../contexts/Header";

function DelateMOdal() {
  const { activeIndex, boardData,setBoaredData,setActiveIndex,HandlePlatformChange,setDelateIsOpen, } = useContext(MainContext);
  const { setIsSmallModalOpen,isToggled} = useContext(AppContext)
  const handleDeleteBoard = () => {
    if (activeIndex !== null) {
      const updatedBoardData = [...boardData];
      updatedBoardData.splice(activeIndex, 1);
  
      let newActiveIndex = activeIndex;
      if (newActiveIndex >= updatedBoardData.length) {
        newActiveIndex = updatedBoardData.length - 1;
      }
  
      setBoaredData(updatedBoardData);
      setActiveIndex(newActiveIndex);
      if (updatedBoardData.length > 0) {
        const selectedBoard = updatedBoardData[newActiveIndex].name;
        HandlePlatformChange(selectedBoard);
      }
    }
    setDelateIsOpen(false)
    setIsSmallModalOpen(false)
  };
  const activeBoard = boardData[activeIndex ?? 0];
  return (
    <ModalCOnt>
    <DelateModal isToggled={isToggled}>
      <DelateHeader>Delete this board ?</DelateHeader>
      <Premisinon>
      Are you sure you want to delete the "{activeBoard.name}" board? This action will remove all columns and tasks and cannot be reversed.
      </Premisinon>
      <DelateModalBtn>
        <DelateBtn onClick={handleDeleteBoard}>Delate</DelateBtn>
        <CancelBtn onClick={() => setDelateIsOpen(false)} isToggled={isToggled}>Cancel</CancelBtn>
      </DelateModalBtn>
    </DelateModal>
    </ModalCOnt>
  );
}

export default DelateMOdal;
