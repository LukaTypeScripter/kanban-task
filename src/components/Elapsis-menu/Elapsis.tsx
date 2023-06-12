import  { useContext, useEffect, useRef } from 'react'
import { ElapsisMenu,Delate } from './ElapsisStyles/elapsis'
import AppContext from '../../contexts/Header'
import MainContext from '../../contexts/MainContext'

export default function Elapsis() {
    const {setIsSmallModalOpen,isToggled} = useContext(AppContext)
    const {EdiModalOpen,setDelateIsOpen,delateISopen} = useContext(MainContext)
    const smallModalREf = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (smallModalREf.current && !smallModalREf.current.contains(event.target as Node)) {
          setIsSmallModalOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    })

    
  
  return (
    <ElapsisMenu ref={smallModalREf} isToggled={isToggled}>
        <p onClick={EdiModalOpen}>edit board</p>
        <Delate onClick={() => setDelateIsOpen(!delateISopen)}>Delate board</Delate>
    </ElapsisMenu>
  )
}
