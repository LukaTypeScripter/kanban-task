import React, { useContext, useState } from 'react'
import { HeaderCont,Imgs,HeaderName,AddBtn,VerticalImg } from './HeaderStyles/headerStyle'
import logo from '../../assets/logo-mobile.svg'
import ArrowDOwn from '../../assets/icon-chevron-down.svg'
import ArrowUp from '../../assets/icon-chevron-up.svg'
import AddTask from '../../assets/icon-add-task-mobile.svg'
import ThreeDots from '../../assets/icon-vertical-ellipsis.svg'
import AppContext from '../../contexts/Header'
import NavModal from '../NavModal/NavModal'
function Header() {
   const {toggleOpen,isOpen,isToggled} = useContext(AppContext)
  return (
    <>
   <HeaderCont isToggled={isToggled}>
    <Imgs src={logo}/>
    <HeaderName isToggled={isToggled}>
    <h3>Platform Launch</h3>
    <img onClick={toggleOpen} src={isOpen ?ArrowUp : ArrowDOwn} alt="" />
    </HeaderName>
    <AddBtn><img  src={AddTask} alt="" /></AddBtn>
    <VerticalImg src={ThreeDots} alt="" />
    {isOpen && (
    <NavModal/>
   )}
   </HeaderCont>
   

   </>
  )
}

export default Header