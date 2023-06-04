import React, { useContext, useEffect, useRef, useState } from 'react'
import { ElapsisMenu,Delate } from './ElapsisStyles/elapsis'
import AppContext from '../../contexts/Header'

export default function Elapsis() {
    const {setIsSmallModalOpen,isToggled} = useContext(AppContext)
    const smallModalREf = useRef<HTMLDivElement>(null)

    useEffect(() => {
       
     const handleEsc = (e:any) => {
        if(e.key === 'Escape') {
            setIsSmallModalOpen(false)
        }
     }
     
     document.addEventListener('keydown', handleEsc)

     return () => {
     document.removeEventListener('keydown', handleEsc)
     }

    })
  return (
    <ElapsisMenu ref={smallModalREf} isToggled={isToggled}>
        <p >edit board</p>
        <Delate>Delate board</Delate>
    </ElapsisMenu>
  )
}
