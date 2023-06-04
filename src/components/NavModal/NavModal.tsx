import React, { useContext, useEffect, useRef, useState } from 'react'

import { DropDownModal,DropDownContainer,Title,DropDownBoards,DropDownBoard,BoardIcon,AddNewTask,AddBoardIcon,AddBoardText,TogglerTheme,Switch,Inputs,Slider } from './NavModalStyles/navModal'
import NameData from '../../data.json'
import IconBoard from '../../assets/icon-board.svg'
import ligthTheme from '../../assets/icon-light-theme.svg'
import darkTheme from '../../assets/icon-dark-theme.svg'
import AppContext, { AppContextProvider } from '../../contexts/Header'
import MainContext from '../../contexts/MainContext'
function NavModal() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const modalRef = useRef<HTMLDivElement>(null)
    const {toggleTheme,isToggled,toggleAddNewBBOard,setIsOpen} = useContext(AppContext)
    const {HandlePlatformChange} = useContext(MainContext)
    const handleItemClick = (index: number) => {
      setActiveIndex(index);
      const selectedBoard = NameData.boards[index].name;
      HandlePlatformChange(selectedBoard);
      
    };

    //close when you click outside the container
    useEffect(() => {
      const handleOutsideClick = (e:MouseEvent) => {
        if(modalRef.current && !modalRef.current.contains(e.target as Node)) {
          setIsOpen(false)
        }

      }
      const handleEscClick = (e:KeyboardEvent) => {
        if(e.key === 'Escape') {
          setIsOpen(false)
        }
      }
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleEscClick)
    
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscClick)
      }
    },[])
  return (
    <DropDownContainer  >
        <DropDownModal isToggled={isToggled} ref={modalRef}>
            <Title>ALL BOARDS (3)</Title>
            <DropDownBoards>
               {NameData.boards.map((board, index) => (
    <DropDownBoard
      key={index}
      active={activeIndex === index}
      onClick={() => handleItemClick(index)}
    >
        <BoardIcon src={IconBoard} alt="" />
      {board.name}
    </DropDownBoard>
  ))}
  <AddNewTask>
  <AddBoardIcon src={IconBoard} alt="" />
  <AddBoardText onClick={toggleAddNewBBOard}>+ Create New Board</AddBoardText>
  </AddNewTask>
                <TogglerTheme isToggled={isToggled}>
                <img src={ligthTheme} alt="" />
                <Switch>
                    <Inputs type="checkbox" onClick={toggleTheme} />
                    <Slider isToggled={isToggled}>

                    </Slider>
                </Switch>
                <img src={darkTheme} alt="" />
                </TogglerTheme>
                
            </DropDownBoards>
            
        </DropDownModal>
    </DropDownContainer>
  )
}

export default NavModal