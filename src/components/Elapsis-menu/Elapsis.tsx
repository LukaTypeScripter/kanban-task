import React, { useContext, useEffect, useRef, useState } from 'react'
import { ElapsisMenu,Delate } from './ElapsisStyles/elapsis'
import AppContext from '../../contexts/Header'
import MainContext from '../../contexts/MainContext'

export default function Elapsis() {
    const {setIsSmallModalOpen,isToggled} = useContext(AppContext)
    const {activeIndex,boardData,setBoaredData,setActiveIndex,setBoardName,HandlePlatformChange} = useContext(MainContext)
    const smallModalREf = useRef<HTMLDivElement>(null)

    useEffect(() => {
       
     const handleEsc = (e:KeyboardEvent) => {
        if(e.key === 'Escape') {
            setIsSmallModalOpen(false)
        }
     }
     
     document.addEventListener('keydown', handleEsc)

     return () => {
     document.removeEventListener('keydown', handleEsc)
     }

    })

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
    };
  
  return (
    <ElapsisMenu ref={smallModalREf} isToggled={isToggled}>
        <p >edit board</p>
        <Delate onClick={handleDeleteBoard}>Delate board</Delate>
    </ElapsisMenu>
  )
}
