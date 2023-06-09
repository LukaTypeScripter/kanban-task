
import React, { createContext, useState } from "react";
import NameData from '../data.json'
export interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: SubTask[];
}

interface SubTask {
  title: string;
  isCompleted: boolean;
}

interface Column {
  name: string;
  tasks: Task[];
}

export interface BoardData {
  name: string;
  columns: Column[];
}
interface MainContextValue {
  HandlePlatformChange: (platform: string) => void;
  selectedPlatform: string;
  setName:React.Dispatch<React.SetStateAction<string>>,
  name:string,
  boardName:string,
  setBoardName:React.Dispatch<React.SetStateAction<string>>
  boardData:BoardData[],
  setBoaredData:React.Dispatch<React.SetStateAction<BoardData[]>>;
  board:BoardData | undefined,
  modifiedBoard: BoardData[];
  setModifiedBoard: React.Dispatch<React.SetStateAction<BoardData[]>>;
  platformData:BoardData[]
  setActiveIndex:React.Dispatch<React.SetStateAction<number>>
  activeIndex:number,
  EdiModalOpen:() => void,
  editModal:boolean,
  setEditModal:React.Dispatch<React.SetStateAction<boolean>>,
  delateISopen:boolean,
  setDelateIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedTask:null
  setSelectedTask:React.Dispatch<React.SetStateAction<null>>
  isOpenAboutModal:boolean
  setIsOpenAboutModal:React.Dispatch<React.SetStateAction<boolean>>
}

const initialContextValue: MainContextValue = {
  HandlePlatformChange: () => {},
  selectedPlatform: "Platform Launch",
  setName: () => {},
  name:'',
  boardName:"",
  setBoardName:() => {},
  boardData: [] as BoardData[],
  setBoaredData:() => {},
  board: undefined,
  modifiedBoard:[],
  setModifiedBoard:() => {},
  platformData:[] as BoardData[],
  activeIndex:0,
  setActiveIndex:() => {},
  EdiModalOpen:() => {},
  editModal:false,
  setEditModal:() => {},
  delateISopen:false,
  setDelateIsOpen:() => {},
  selectedTask:null,
  setSelectedTask:() => {},
  isOpenAboutModal:false,
  setIsOpenAboutModal:() => {},
};

const MainContext = createContext<MainContextValue>(initialContextValue);

export const MainContextProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    "Platform Launch"
  );
  const [name,setName] = useState<string>("");
  const [boardName,setBoardName] = useState<string>("")
  const [boardData,setBoaredData] = useState(NameData.boards)
  const [modifiedBoard, setModifiedBoard] = useState<BoardData[]>(boardData);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [editModal,setEditModal] = useState(false);
  const [delateISopen,setDelateIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); 
  const [isOpenAboutModal,setIsOpenAboutModal] = useState(false);
  const HandlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
  };
  const EdiModalOpen = () => {
    setEditModal(!editModal)
  }
  const platformData: BoardData[] = Object.values(boardData);
  const board = platformData.find((board) => board.name === selectedPlatform);

  const value: MainContextValue = {
    selectedPlatform,
    HandlePlatformChange,
    setName,
    name,
    boardName,
    setBoardName,
    boardData,
    setBoaredData,
    board,
    modifiedBoard,
    setModifiedBoard,
    platformData,
    activeIndex,
    setActiveIndex,
    EdiModalOpen,
    editModal,
    setEditModal,
    delateISopen,
    setDelateIsOpen,
    selectedTask,
    setSelectedTask,
    isOpenAboutModal,
    setIsOpenAboutModal
  };

  return (
    <MainContext.Provider value={value}>{children}</MainContext.Provider>
  );
};

export default MainContext;
