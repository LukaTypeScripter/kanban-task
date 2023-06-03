import React, { useContext, useState } from 'react'
import { HeaderCont,Imgs,HeaderName,AddBtn,VerticalImg } from './HeaderStyles/headerStyle'
import logo from '../../assets/logo-mobile.svg'
import ArrowDOwn from '../../assets/icon-chevron-down.svg'
import ArrowUp from '../../assets/icon-chevron-up.svg'
import AddTask from '../../assets/icon-add-task-mobile.svg'
import ThreeDots from '../../assets/icon-vertical-ellipsis.svg'
import AppContext from '../../contexts/Header'
import NavModal from '../NavModal/NavModal'
import AddNewBoard from '../AddNewBoard/AddNewBoard'
import AddNewTask from '../AddNewTask/AddNewTask'
function Header() {
   const {toggleOpen,isOpen,isToggled,isOpenAddModal,handleTaskModal,isNewTask} = useContext(AppContext)
  return (
    <>
   <HeaderCont isToggled={isToggled}>
    <Imgs src={logo}/>
    <HeaderName isToggled={isToggled}>
    <h3>Platform Launch</h3>
    <img onClick={toggleOpen} src={isOpen ?ArrowUp : ArrowDOwn} alt="" />
    </HeaderName>
    <AddBtn><img  src={AddTask} alt="" onClick={handleTaskModal} /></AddBtn>
    <VerticalImg src={ThreeDots} alt="" />
    {isOpen && (
    <NavModal/>
   )}
   {isOpenAddModal && (
    <AddNewBoard/>
   )}
   
   </HeaderCont>
   {isNewTask && (
    <AddNewTask/>
   )}

   </>
  )
}

export default Header