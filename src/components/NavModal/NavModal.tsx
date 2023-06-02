import React, { useContext, useState } from 'react'

import { DropDownModal,DropDownContainer,Title,DropDownBoards,DropDownBoard,BoardIcon,AddNewTask,AddBoardIcon,AddBoardText,TogglerTheme,Switch,Inputs,Slider } from './NavModalStyles/navModal'
import NameData from '../../data.json'
import IconBoard from '../../assets/icon-board.svg'
import ligthTheme from '../../assets/icon-light-theme.svg'
import darkTheme from '../../assets/icon-dark-theme.svg'
import AppContext, { AppContextProvider } from '../../contexts/Header'
function NavModal() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const handleItemClick = (index: number) => {
        setActiveIndex(index);
      };
    const {toggleTheme,isToggled} = useContext(AppContext)
  return (
    <DropDownContainer >
        <DropDownModal isToggled={isToggled}>
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
  <AddBoardText>+ Create New Board</AddBoardText>
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