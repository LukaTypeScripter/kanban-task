import  { useEffect, useRef,useContext } from 'react'
import { Delate } from '../Elapsis-menu/ElapsisStyles/elapsis'
import AppContext from '../../contexts/Header'
import { ElapsisMenuTask } from './styles/taskDel'
import MainContext from '../../contexts/MainContext'

function TaskDElateElapsis() {
    const smallModalREf = useRef<HTMLDivElement>(null)
    const {isToggled,} = useContext(AppContext)
    const {setIsOpenTaskDel,isOpenTaskDel,setIsOpenAboutModal,setIsOpenDelElapsis} = useContext(MainContext)
    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (smallModalREf.current && !smallModalREf.current.contains(event.target as Node)) {
          
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    })

    const toggle= () => {
      setIsOpenAboutModal(false)
      setIsOpenTaskDel(!isOpenTaskDel)
      setIsOpenDelElapsis(false)
    }
  
  return (
    <ElapsisMenuTask ref={smallModalREf} isToggled={isToggled}>
        <Delate onClick={toggle}>Delate board</Delate>
    </ElapsisMenuTask>
  )
}

export default TaskDElateElapsis