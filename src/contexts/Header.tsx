import React, { createContext, useState } from "react";

// Define the shape of your context value
interface AppContextValue {
  isOpen: boolean;
  isToggled: boolean;
  isOpenAddModal: boolean;
  columnInputs: string[];
  toggleOpen: () => void;
  toggleTheme: () => void;
  toggleAddNewBBOard: () => void;
  handleAddColumnInput: () => void;
  setIsOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setColumnInputs: React.Dispatch<React.SetStateAction<string[]>>;
  handleDeleteColumnInput: (index: number) => void;
  handleDeleteSubTasks: (index: number) => void;
  setSubTasks: React.Dispatch<React.SetStateAction<string[]>>;
  subTasks:string[];
  handleAddSubTask: () => void;
  isNewTask: boolean;
  handleTaskModal: () => void;
  setIsNewTask:React.Dispatch<React.SetStateAction<boolean>>,
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
  setIsSmallModalOpen:React.Dispatch<React.SetStateAction<boolean>>,
  isSmallModalOpen:boolean
}

// Create the initial context value
const initialContextValue: AppContextValue = {
  isOpen: false,
  isToggled: false,
  isOpenAddModal: false,
  columnInputs: [],
  setIsOpenAddModal: () => {},
  toggleOpen: () => {},
  toggleTheme: () => {},
  toggleAddNewBBOard: () => {},
  handleAddColumnInput: () => {},
  setColumnInputs: () => {},
  handleDeleteColumnInput: () => {},
  handleDeleteSubTasks: () => {},
  setSubTasks: () => {},
  subTasks:[],
  handleAddSubTask: () => {},
  isNewTask:false,
  handleTaskModal: () => {},
  setIsNewTask: () => {},
  setIsOpen: () => {},
  setIsSmallModalOpen: () => {},
  isSmallModalOpen:false
};

// Create the context
const AppContext = createContext<AppContextValue>(initialContextValue);

// Create the provider component
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [columnInputs, setColumnInputs] = useState(["todo", "doing"]);
  const [subTasks, setSubTasks] = useState([""]);
  const [isNewTask, setIsNewTask] = useState(false)
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false)
  console.log(subTasks)
  const toggleTheme = () => {
    setIsToggled(!isToggled);
    console.log(isToggled)
  };
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleAddColumnInput = () => {
    setColumnInputs([...columnInputs, ""]);
  };
  const toggleAddNewBBOard = () => {
    setIsOpen(false);
    setIsOpenAddModal(!isOpenAddModal);
  };

  //delate its index  column inputs
  const handleDeleteColumnInput = (index: number) => {
    const newInputs = [...columnInputs];
    newInputs.splice(index, 1);
    setColumnInputs(newInputs);
  };
  //delate its index subTasks
  const handleDeleteSubTasks = (index: number) => {
    const newInputs = [...subTasks];
    newInputs.splice(index, 1);
    setSubTasks(newInputs);
  };
  //add input
  const handleAddSubTask = () => {
    setSubTasks([...subTasks, ""]);
    console.log('add SubTask' + subTasks)
  };
  //toggle open and close aother modals
  const handleTaskModal = () => {
    setIsOpen(false);
    setIsOpenAddModal(false);
    setIsNewTask(!isNewTask);
  }
  //small modlal  toggle

  
  const value: AppContextValue = {
    isOpen,
    toggleOpen,
    toggleTheme,
    isToggled,
    toggleAddNewBBOard,
    isOpenAddModal,
    setIsOpenAddModal,
    columnInputs,
    handleAddColumnInput,
    setColumnInputs,
    handleDeleteColumnInput,
    handleDeleteSubTasks,
    setSubTasks,
    subTasks,
    handleAddSubTask,
    handleTaskModal,
    isNewTask,
    setIsNewTask,
    setIsOpen,
    setIsSmallModalOpen,
    isSmallModalOpen
  };
  // Provide the context value to the children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
